import { Metadata } from 'next'
import Reset from './_components/Reset'

export const metadata: Metadata = {
  title: 'reset password',
  description: 'reset password',
}

export default function LoginPage() {
  return <Reset />
}
