import { NextRequest, NextResponse } from 'next/server';

type LegacyHandler = (req: any, res: any) => Promise<any> | any;

function toQueryObject(url: URL, extraQuery?: Record<string, any>) {
  const query: Record<string, any> = {};

  url.searchParams.forEach((value, key) => {
    if (query[key] === undefined) {
      query[key] = value;
      return;
    }
    if (Array.isArray(query[key])) {
      query[key].push(value);
      return;
    }
    query[key] = [query[key], value];
  });

  if (extraQuery) {
    for (const [key, value] of Object.entries(extraQuery)) {
      if (value !== undefined) {
        query[key] = value;
      }
    }
  }

  return query;
}

async function parseBody(request: NextRequest) {
  const method = request.method.toUpperCase();
  if (method === 'GET' || method === 'HEAD') {
    return undefined;
  }

  const raw = await request.text();
  if (!raw) {
    return undefined;
  }

  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(raw);
    } catch {
      return raw;
    }
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams(raw);
    const data: Record<string, string> = {};
    params.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  }

  return raw;
}

export async function runLegacyHandler(
  request: NextRequest,
  handler: LegacyHandler,
  extraQuery?: Record<string, any>
) {
  const url = new URL(request.url);
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });

  const req: any = {
    method: request.method.toUpperCase(),
    query: toQueryObject(url, extraQuery),
    headers,
    body: await parseBody(request),
    socket: {
      remoteAddress: headers['x-forwarded-for'] || '',
    },
  };

  let statusCode = 200;
  const responseHeaders = new Headers();
  let responseBody: BodyInit | null = null;

  const res: any = {
    status(code: number) {
      statusCode = code;
      return res;
    },
    setHeader(key: string, value: any) {
      const safeKey = String(key);
      const safeValue = String(value).replace(/[^\x09\x20-\x7E\x80-\xFF]/g, '');
      try {
        responseHeaders.set(safeKey, safeValue);
      } catch {
        // Ignore invalid upstream headers that Next/undici rejects.
      }
      return res;
    },
    getHeader(key: string) {
      return responseHeaders.get(String(key));
    },
    json(payload: any) {
      if (!responseHeaders.has('content-type')) {
        responseHeaders.set('content-type', 'application/json; charset=utf-8');
      }
      responseBody = JSON.stringify(payload);
      return res;
    },
    send(payload: any) {
      responseBody = typeof payload === 'string' ? payload : JSON.stringify(payload);
      return res;
    },
    end(payload?: any) {
      responseBody = payload ?? null;
      return res;
    },
  };

  await handler(req, res);

  return new NextResponse(responseBody, {
    status: statusCode,
    headers: responseHeaders,
  });
}
