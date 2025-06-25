'use client';

import Header from '@/components/ui/header/Header';
import SearchField from '@/components/ui/searchField/SearchField';

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <Header>Dashboard</Header>
        <SearchField
          value=""
          onChange={() => {
            console.log(1);
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
