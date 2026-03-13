import { chromium } from 'playwright';
import { anonymizeProxy, closeAnonymizedProxy } from 'proxy-chain';
import { fetchRotationProxies, isCloudflareBlockPage, parseProxyString } from './proxy';
import type { ProxyConfig, ProxyResult } from './proxy';

const NAV_TIMEOUT = 60000;
const WARMUP_TIMEOUT = 25000;

/** SOCKS5 + auth: Chromium không hỗ trợ, dùng proxy-chain tạo HTTP proxy local không auth */
async function resolvePlaywrightProxy(proxyConfig: ProxyConfig | null | undefined): Promise<{ server: string; username?: string; password?: string; close?: () => Promise<void> } | null> {
  if (!proxyConfig) return null;

  const type = proxyConfig.type || 'http';
  const hasAuth = !!(proxyConfig.user || proxyConfig.pass);

  if (type === 'socks5' && hasAuth) {
    const user = proxyConfig.user ? encodeURIComponent(proxyConfig.user) : '';
    const pass = proxyConfig.pass ? encodeURIComponent(proxyConfig.pass) : '';
    const auth = user && pass ? `${user}:${pass}@` : '';
    const socks5Url = `socks5://${auth}${proxyConfig.host}:${proxyConfig.port}`;
    const localUrl = await anonymizeProxy(socks5Url);
    return {
      server: localUrl,
      close: async () => {
        await closeAnonymizedProxy(localUrl, true);
      },
    };
  }

  if (type === 'socks5') {
    return { server: `socks5://${proxyConfig.host}:${proxyConfig.port}` };
  }
  return {
    server: `http://${proxyConfig.host}:${proxyConfig.port}`,
    username: proxyConfig.user,
    password: proxyConfig.pass,
  };
}

export async function playwrightRequest(
  name: string,
  url: string,
  body = '',
  token: string | null = null,
  contentType = 'application/json',
  method = 'GET',
  proxyConfig?: ProxyConfig | null
): Promise<ProxyResult> {
  let browser;
  let closeProxy: (() => Promise<void>) | undefined;

  try {
    const proxyOpt = await resolvePlaywrightProxy(proxyConfig);
    if (proxyOpt?.close) closeProxy = proxyOpt.close;

    browser = await chromium.launch({
      headless: true,
      args: [
        '--disable-blink-features=AutomationControlled',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
      ],
      proxy: proxyOpt ? {
        server: proxyOpt.server,
        username: proxyOpt.username,
        password: proxyOpt.password,
      } : undefined,
    });

    const context = await browser.newContext({
      ignoreHTTPSErrors: true,
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      locale: 'vi-VN',
      viewport: { width: 1920, height: 1080 },
      extraHTTPHeaders: {
        'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
      },
    });

    const page = await context.newPage();
    const targetUrl = new URL(url);

    // Warm up: load origin so Cloudflare challenge can set cookies (wait for network idle).
    await page.goto(`${targetUrl.origin}/`, {
      waitUntil: 'networkidle',
      timeout: WARMUP_TIMEOUT,
    }).catch(() => null);

    const upperMethod = method.toUpperCase();

    if (upperMethod === 'GET' || upperMethod === 'HEAD') {
      const response = await page.goto(url, {
        waitUntil: 'domcontentloaded',
        timeout: NAV_TIMEOUT,
      });

      const text = response ? await response.text() : await page.content();

      return {
        ok: true,
        response: text,
        error: '',
        errno: 0,
        info: {
          http_code: response?.status() || 200,
        },
      };
    }

    const result = await page.evaluate(async (payload) => {
      const headers: Record<string, string> = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': payload.contentType,
      };

      if (payload.token) {
        headers['X-Token'] = payload.token;
      }

      const res = await fetch(payload.url, {
        method: payload.method,
        headers,
        body: payload.body || undefined,
        credentials: 'include',
      });

      return {
        status: res.status,
        text: await res.text(),
      };
    }, {
      url,
      method: upperMethod,
      body,
      token,
      contentType,
    });

    return {
      ok: true,
      response: result.text,
      error: '',
      errno: 0,
      info: {
        http_code: result.status,
      },
    };
  } catch (err: any) {
    return {
      ok: false,
      response: '',
      error: err?.message || `${name} Playwright request failed`,
      errno: 1,
      info: {
        http_code: 0,
      },
    };
  } finally {
    await browser?.close().catch(() => null);
    await closeProxy?.().catch(() => null);
  }
}

export async function playwrightRequestWithRotation(
  name: string,
  url: string,
  body = '',
  token: string | null = null,
  contentType = 'application/json',
  method = 'GET',
  defaultProxyConfig?: ProxyConfig | null
): Promise<ProxyResult> {
  const candidates: Array<ProxyConfig | null> = [];

  if (defaultProxyConfig) {
    candidates.push(defaultProxyConfig);
  }

  const rotation = await fetchRotationProxies();
  for (const proxyString of rotation) {
    const parsed = parseProxyString(proxyString);
    if (!parsed) continue;

    const duplicate = candidates.some((item) =>
      item &&
      item.host === parsed.host &&
      item.port === parsed.port &&
      (item.user || '') === (parsed.user || '') &&
      (item.pass || '') === (parsed.pass || '')
    );

    if (!duplicate) {
      candidates.push(parsed);
    }
  }

  if (candidates.length === 0) {
    return playwrightRequest(name, url, body, token, contentType, method, null);
  }

  let lastResult: ProxyResult = {
    ok: false,
    response: '',
    error: 'No Playwright proxy attempt succeeded',
    errno: 1,
    info: { http_code: 0 },
  };

  for (const candidate of candidates) {
    const result = await playwrightRequest(
      name,
      url,
      body,
      token,
      contentType,
      method,
      candidate
    );

    if (!result.ok) {
      lastResult = result;
      continue;
    }

    if (result.info.http_code === 403 || isCloudflareBlockPage(result.response)) {
      lastResult = result;
      continue;
    }

    return result;
  }

  return lastResult;
}
