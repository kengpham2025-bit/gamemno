import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  
  // Chỉ serve index.html cho path "/", để API routes hoạt động bình thường
  if (pathname !== '/') {
    return NextResponse.next();
  }
  
  const htmlPath = path.join(process.cwd(), 'public', 'index.html');
  
  if (fs.existsSync(htmlPath)) {
    const content = fs.readFileSync(htmlPath, 'utf-8');
    return new NextResponse(content, {
      headers: { 'Content-Type': 'text/html' },
    });
  }
  
  return new NextResponse('index.html not found', { status: 404 });
}
