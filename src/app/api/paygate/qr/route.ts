import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const bank = url.searchParams.get('bank') || '';
  const acc = url.searchParams.get('acc') || '';
  const amount = url.searchParams.get('amount') || '';
  const des = url.searchParams.get('des') || '';

  if (!bank || !acc) {
    return new NextResponse('Missing bank or acc', { status: 400 });
  }

  const upstream = new URL('https://qr.sepay.vn/img');
  upstream.searchParams.set('bank', bank);
  upstream.searchParams.set('acc', acc);
  upstream.searchParams.set('template', 'qronly');
  if (amount) upstream.searchParams.set('amount', amount);
  if (des) upstream.searchParams.set('des', des);

  const response = await fetch(upstream.toString(), {
    cache: 'no-store',
    headers: {
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'image/png,image/*;q=0.8,*/*;q=0.5',
    },
  });

  if (!response.ok) {
    return new NextResponse('Unable to load QR', { status: 502 });
  }

  const bytes = await response.arrayBuffer();

  return new NextResponse(bytes, {
    status: 200,
    headers: {
      'Content-Type': response.headers.get('content-type') || 'image/png',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
