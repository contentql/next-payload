'use client'

import Link from 'next/link'

import Forgot from '@/app/_views/ForgotView'
import isAuth from '@/components/auth/is-auth'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Login = () => {
  return (
    <div className='container flex h-screen w-screen flex-col items-center justify-center'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8',
        )}>
        <>
          <Icons.chevronLeft className='mr-2 h-4 w-4' />
          Back
        </>
      </Link>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <Forgot />
      </div>
    </div>
  )
}

export default isAuth(Login)
