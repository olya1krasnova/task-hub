import Sidebar from '@/components/layout/sidebar/Sidebar';
import type { PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[350px_1fr] h-screen">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
