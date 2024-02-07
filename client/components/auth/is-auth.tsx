'use client';

import { currentUser } from '@/apis/auth/queries';
import { keys } from '@/apis/query-keys';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import LoggedUser from './LoginPageAcces';
import RegisterPageAccess from './RegisterPageAccess';
import { routesConfig } from '@/config/routes';

const isAuth = (Component: any) => {
  const IsAuth = (props: any) => {
    const pathname = usePathname();

    const router = useRouter();

    const { data: user, isLoading } = useQuery({
      queryKey: keys('/api/users/me', 'get').main(),
      queryFn: currentUser,
    });

    if (isLoading) return 'loging';

    if (pathname === '/login' && user) {
      return <LoggedUser />;
    }

    if (pathname === '/register') {
      return <RegisterPageAccess />;
    }

    if (routesConfig.dashboardProtectRoutes.includes(pathname) && !user)
      router.push('/login');

    return <Component {...props} />;
  };

  return IsAuth;
};

export default isAuth;
