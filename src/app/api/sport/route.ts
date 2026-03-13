import { NextRequest, NextResponse } from 'next/server';
import { proxyRequest, UPSTREAM_BASE } from '@/lib/proxy';

export const dynamic = 'force-dynamic';

async function handle(request: NextRequest) {
  const urlObj = new URL(request.url);
  const queryString = urlObj.searchParams.toString();
  const upstream = `${UPSTREAM_BASE}/sport`;
  const url = queryString ? `${upstream}?${queryString}` : upstream;

  const method = request.method.toUpperCase();
  const contentType = request.headers.get('content-type') || 'application/json';
  const token = request.headers.get('x-token') || urlObj.searchParams.get('token');

  let body = '';
  if (method !== 'GET' && method !== 'HEAD') {
    body = await request.text();
  }

  const result = await proxyRequest('sport', url, body, token, contentType, method);

  if (!result.ok) {
    return NextResponse.json(
      { status: 'ERROR', message: 'Proxy request failed', error: result.error },
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

export async function GET(request: NextRequest) {
  return handle(request);
}

export async function POST(request: NextRequest) {
  return handle(request);
}

export async function PUT(request: NextRequest) {
  return handle(request);
}

export async function PATCH(request: NextRequest) {
  return handle(request);
}

export async function DELETE(request: NextRequest) {
  return handle(request);
}

export async function OPTIONS(request: NextRequest) {
  return handle(request);
}

export async function HEAD(request: NextRequest) {
  return handle(request);
}
