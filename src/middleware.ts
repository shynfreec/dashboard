import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { TOKEN } from './helpers/cookie';

export async function middleware(request: NextRequest, response: NextResponse) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(TOKEN);

  if (pathname !== '/sign-in') {
    if (!token || !jwtDecode(token.value)) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  } else {
    if (token && jwtDecode(token.value)) {
      return NextResponse.redirect(new URL('/dashboard/user', request.url));
    }
  }

  return NextResponse.next();
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
