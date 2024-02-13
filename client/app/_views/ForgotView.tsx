/**
 * v0 by Vercel.
 * @see https://v0.dev/t/71Ob8EEp1l8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { forgotPassword } from '@/apis/auth/mutations'
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
import { toast } from '@/components/ui/use-toast'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Forgot() {
  const [email, setEmail] = useState<string>('')
  const router = useRouter()
  const {
    isPending: isForgotPending,
    variables: forgotVariables,
    mutate: forgotMutation,
    isSuccess: forgotSuccess,
  } = useMutation({
    mutationKey: keys('/api/users/forgot-password', 'post').main(),
    mutationFn: (userEmail: any) => forgotPassword({ email: userEmail }),
    onSuccess: () => {
      toast({
        title: 'E-mail has been sent.',
        description: 'please check your mail.',
        variant: 'default',
      })
      router.push('/email-success')
    },
  })
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl font-bold'>
          Forgot your password?
        </CardTitle>
        <CardDescription>
          Enter your email to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              placeholder='John@example.com'
              onChange={e => {
                setEmail(e.target.value)
              }}
              required
            />
          </div>
          <Button
            className='w-full'
            onClick={() => {
              forgotMutation(email)
            }}>
            Send reset Link
          </Button>
        </div>
        <div className='mt-4 text-end text-sm'>
          you know password?
          <Link className='underline' href='/login'>
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
