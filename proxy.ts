import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const response = NextResponse.next();
  
  // Essential security headers that don't break Next.js
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  
  // Strong HSTS for HTTPS
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  
  // Permissions Policy - Restrict unnecessary features
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  
  // Performance headers - aggressive caching for static assets
  const pathname = request.nextUrl.pathname;
  
  if (pathname.startsWith('/_next/static') || 
      pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|avif|ico|woff2|woff|ttf|otf|js|css)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname === '/' || !pathname.includes('.')) {
    // HTML pages - stale-while-revalidate for faster perceived load
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate, stale-while-revalidate=60');
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
