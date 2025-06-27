import type { IconName } from 'lucide-react/dynamic';

export interface IUser {
  id: number;
  name: string;
  imageUrl?: string;
}

export interface ITaskItem {
  id: number;
  name: string;
  progress: number;
  commentCount: number;
  mediaCount: number;
  linkCount: number;
  due: number;
  executors: IUser[];
  icon: IconName;
}
