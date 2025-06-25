'use client';

import SidebarHeader from '@/components/layout/sidebar/SidebarHeader';
import SidebarProfile from '@/components/layout/sidebar/SidebarProfile';
import SidebarMenu from '@/components/layout/sidebar/SidebarMenu';
import SidebarProjects from '@/components/layout/sidebar/SidebarProjects';

const Sidebar = () => {
  return (
    <aside className="py-5 px-5 h-full bg-white dark:bg-neutral-800">
      <SidebarHeader title="Account" />
      <SidebarProfile />
      <SidebarHeader title="Main Menu" />
      <SidebarMenu />
      <SidebarHeader title="Projects" />
      <SidebarProjects />
    </aside>
  );
};

export default Sidebar;
