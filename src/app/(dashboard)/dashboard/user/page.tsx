'use client';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import useUser from '@/hooks/useUser';
import { getListUser } from '@/services/user';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UserPage = () => {
  const { users } = useUser();

  return (
    <div className='p-8 '>
      <h3 className='text-xl font-bold'>User</h3>
      <div className='border shadow-sm rounded-lg mt-4'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='max-w-[150px]'>Name</TableHead>
              <TableHead className='hidden md:table-cell'>Email</TableHead>
              <TableHead className='hidden md:table-cell'>Username</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user: TUser) => (
              <UserRow key={user.id} user={user} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserPage;

function UserRow({ user }: { user: TUser }) {
  const userId = user.id;
  // const deleteUserWithId = deleteUser.bind(null, userId);

  return (
    <TableRow>
      <TableCell className='font-medium'>{user.fullname}</TableCell>
      <TableCell className='hidden md:table-cell'>
        {user.walletAddress}
      </TableCell>
      <TableCell>{user.joinedAt}</TableCell>
      <TableCell>
        <Button
          className='w-full'
          size='sm'
          variant='outline'
          // formAction={deleteUserWithId}
          disabled
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
