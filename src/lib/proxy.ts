import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpProxyAgent } from 'http-proxy-agent';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { getProxies } from './db';

const PROXY_HOST = process.env.PROXY_HOST || '';
const PROXY_PORT = parseInt(process.env.PROXY_PORT || '0');
const PROXY_USER = process.env.PROXY_USER || '';
const PROXY_PASS = process.env.PROXY_PASS || '';
const PROXY_TYPE = (process.env.PROXY_TYPE || 'http').toLowerCase();

const UPSTREAM_BASE = process.env.UPSTREAM_BASE || 'https://demo7892.fun';
const PROXY_REQUIRED = (process.env.PROXY_REQUIRED || 'true').toLowerCase() !== 'false';

export interface ProxyConfig {
  host: string;
  port: number;
  user?: string;
  pass?: string;
  type?: 'http' | 'https' | 'socks5';
}

export interface ProxyResult {
  ok: boolean;
  response: string;
  error: string;
  errno: number;
  info: {
    http_code: number;
    total_time?: number;
  };
}

/** 检测上游返回的是否为 Cloudflare/WAF 拦截页（HTML），而非期望的 JSON */
export function isCloudflareBlockPage(response: string): boolean {
  if (typeof response !== 'string' || !response.trim()) return false;
  const s = response.trim().slice(0, 4000).toLowerCase();
  return (
    s.includes('cloudflare') ||
    s.includes('attention required') ||
    s.includes('cf-browser-verification') ||
    s.includes('sorry, you have been blocked') ||
    s.includes('you have been blocked') ||
    s.includes('please enable cookies') ||
    s.includes('enable_cookies') ||
    s.includes('block_headline') ||
    s.includes('cf_subheader') ||
    s.includes('unable to access') ||
    s.includes('cf.errors.css') ||
    s.includes('cdn-cgi/styles/cf.') ||
    s.includes('security service to protect itself') ||
    (s.startsWith('<!') && (s.includes('cf-') || s.includes('blocked')))
  );
}

export function buildProxyHeaders(url: string, token?: string | null, contentType = 'application/json') {
  const origin = 'https://play.789club.fun';
  
  const headers: string[] = [
    'Accept: application/json, text/plain, */*',
    'Accept-Language: vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
    `Content-Type: ${contentType}`,
    'Cache-Control: no-cache',
    'Pragma: no-cache',
    `Origin: ${origin}`,
    `Referer: ${origin}/`,
    'Priority: u=1, i',
    'Sec-CH-UA: "Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'Sec-CH-UA-Mobile: ?0',
    'Sec-CH-UA-Platform: "Windows"',
    'Sec-Fetch-Dest: empty',
    'Sec-Fetch-Mode: cors',
    'Sec-Fetch-Site: cross-site',
    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  ];

  if (token) {
    headers.push(`X-Token: ${token}`);
  }

  return headers;
}

export async function fetchRotationProxies(): Promise<string[]> {
  try {
    const proxiesData = await getProxies();
    const proxies = proxiesData.map((row: any) => row.proxy).filter(Boolean);
    if (proxies.length > 1) {
      proxies.sort(() => Math.random() - 0.5);
    }
    return proxies;
  } catch {
    return [];
  }
}

export function parseProxyString(proxyString: string): ProxyConfig | null {
  proxyString = proxyString.trim();
  if (proxyString === '') return null;

  let type: 'http' | 'https' | 'socks5' = 'http';
  let remaining = proxyString;

  // Check for type prefix (e.g., "socks5:host:port:user:pass")
  const typePrefixMatch = proxyString.match(/^(socks5|http|https):(.*)$/i);
  if (typePrefixMatch) {
    type = typePrefixMatch[1].toLowerCase() as 'http' | 'https' | 'socks5';
    remaining = typePrefixMatch[2];
  }

  const parts = remaining.split(':', 4);
  if (parts.length < 2) return null;

  const host = parts[0].trim();
  const port = parseInt(parts[1].trim());
  const user = parts[2]?.trim() || '';
  const pass = parts[3]?.trim() || '';

  if (!host || isNaN(port)) return null;

  return { host, port, user, pass, type };
}

