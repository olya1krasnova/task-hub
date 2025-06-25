import Link from 'next/link';
import { DynamicIcon } from 'lucide-react/dynamic';
import { MAIN_MENU } from '@/components/layout/sidebar/data/main-menu.data';
import { Pages } from '@/config/pages';

const SidebarMenu = () => {
  return (
    <ul className="mb-4">
      {MAIN_MENU.map(({ icon, label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className="flex gap-2 items-center text-gray-400 px-3 py-2.5 rounded-full hover:bg-primary
            hover:text-white dark:text-white"
          >
            <DynamicIcon name={icon} size={18} />
            <div>{label}</div>
            {href === Pages.MESSAGE && (
              <div className="ml-auto mr-2 py-0.5 px-2.5 bg-indigo-200 text-primary rounded-full text-sm font-medium">
                4
              </div>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarMenu;
