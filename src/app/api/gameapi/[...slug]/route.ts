import { NextRequest, NextResponse } from 'next/server';
import { getDefaultProxyConfig, isCloudflareBlockPage, proxyRequest, UPSTREAM_BASE } from '@/lib/proxy';
import { playwrightRequestWithRotation } from '@/lib/playwright-proxy';

export const dynamic = 'force-dynamic';

type RouteContext = {
  params: {
    slug?: string[];
  };
};

function normalizeUpstreamPath(path: string) {
  return path
    .replace(/Jackpot\/nil/gi, 'jackpot/all')
    .replace(/jackpot-wall/gi, 'jackpot/all');
}

async function handle(request: NextRequest, { params }: RouteContext) {
  let upstream = `${UPSTREAM_BASE}/gameapi`;
  if (params.slug?.length) {
    upstream += `/${params.slug.join('/')}`;
  }
  upstream = normalizeUpstreamPath(upstream);

  const urlObj = new URL(request.url);
  const queryString = urlObj.searchParams.toString();
  const url = queryString ? `${upstream}?${queryString}` : upstream;

  const method = request.method.toUpperCase();
  const contentType = request.headers.get('content-type') || 'application/json';
  const token = request.headers.get('x-token') || urlObj.searchParams.get('token');

  let body = '';
  if (method !== 'GET' && method !== 'HEAD') {
    body = await request.text();
  }

  let result = await playwrightRequestWithRotation(
    'gameapi',
    url,
    body,
    token,
    contentType,
    method,
    getDefaultProxyConfig()
  );

  if (!result.ok || result.info.http_code === 403 || isCloudflareBlockPage(result.response)) {
    const proxyResult = await proxyRequest(
      'gameapi',
      url,
      body,
      token,
      contentType,
      method
    );
    if (proxyResult.ok && proxyResult.info.http_code !== 403 && !isCloudflareBlockPage(proxyResult.response)) {
      result = proxyResult;
    }
  }

  if (!result.ok) {
    return NextResponse.json(
      { status: 'ERROR', message: 'Proxy request failed', error: result.error, debug: { upstream: url } },
      { status: 502 }
    );
  }

  if (isCloudflareBlockPage(result.response)) {
    return NextResponse.json(
      { status: 'ERROR', message: 'Upstream blocked (security/captcha). Try again or use proxy.', debug: { upstream: url } },
      { status: 502 }
    );
  }

  return new NextResponse(result.response, {
    status: result.info.http_code || 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });
}

export async function GET(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}

export async function POST(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}

export async function PUT(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}

export async function OPTIONS(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}

export async function HEAD(request: NextRequest, context: RouteContext) {
  return handle(request, context);
}
