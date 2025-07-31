'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push('/'), 2000);
  }, []);

  return <h1>You have been logged out. Redirecting now...</h1>;
}

export default LogoutPage;
