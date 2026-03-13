import { fetchRotationProxies, getDefaultProxyConfig, parseProxyString, type ProxyConfig } from '../src/lib/proxy';
import { playwrightRequest } from '../src/lib/playwright-proxy';

type TargetResult = {
  proxy: string;
  status: number;
  ok: boolean;
  blocked: boolean;
  error: string;
};

function proxyToString(proxy: ProxyConfig | null): string {
  if (!proxy) return 'DIRECT';
  return `${proxy.host}:${proxy.port}:${proxy.user || ''}:${proxy.pass || ''}`;
}

async function testOne(proxy: ProxyConfig | null, url: string): Promise<TargetResult> {
  const result = await playwrightRequest('proxy_test', url, '', null, 'application/json', 'GET', proxy);
  const blocked = result.info.http_code === 403 || /Attention Required! \| Cloudflare/i.test(result.response);

  return {
    proxy: proxyToString(proxy),
    status: result.info.http_code || 0,
    ok: result.ok && !blocked && result.info.http_code > 0 && result.info.http_code < 400,
    blocked,
    error: result.error || '',
  };
}

async function main() {
  const target = process.argv[2] || 'https://demo7892.fun/distributor?command=regdis&bundle=com.gamebai.sunclub&appName=789club';
  const candidates: ProxyConfig[] = [];

  const envProxy = getDefaultProxyConfig();
  if (envProxy) {
    candidates.push(envProxy);
  }

  const rotation = await fetchRotationProxies();
  for (const item of rotation) {
    const parsed = parseProxyString(item);
    if (!parsed) continue;

    const exists = candidates.some((proxy) =>
      proxy.host === parsed.host &&
      proxy.port === parsed.port &&
      (proxy.user || '') === (parsed.user || '') &&
      (proxy.pass || '') === (parsed.pass || '')
    );

    if (!exists) {
      candidates.push(parsed);
    }
  }

  if (candidates.length === 0) {
    console.log(JSON.stringify({ error: 'No proxies found from env or database.' }, null, 2));
    process.exit(1);
  }

  const results: TargetResult[] = [];
  for (const proxy of candidates) {
    const tested = await testOne(proxy, target);
    results.push(tested);
    console.log(JSON.stringify(tested));
  }

  const success = results.find((item) => item.ok);
  if (success) {
    console.log(`SUCCESS_PROXY=${success.proxy}`);
    process.exit(0);
  }

  process.exit(2);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