export function getDefaultProxyConfig(): ProxyConfig | null {
  if (!PROXY_HOST || Number.isNaN(PROXY_PORT) || PROXY_PORT <= 0) {
    return null;
  }

  return {
    host: PROXY_HOST,
    port: PROXY_PORT,
    user: PROXY_USER || undefined,
    pass: PROXY_PASS || undefined,
    type: PROXY_TYPE as 'http' | 'https' | 'socks5',
  };
}

function buildProxyUrl(proxyConfig: ProxyConfig): string {
  const auth = proxyConfig.user && proxyConfig.pass
    ? `${encodeURIComponent(proxyConfig.user)}:${encodeURIComponent(proxyConfig.pass)}@`
    : '';
  const type = proxyConfig.type || 'http';
  if (type === 'socks5') {
    return `socks5://${auth}${proxyConfig.host}:${proxyConfig.port}`;
  }
  return `http://${auth}${proxyConfig.host}:${proxyConfig.port}`;
}

export async function proxyExecuteRequest(
  name: string,
  url: string,
  body: string,
  token: string | null,
  contentType: string,
  method: string,
  proxyConfig?: ProxyConfig | null
): Promise<ProxyResult> {
  const headers = buildProxyHeaders(url, token, contentType);
  const upperMethod = method.toUpperCase();

  const axiosConfig: AxiosRequestConfig = {
    url,
    method: upperMethod,
    headers: headers.reduce((acc, h) => {
      const [key, ...valueParts] = h.split(': ');
      acc[key] = valueParts.join(': ');
      return acc;
    }, {} as Record<string, string>),
    timeout: 60000,
    validateStatus: () => true,
    maxRedirects: 5,
  };

  if (upperMethod !== 'GET' && body) {
    axiosConfig.data = body;
  }

  if (proxyConfig) {
    const proxyUrl = buildProxyUrl(proxyConfig);
    axiosConfig.proxy = false;
    axiosConfig.httpAgent = new HttpProxyAgent(proxyUrl);
    axiosConfig.httpsAgent = new HttpsProxyAgent(proxyUrl);
  }

  try {
    const bootstrapConfig: AxiosRequestConfig = {
      url: `${new URL(url).origin}/`,
      method: 'GET',
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Referer: 'https://play.789club.fun/',
        'Sec-CH-UA': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
        'Sec-CH-UA-Mobile': '?0',
        'Sec-CH-UA-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      },
      timeout: 30000,
      validateStatus: () => true,
      maxRedirects: 5,
    };

    if (proxyConfig) {
      bootstrapConfig.proxy = false;
      bootstrapConfig.httpAgent = axiosConfig.httpAgent;
      bootstrapConfig.httpsAgent = axiosConfig.httpsAgent;
    }

    const bootstrapResponse: AxiosResponse = await axios(bootstrapConfig);
    const setCookies = bootstrapResponse.headers['set-cookie'];
    if (Array.isArray(setCookies) && setCookies.length > 0) {
      axiosConfig.headers = {
        ...axiosConfig.headers,
        Cookie: setCookies.map((cookie) => cookie.split(';')[0]).join('; '),
      };
    }

    const response: AxiosResponse = await axios(axiosConfig);
    
    return {
      ok: true,
      response: typeof response.data === 'string' ? response.data : JSON.stringify(response.data),
      error: '',
      errno: 0,
      info: {
        http_code: response.status,
        total_time: response.headers['x-request-duration'] ? parseFloat(response.headers['x-request-duration'] as string) : undefined,
      },
    };
  } catch (err: any) {
    proxyLog(`${name}_proxy_error`, {
      url,
      method: upperMethod,
      proxy: proxyConfig ? {
        host: proxyConfig.host,
        port: proxyConfig.port,
        user: proxyConfig.user || '',
      } : null,
      error: err.message || 'Request failed',
      code: err.code || '',
      status: err.response?.status || 0,
      response: typeof err.response?.data === 'string'
        ? err.response.data.slice(0, 500)
        : err.response?.data || null,
    });

    return {
      ok: false,
      response: '',
      error: err.response?.status
        ? `${err.message || 'Request failed'} | HTTP ${err.response.status}`
        : (err.message || 'Request failed'),
      errno: err.code ? 1 : 0,
      info: {
        http_code: 0,
      },
    };
  }
}

