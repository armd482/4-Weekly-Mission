import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const path = request.nextUrl.pathname;
  if (path.startsWith('/folder')) {
    if (!accessToken) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }
  if (path === '/signin' || path === '/signup') {
    if (accessToken) {
      return NextResponse.redirect(new URL('/folder', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/signin', '/signup', '/folder/:folderID*'],
};
