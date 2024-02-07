'use client'

// We are migrating to server side protected routes using NextJS middleware.

// Coming to traditional component redirection, i.e., when loggedIn and access this route, rather than redirecting to a page, I want to render a component, in such scenarios we use this higher order component.

import { currentUser } from '@/apis/auth/queries'
import { keys } from '@/apis/query-keys'
import { useQuery } from '@tanstack/react-query'
import { usePathname, useRouter } from 'next/navigation'
import LoggedUser from './LoginPageAcces'
import RegisterPageAccess from './RegisterPageAccess'

const isAuth = (Component: any) => {
  const IsAuth = (props: any) => {
    const pathname = usePathname()

    const { data: user } = useQuery({
      queryKey: keys('/api/users/me', 'get').main(),
      queryFn: currentUser,
    })

    if (pathname === '/login' && user) {
      return <LoggedUser />
    }

    if (pathname === '/register') {
      return <RegisterPageAccess />
    }

    return <Component {...props} />
  }

  return IsAuth
}

export default isAuth
