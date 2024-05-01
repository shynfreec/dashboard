'use client';

import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import UserDetailSection from '@/components/user/user-detail-section';
import { getUserDetails } from '@/services/user';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';

const UserDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUserDetails(id as string),
  });

  const loadingElm = (
    <Card className='flex p-8 gap-8'>
      <Skeleton className='flex-shrink-0 w-[200px] h-[200px] rounded-full' />
      <Skeleton className=' flex-shrink w-full' />
    </Card>
  );

  return (
    <div className='p-6'>
      {data?.data && <UserDetailSection userInfo={data?.data} />}
      {isLoading && loadingElm}
    </div>
  );
};

export default UserDetailPage;
