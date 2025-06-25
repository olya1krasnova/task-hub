import { PROJECT_STATS_DATA } from '@/app/dashboard/data/project-stats.data';
import ProjectStatCard from '@/app/dashboard/projectsStats/ProjectStatCard';

const ProjectStats = () => {
  return (
    <ul className="space-y-4">
      {PROJECT_STATS_DATA.map((projectStat) => (
        <li key={projectStat.id}>
          <ProjectStatCard projectStat={projectStat} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectStats;
