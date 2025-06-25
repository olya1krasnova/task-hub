import type { IProjectStat } from '@/app/dashboard/projectsStats/project-stats.types';
import Image from 'next/image';
import { formatMinutes } from '@/utils/formatMinutes';

interface Props {
  projectStat: IProjectStat;
}

const ProjectStatCard = ({ projectStat }: Props) => {
  return (
    <div className={`rounded-2xl p-5 relative overflow-hidden ${projectStat.bgColor}`}>
      <div className="flex items-center justify-between relative z-10">
        <div className="flex flex-col">
          <span className="text-4xl font-semi-bold mb-1">
            {projectStat.id === 3 ? formatMinutes(projectStat.number) : projectStat.number}
          </span>
          <span className="text-sm">{projectStat.label}</span>
        </div>
        <div className="flex-shrink-0 ml-4">
          <Image src={projectStat.icon} alt={projectStat.label} width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default ProjectStatCard;
