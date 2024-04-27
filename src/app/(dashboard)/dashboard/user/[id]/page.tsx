'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const UserDetailPage = () => {
  const { id } = useParams();

  return <div className='p-6'>{`UserDetailPage ${id}`}</div>;
};

export default UserDetailPage;
