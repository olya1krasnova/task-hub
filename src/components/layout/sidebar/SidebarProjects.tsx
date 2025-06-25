import { PROJECTS } from '@/components/layout/sidebar/data/project.data';

const SidebarProjects = () => {
  return (
    <ul className="mt-4">
      {PROJECTS.map(({ color, name }) => (
        <li key={name} className="flex gap-2 items-center mx-2 mb-5">
          <div className={`w-4 h-4 ${color}`} />
          <div className="text-gray-400">{name}</div>
        </li>
      ))}
    </ul>
  );
};

export default SidebarProjects;
