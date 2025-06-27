'use client';

import Header from '@/components/ui/header/Header';
import SearchField from '@/components/ui/searchField/SearchField';
import ProjectStats from '@/app/dashboard/projectsStats/ProjectStats';
import Charts from '@/app/dashboard/charts/Charts';
import TaskList from '@/app/dashboard/taskList/TaskList';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[2.7fr_1fr]">
      <div className="p-5">
        <div className="flex items-center justify-between mb-6">
          <Header>Dashboard</Header>
          <SearchField
            value=""
            onChange={() => {
              console.log(1);
            }}
          />
        </div>
        <div className="grid grid-cols-[32%_65%] gap-6">
          <ProjectStats />
          <Charts />
        </div>
        <TaskList />
      </div>
      <div className="p-5">CHAT</div>
    </div>
  );
};

export default Dashboard;
