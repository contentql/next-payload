import { isAuthenticated } from '@/lib/auth'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { routesConfig } from './config/routes'

export const middleware = async (req: NextRequest) => {
  const auth = await isAuthenticated()

  const protectedRoutes = routesConfig.dashboardProtectRoutes
  const pathname = req.nextUrl.pathname

  // value of token also be extracted from here itself
  // const cookieToken = req.cookies
  //   .getAll()
  //   .find(cookie => cookie.name === 'payload-token')?.value

  if (!auth && protectedRoutes.includes(pathname)) {
    const absoluteURL = new URL('/login', req.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }
}
