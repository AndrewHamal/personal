import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  let token = request.cookies.get('token');

  if(token)
  {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/register', request.url))
}

export const config = {
  matcher: ['/verify', '/success', '/profile-detail', '/plans', '/plans/:path*', '/profile-complete'],
}
