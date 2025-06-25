import type { IMenuItem } from '@/components/layout/sidebar/menu/menu.types';
import { Pages } from '@/config/pages';

export const MAIN_MENU: IMenuItem[] = [
  {
    icon: 'layout-grid',
    label: 'Dashboard',
    href: Pages.DASHBOARD,
  },
  {
    icon: 'message-circle-more',
    label: 'Message',
    href: Pages.MESSAGE,
  },
  {
    icon: 'chart-no-axes-column',
    label: 'Insight',
    href: Pages.INSIGHT,
  },
  {
    icon: 'users-round',
    label: 'Team',
    href: Pages.TEAM,
  },
  {
    icon: 'calendar-days',
    label: 'Schedule',
    href: Pages.SCHEDULE,
  },
  {
    icon: 'notebook-text',
    label: 'Report',
    href: Pages.REPORT,
  },
  {
    icon: 'settings',
    label: 'Settings',
    href: Pages.SETTINGS,
  },
];
