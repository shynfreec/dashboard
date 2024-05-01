'use client';

import { ColumnDef } from '@tanstack/react-table';
import Placeholder from '@/assets/images/placeholder.png';
import { DataTableColumnHeader } from '@/components/common/table/data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import Image from 'next/image';
import { GeneralStatus } from '@/lib/enum';
import { toolStatus } from '@/components/common/table-options';
import { regetHttp } from '@/helpers/regex';
import { format } from 'date-fns';
import { checkInString } from '@/lib/utils';

export const userColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} title='' />,
    cell: ({ row }) => <div />,
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: 'avatar',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Avatar' />
    ),
    cell: ({ row }) => (
      <Image
        src={
          !!row.getValue('avatar') && regetHttp.test(row.getValue('avatar'))
            ? row.getValue('avatar')
            : Placeholder
        }
        width={40}
        height={40}
        alt='thumbnail'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'fullname',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Full Name' />
    ),
    cell: ({ row }) => (
      <div className='max-w-[500px] font-bold'>{row.getValue('fullname')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
    filterFn: (row, id, value: string) => {
      const filterValue = (row.getValue(id) as string)
        ?.toString()
        ?.toLowerCase();
      const formatValue = value?.toString()?.toLowerCase();

      return checkInString(formatValue, filterValue);
    },
  },
  {
    accessorKey: 'walletAddress',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Wallet Address' />
    ),
    cell: ({ row }) => (
      <div className='max-w-[500px]'>{row.getValue('walletAddress')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'joinedAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Join At' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <span className='max-w-[500px] truncate font-medium'>
            {format(row.getValue('joinedAt'), 'MM/dd/yyyy')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const status = toolStatus.find(
        (status) => status.value === row.getValue('status')
      );

      const colorSwitch =
        status?.value === GeneralStatus.Published
          ? 'text-green-500'
          : 'text-red-500';

      if (!status) {
        return null;
      }

      return (
        <div className='flex w-[100px] items-center'>
          {status.icon && (
            <status.icon className={`mr-1 h-4 w-4 ${colorSwitch}`} />
          )}
          <span className={`${colorSwitch} font-medium text-sm`}>
            {status.label}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];
