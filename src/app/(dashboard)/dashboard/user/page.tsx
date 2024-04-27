'use client';
import { SkeletonTable } from '@/components/common/skeleton-table';
import { DataTable } from '@/components/user/data-table';
import { userColumns } from '@/components/user/user-column';
import { getListUser } from '@/services/user';
import { useQuery } from '@tanstack/react-query';

const UserPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      getListUser({
        isAll: true,
      }),
  });

  return (
    <div className='p-6 flex-1 flex-col space-y-8 md:flex'>
      <div className='flex items-center justify-between space-y-2'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>User</h2>
          <p className='text-muted-foreground'>
            Here&apos;s a list view our users
          </p>
        </div>
      </div>
      {isLoading ? (
        <SkeletonTable />
      ) : data?.data?.length ? (
        <DataTable data={data?.data as any} columns={userColumns} />
      ) : (
        <div className='bg-blue-100 border rounded-md px-4 py-3' role='alert'>
          <p className='font-bold'>Ops</p>
          <p className='text-sm'>We have no user to show.</p>
        </div>
      )}
    </div>
  );
};

export default UserPage;
