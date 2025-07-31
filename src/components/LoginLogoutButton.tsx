'use client';

import { signout } from '@/lib/auth-actions';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import useSupabaseUser from '@/hooks/useSupabaseUser';

function LoginLogoutButton() {
  const router = useRouter();

  const { user, setUser } = useSupabaseUser();

  const isLoggedIn = user !== null;

  const handleClick = () => {
    if (isLoggedIn) {
      signout();
      setUser(null);
    } else {
      router.push('/login');
    }
  };

  return (
    <Button onClick={handleClick} variant={isLoggedIn ? undefined : 'outline'}>
      {isLoggedIn ? 'Log out' : 'Login'}
    </Button>
  );
}

export default LoginLogoutButton;
