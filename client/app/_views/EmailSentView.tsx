import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

function EmailSentView() {
  return (
    <div>
      <Card className='w-full max-w-sm'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-center text-2xl font-bold'>
            Email send successfully
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            An email has been sent successfully to your inbox. Please reset your
            password and{' '}
            <Link className='underline' href='/login'>
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EmailSentView
