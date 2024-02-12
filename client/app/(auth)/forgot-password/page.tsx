import { Metadata } from 'next';

import Forgot from './_components/Forgot';

export const metadata: Metadata = {
  title: 'reset password',
  description: 'Reset your password',
};

export default function LoginPage() {
  return <Forgot />;
}
