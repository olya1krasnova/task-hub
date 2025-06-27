import Image from 'next/image';
import { DynamicIcon } from 'lucide-react/dynamic';
import { User, MessageSquareText, Image as ImageIcon, Link, Plus, Pencil } from 'lucide-react';
import type { ITaskItem } from '@/app/dashboard/taskList/task-list.types';

interface Props {
  task: ITaskItem;
}

const TaskItem = ({ task }: Props) => {
  const { icon, name, executors, progress, commentCount, mediaCount, linkCount } = task;

  return (
    <div className="bg-background rounded-2xl p-3">
      <div className="flex">
        <div>
          <DynamicIcon name={icon} />
        </div>
        <div>{name}</div>
        <ul className="flex">
          {executors.map(({ id, imageUrl, name: executorName }) => (
            <li key={id}>
              {imageUrl ? <Image src={imageUrl} alt={`executor-${executorName}`} /> : <User />}
            </li>
          ))}
        </ul>
      </div>
      <div>{progress} %</div>
      <div className="flex">
        <div className="flex">
          <div className="flex">
            <MessageSquareText />
            {commentCount}
          </div>
          <div className="flex">
            <ImageIcon />
            {mediaCount}
          </div>
          <div className="flex">
            <Link />
            {linkCount}
          </div>
        </div>
        <div className="flex">
          <button>
            <Plus />
          </button>
          <button>
            <Pencil />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
