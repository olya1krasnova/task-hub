import { ChevronDown } from 'lucide-react';
import { PROFILE } from '@/components/layout/sidebar/data/profile.data';

const SidebarProfile = () => {
  return (
    <div className="mb-6 flex items-center gap-2 bg-gray-100 dark:bg-white/10 rounded-full p-2">
      <div className="w-10 h-10 bg-primary rounded-full" />
      <div>
        <div className="font-medium">{PROFILE.name}</div>
        <div className="opacity-60 text-sm">{PROFILE.email}</div>
      </div>
      <div className="ml-3">
        <ChevronDown size={16} className="opacity-70" />
      </div>
    </div>
  );
};

export default SidebarProfile;
