import React, { useState } from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from 'recharts';
import { MONTHLY_CHARTS_DATA, YEARLY_CHARTS_DATA } from '@/app/dashboard/data/charts.data';
import type { IMonthlyChartsData, IYearlyChartsData } from '@/app/dashboard/charts/charts.types';
import { ChevronDown } from 'lucide-react';

const Charts = () => {
  const [showMonthly, setShowMonthly] = useState(true);
  const [data, setData] = useState<IMonthlyChartsData[] | IYearlyChartsData[]>(MONTHLY_CHARTS_DATA);

  const toggleData = () => {
    if (showMonthly) {
      setData(YEARLY_CHARTS_DATA);
    } else {
      setData(MONTHLY_CHARTS_DATA);
    }
    setShowMonthly(!showMonthly);
  };

  return (
    <div className="bg-background rounded-2xl p-5 flex flex-col content-center justify-between">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-medium text-xl">Project Statistic</h3>
        <button
          onClick={toggleData}
          className="flex items-center gap-2 py-1 px-2 rounded-full border-gray-300 border-[1px]"
        >
          {showMonthly ? 'Yearly' : 'Monthly'}
          <ChevronDown size={16} className="opacity-70" />
        </button>
      </div>
      <div className="ml-[-40px]">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <CartesianGrid vertical={false} />
            <defs>
              <linearGradient id="projects" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#806DF2" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#806DF2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey={showMonthly ? 'month' : 'year'} stroke="#99a1af" />
            <YAxis stroke="#99a1af" />
            <Tooltip cursor={{ strokeDasharray: '3 3', stroke: '#806DF2' }} />
            <Area
              type="monotone"
              dataKey="projects"
              name="Projects"
              fillOpacity={1}
              fill="url(#projects)"
              stroke="#806DF2"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
