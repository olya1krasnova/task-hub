import type { IProjectStat } from '@/app/dashboard/projectsStats/project-stats.types';

export const PROJECT_STATS_DATA: IProjectStat[] = [
  {
    id: 1,
    number: 92,
    label: 'Active Projects',
    bgColor: 'bg-violet-200',
    icon: '/images/icons/project-stats/active-projects.svg',
  },
  {
    id: 2,
    number: 35,
    label: 'On Going Projects',
    bgColor: 'bg-yellow-300',
    icon: '/images/icons/project-stats/ongoing-projects.svg',
  },
  {
    id: 3,
    number: 1149,
    label: 'Working Hours',
    bgColor: 'bg-pink-200',
    icon: '/images/icons/project-stats/working-hours.svg',
  },
];
