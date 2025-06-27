import { TASKS_DATA } from '@/app/dashboard/data/tasks.data';
import TaskItem from '@/app/dashboard/taskList/TaskItem';

const TaskList = () => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-medium">
        Last Tasks <span>(3)</span>
      </h3>
      <ul className="grid grid-cols-[1fr_1fr_1fr] gap-2 mt-3">
        {TASKS_DATA.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
