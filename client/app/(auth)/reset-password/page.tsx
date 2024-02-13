import { Metadata } from 'next';
import Reset from './_components/Reset';

export const metadata: Metadata = {
  title: 'forgot password',
  description: 'forgot password',
};

export default function LoginPage() {
  return <Reset />;
}
