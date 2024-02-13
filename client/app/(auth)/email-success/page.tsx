import { Metadata } from 'next';
import EmailSuccess from './_components/EmailSuccess';

export const metadata: Metadata = {
  title: 'forgot password',
  description: 'forgot password',
};

export default function LoginPage() {
  return <EmailSuccess />;
}
