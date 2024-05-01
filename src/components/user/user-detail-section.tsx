import React from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';
import { format } from 'date-fns';

interface IUserDetail {
  userInfo: {
    avatar: string | null;
    banner: string | null;
    bio: string | null;
    email: string | null;
    fullname: string | null;
    id: string;
    joinedAt: string;
    locale: 'en';
    numberOfLogins: number;
    referralCode: string | null;
    walletAddress: string;
  };
}

const UserDetailSection = (props: IUserDetail) => {
  const {
    userInfo: {
      avatar,
      email,
      fullname,
      joinedAt,
      numberOfLogins,
      referralCode,
      walletAddress,
    },
  } = props;
  return (
    <Card className='flex h-full p-8 gap-8'>
      {avatar && (
        <div className='w-[200px] h-[200px]'>
          <Image
            className='w-full h-full rounded-full object-cover'
            width={100}
            height={100}
            alt=''
            src={avatar}
          />
        </div>
      )}
      <div className='h-[revert] w-[1px] border-r border-gray-500' />
      <div className='flex flex-col justify-around'>
        <div className='flex gap-2'>
          <span className='font-bold'>Email</span>
          <span>{email}</span>
        </div>
        <div className='flex gap-2'>
          <span className='font-bold'>Fullname</span>
          <span>{fullname}</span>
        </div>
        {joinedAt && (
          <div className='flex gap-2'>
            <span className='font-bold'>Joined At:</span>
            <span>{format(joinedAt, 'MM/dd/yyyy')}</span>
          </div>
        )}
        <div className='flex gap-2'>
          <span className='font-bold'>Wallet address:</span>
          <span>{walletAddress}</span>
        </div>
        <div className='flex gap-2'>
          <span className='font-bold'>Referal code:</span>
          <span>{referralCode}</span>
        </div>
        <div className='flex gap-2'>
          <span className='font-bold'>Number of logins:</span>
          <span>{numberOfLogins}</span>
        </div>
      </div>
    </Card>
  );
};

export default UserDetailSection;
