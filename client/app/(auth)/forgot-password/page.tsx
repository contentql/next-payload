import { Metadata } from 'next';
import Forgot from './_components/Forgot';

export const metadata: Metadata = {
  title: 'forgot password',
  description: 'forgot password',
};

export default function LoginPage() {
  return <Forgot />;
}
