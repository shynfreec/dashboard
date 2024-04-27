import { GeneralStatus } from '@/lib/enum';
import { ShieldCheck, ShieldX } from 'lucide-react';

export const toolStatus = [
  {
    value: GeneralStatus.Published,
    label: 'Published',
    icon: ShieldCheck,
  },
  {
    value: GeneralStatus.Pending,
    label: 'Pending',
    icon: ShieldX,
  },
];
