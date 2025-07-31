'use client';
import useSupabaseUser from '@/hooks/useSupabaseUser';

const UserGreetText = () => {
  const { user, setUser } = useSupabaseUser();
  const isLoggedIn = user !== null;

  return (
    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      {isLoggedIn ? 'hello\u00A0' : 'Get started editing \u00A0'}
      <code className="font-mono font-bold">{isLoggedIn ? user.id ?? 'user' : 'app/page.tsx'}</code>
    </p>
  );
};

export default UserGreetText;
