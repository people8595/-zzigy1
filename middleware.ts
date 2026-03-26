import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['ko', 'en', 'zh']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (pathnameHasLocale) return

  request.nextUrl.pathname = `/ko${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
