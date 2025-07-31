import { createClient } from '@/utils/supabase/client';
import { useState, useEffect } from 'react';

export default function useSupabaseUser() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  return { user, setUser };
}
