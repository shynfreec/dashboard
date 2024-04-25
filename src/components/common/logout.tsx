import CookieHandler, { TOKEN } from '@/helpers/cookie';
import { cn } from '@/lib/utils';
import { LogOut, PanelLeftClose, PanelRightClose } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Button } from '../ui/button';
import LocalStorageHandler from '@/helpers/localStorage';

export const Logout = ({
  isCollapsed,
  onCollapse,
}: {
  isCollapsed: boolean;
  onCollapse: () => void;
}) => {
  const { push } = useRouter();

  const handleLogout = useCallback(() => {
    CookieHandler.remove(TOKEN);
    LocalStorageHandler.removeItem('user');
    push('/login');
  }, [push]);

  return (
    <div className={`flex gap-2 ${isCollapsed ? 'flex-col' : ''}`}>
      <Button
        variant='outline'
        size={isCollapsed ? 'icon' : 'sm'}
        className={cn(
          'gap-2 w-full min-w-9 justify-start',
          isCollapsed ? 'p-2' : ''
        )}
        onClick={handleLogout}
      >
        <LogOut className={'h-4 w-4'} />
        {isCollapsed ? '' : 'Logout'}
      </Button>
      <Button onClick={onCollapse} size={isCollapsed ? 'icon' : 'sm'}>
        {isCollapsed ? (
          <PanelRightClose size={16} />
        ) : (
          <PanelLeftClose size={16} />
        )}
      </Button>
    </div>
  );
};
