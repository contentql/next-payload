'use client'

import { resetPassword } from '@/apis/auth/mutations'
import { keys } from '@/apis/query-keys'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { GiCheckMark } from 'react-icons/gi'

import { useSearchParams } from 'next/navigation'

const TOKEN = 'token'

export default function ResetView() {
  const searchParams = useSearchParams()
  const token = searchParams.get(TOKEN)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      newPassword: '',
      conformNewPassword: '',
    },
  })
  // const { errors } = formState

  if (!token) {
    router.push('/login')
  }

  const {
    isPending: isResetPending,
    variables: resetVariables,
    mutate: resetMutation,
    isSuccess: resetSuccess,
  } = useMutation({
    mutationKey: keys('/api/users/reset-password', 'post').main(),
    mutationFn: (userDetails: any) => resetPassword(userDetails),
    onSuccess: () => {
      setTimeout(() => {
        router.push('/dashboard')
      }, 2000)
    },
  })

  const onsubmit = ({ newPassword }: { newPassword: string }) => {
    resetMutation({
      token: token,
      password: newPassword,
    })
  }

  return (
    <div>
      {resetSuccess ? (
        <Card>
          <CardHeader className='space-y-4'>
            <CardTitle className='text-2xl font-bold'>
              <GiCheckMark size={36} color='green' />
            </CardTitle>
            <CardDescription>
              Your password reset is successfully. Redirecting to dashboard...
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <Card className='w-full max-w-sm'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold'>
              Reset your password
            </CardTitle>
            <CardDescription>
              Enter your new password to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onsubmit)} noValidate>
              <div className='space-y-6'>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <Label htmlFor='email'>New Password</Label>
                    <Label className=' text-end font-semibold text-red-500'>
                      {errors.newPassword?.message}
                    </Label>
                  </div>
                  <Input
                    id='newPassword'
                    type='password'
                    placeholder='************'
                    required
                    {...register('newPassword', {
                      required: 'password is required',
                      minLength: {
                        value: 8,
                        message: ' length should grater than 8',
                      },
                    })}
                  />
                </div>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <Label htmlFor='password'>Conform Password</Label>
                    <Label className=' text-end font-semibold text-red-500'>
                      {errors.conformNewPassword?.message}
                    </Label>
                  </div>
                  <Input
                    id='conformNewPassword '
                    type='password'
                    placeholder='************'
                    required
                    {...register('conformNewPassword', {
                      required: 'password is required',

                      validate: filedvale =>
                        filedvale === getValues('newPassword')
                          ? true
                          : 'Passwords not match',
                    })}
                  />
                </div>
                <Button className='w-full' type='submit'>
                  Reset password
                </Button>
              </div>
            </form>
            <div className='mt-4 text-center text-sm'>
              you know the password?
              <Link className='underline' href='/login'>
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