export async function proxyRequest(
  name: string,
  url: string,
  body = '',
  token: string | null = null,
  contentType = 'application/json',
  method = 'POST',
  options: {
    use_rotation_proxy?: boolean;
    fixed_proxy?: string;
    fixed_proxy_config?: ProxyConfig;
    fallback_direct?: boolean;
  } = {}
): Promise<ProxyResult> {
  const {
    use_rotation_proxy: useRotationProxy = false,
    fixed_proxy: fixedProxy,
    fixed_proxy_config: fixedProxyConfig,
    fallback_direct: fallbackDirect = !PROXY_REQUIRED,
  } = options;

  let proxyConfig: ProxyConfig | null = getDefaultProxyConfig();

  if (fixedProxy) {
    proxyConfig = parseProxyString(fixedProxy);
  } else if (fixedProxyConfig) {
    proxyConfig = fixedProxyConfig;
  }

  if (proxyConfig) {
    const result = await proxyExecuteRequest(name, url, body, token, contentType, method, proxyConfig);
    if (result.ok || !fallbackDirect) {
      return result;
    }
    return await proxyExecuteRequest(`${name}_fallback`, url, body, token, contentType, method, null);
  }

  if (!useRotationProxy) {
    if (proxyConfig) {
      return await proxyExecuteRequest(name, url, body, token, contentType, method, proxyConfig);
    }

    if (fallbackDirect) {
      return await proxyExecuteRequest(name, url, body, token, contentType, method, null);
    }

    return {
      ok: false,
      response: '',
      error: 'Proxy is required but PROXY_HOST/PROXY_PORT is not configured',
      errno: 1,
      info: {
        http_code: 0,
      },
    };
  }

  const proxyStrings = await fetchRotationProxies();
  const attempts: any[] = [];

  for (const proxyString of proxyStrings) {
    const config = parseProxyString(proxyString);
    if (!config) continue;

    const result = await proxyExecuteRequest(name, url, body, token, contentType, method, config);
    attempts.push({
      proxy: config,
      curl_errno: result.errno,
      curl_error: result.error,
      http_code: result.info.http_code,
    });

    if (result.ok) {
      return result;
    }
  }

  if (fallbackDirect) {
    return await proxyExecuteRequest(name, url, body, token, contentType, method, null);
  }

  return {
    ok: false,
    response: '',
    error: 'All configured proxies failed',
    errno: 1,
    info: {
      http_code: 0,
    },
  };
}

export function normalizeJsonResponse(response: string): string {
  if (!response) return response;
  // Remove BOM
  if (response.charCodeAt(0) === 0xFEFF) {
    response = response.slice(1);
  }
  return response.trim();
}

export function proxyLog(name: string, payload: any): void {
  const fs = require('fs');
  const path = require('path');
  const logDir = path.join(process.cwd(), 'logs');
  
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  
  const logFile = path.join(logDir, `${new Date().toISOString().split('T')[0]}_${name}.log`);
  const entry = `${new Date().toISOString()} | ${JSON.stringify(payload)}\n`;
  fs.appendFileSync(logFile, entry);
}

// Helper functions from generic_proxy.php
export function normalizeBankName(value: string): string {
  const from = ['à','á','ạ','ả','ã','â','ầ','ấ','ậ','ẩ','ẫ','ă','ằ','ắ','ặ','ẳ','ẵ','è','é','ẹ','ẻ','ẽ','ê','ề','ế','ệ','ể','ễ','ì','í','ị','ỉ','ĩ','ò','ó','ọ','ỏ','õ','ô','ồ','ố','ộ','ổ','ỗ','ơ','ờ','ớ','ợ','ở','ỡ','ù','ú','ụ','ủ','ũ','ư','ừ','ứ','ự','ử','ữ','ỳ','ý','ỵ','ỷ','ỹ','đ'];
  const to = ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','e','e','e','e','e','e','e','e','e','e','e','i','i','i','i','i','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','u','u','u','u','u','u','u','u','u','u','u','y','y','y','y','y','d'];
  
  value = value.toLowerCase().trim();
  value = value.split('').map(c => {
    const idx = from.indexOf(c);
    return idx >= 0 ? to[idx] : c;
  }).join('');
  
  return value.replace(/[^a-z0-9]/g, '');
}

