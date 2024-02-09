'use server'

import { cookies, headers } from 'next/headers'

export async function isAuthenticated() {
  const cookiesList = cookies()
  console.log('cookies', cookiesList)
  console.log('cookies_get_all', cookiesList.getAll())
  console.log('cookies_using_headers', headers().get('payload-token'))
  console.log('cookies_using_headers_set_cookie', headers().get('set-cookie'))
  const hasCookie = cookiesList.has('payload-token')

  return hasCookie
}
