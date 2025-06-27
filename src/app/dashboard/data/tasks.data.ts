import type { ITaskItem } from '@/app/dashboard/taskList/task-list.types';

export const TASKS_DATA: ITaskItem[] = [
  {
    id: 1,
    name: 'Test task',
    progress: 52,
    commentCount: 2,
    mediaCount: 3,
    linkCount: 1,
    due: 5,
    executors: [
      {
        id: 1,
        name: 'Test User 1',
      },
      {
        id: 2,
        name: 'Test User 2',
      },
      {
        id: 3,
        name: 'Test User 3',
      },
    ],
    icon: 'plane',
  },
  {
    id: 2,
    name: 'Test task',
    progress: 100,
    commentCount: 3,
    mediaCount: 2,
    linkCount: 2,
    due: 1,
    executors: [
      {
        id: 1,
        name: 'Test User 1',
      },
      {
        id: 2,
        name: 'Test User 2',
      },
      {
        id: 3,
        name: 'Test User 3',
      },
    ],
    icon: 'plane',
  },
  {
    id: 3,
    name: 'Test task',
    progress: 80,
    commentCount: 1,
    mediaCount: 6,
    linkCount: 2,
    due: 3,
    executors: [
      {
        id: 1,
        name: 'Test User 1',
      },
      {
        id: 2,
        name: 'Test User 2',
      },
      {
        id: 3,
        name: 'Test User 3',
      },
    ],
    icon: 'plane',
  },
];