export function resolveSepayBankCode(bankName: string, fallbackBankCode = ''): string {
  const map: Record<string, string> = {
    'vietcombank': 'VCB',
    'vcb': 'VCB',
    'mbbank': 'MBBank',
    'mb': 'MBBank',
    'techcombank': 'TCB',
    'tcb': 'TCB',
    'vietinbank': 'ICB',
    'vtb': 'ICB',
    'bidv': 'BIDV',
    'acb': 'ACB',
    'tpbank': 'TPB',
    'sacombank': 'STB',
    'vpbank': 'VPB',
    'agribank': 'VBA',
    'hdbank': 'HDB',
  };

  const normalized = normalizeBankName(bankName);
  if (map[normalized]) {
    return map[normalized];
  }

  const fallback = fallbackBankCode.trim();
  if (fallback) return fallback;

  return '';
}

export function buildSepayQrUrl(bankCode: string, accountNumber: string, amount?: number, content?: string): string | null {
  bankCode = bankCode.trim();
  accountNumber = accountNumber.trim();
  if (!bankCode || !accountNumber) return null;

  const query: Record<string, string> = {
    acc: accountNumber,
    bank: bankCode,
    template: 'qronly',
  };

  if (amount !== undefined && amount !== null && !isNaN(amount)) {
    query.amount = String(Math.floor(amount));
  }
  if (content) {
    query.des = content;
  }

  return `https://qr.sepay.vn/img?${new URLSearchParams(query).toString()}`;
}

export function isValidTransferContent(value: any): boolean {
  if (typeof value !== 'string' && typeof value !== 'number') return false;
  const val = String(value).trim();
  if (!val) return false;
  if (/^\d{1,3}$/.test(val)) return false;
  return true;
}

export function normalizeAmountValue(value: any): number | null {
  if (typeof value === 'number') return Math.floor(value);
  if (typeof value === 'string') {
    const digits = value.replace(/\D/g, '');
    if (!digits) return null;
    return Math.floor(parseInt(digits));
  }
  return null;
}

import { findAccountBySession } from './db';

export async function findLocalAccountBySession(sessionId: string): Promise<any | null> {
  if (!sessionId) return null;
  
  try {
    const account = await findAccountBySession(sessionId, 'B52');
    return account || null;
  } catch {
    return null;
  }
}

export function buildLocalUserPayload(accountRow: any): any {
  const username = String(accountRow.username || '');
  const password = String(accountRow.password || '');
  const avatarNumber = (Math.abs(crc32(password)) % 40) + 1;
  const numericId = Math.abs(crc32(username));
  const wallet = parseFloat(accountRow.wallet || 0);

  return {
    token: String(accountRow.token || ''),
    session_id: String(accountRow.session || ''),
    fullname: username,
    avatar: `Avatar${avatarNumber}`,
    id: numericId,
    user_type: 'USER',
    extra_balance: wallet,
    main_balance: wallet,
    wallet_101: 0,
    wallet_102: 0,
    is_deposit: false,
    level: 'LEVEL0',
    username: username,
    type: 'USER',
    allow_login: true,
    allow_login_other_device: true,
    allow_withdraw: false,
    allow_withdraw_safe: false,
    is_phone_active: false,
    uuid: `452140980${numericId}276`,
    ref_id: username,
    is_club: false,
    mobile: '',
    desktop: '',
  };
}

// Simple CRC32 implementation
function crc32(str: string): number {
  let crc = 0xFFFFFFFF;
  const table = makeCrcTable();
  for (let i = 0; i < str.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ str.charCodeAt(i)) & 0xFF];
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeCrcTable(): number[] {
  const table: number[] = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  return table;
}

export { UPSTREAM_BASE };
