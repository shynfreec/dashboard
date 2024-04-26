import { getListUser } from '@/services/user';
import useUserStore from '@/store/user';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const useUser = () => {
  const { users, setAllUsers } = useUserStore();
  // const [users, setUsers] = useState<TUser[]>([]);
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getListUser(),
  });

  useEffect(() => {
    if (data?.data) {
      console.log(data?.data);

      setAllUsers(data?.data);
    }
  }, [data]);

  return {
    users,
  };
};

export default useUser;
