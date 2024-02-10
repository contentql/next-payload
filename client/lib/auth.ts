'use server'

import { cookies, headers } from 'next/headers'

export async function isAuthenticated() {
  const cookiesList = cookies()
  console.log('cookies', cookiesList)
  console.log('cookies_get_all', cookiesList.getAll())

  const hasCookie = cookiesList.has('payload-token')

  return hasCookie
}
