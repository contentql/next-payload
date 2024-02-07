import { isAuthenticated } from '@/lib/auth'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { routesConfig } from './config/routes'

const protectedRoutes = routesConfig.dashboardProtectRoutes

export const middleware = async (req: NextRequest) => {
  const auth = await isAuthenticated()

  if (!auth && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/login', req.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }
}
