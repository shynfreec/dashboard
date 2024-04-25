import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { TOKEN } from './helpers/cookie';

export async function middleware(request: NextRequest, response: NextResponse) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(TOKEN);

  if (!token) return NextResponse.redirect(new URL('/sign-in', request.url));
  
  const isValidToken = jwtDecode<JwtPayload>(`${token?.value ?? ''}`);
  if (!isValidToken) return NextResponse.redirect(new URL('/sign-in', request.url));
  
  if (pathname === '/sign-in') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  const requestHeaders = new Headers(request.headers);

  return NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });
}

//Add your protected routes
export const config = {
  matcher: [
    '/sign-in',
    '/dashboard/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/',
  ],
};
