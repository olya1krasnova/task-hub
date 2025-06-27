import type { IMonthlyChartsData, IYearlyChartsData } from '@/app/dashboard/charts/charts.types';

export const MONTHLY_CHARTS_DATA: IMonthlyChartsData[] = [
  { month: 'Jan', projects: 6 },
  { month: 'Feb', projects: 15 },
  { month: 'Mar', projects: 27 },
  { month: 'Apr', projects: 38 },
  { month: 'May', projects: 22 },
  { month: 'Jun', projects: 28 },
  { month: 'Jul', projects: 18 },
];

export const YEARLY_CHARTS_DATA: IYearlyChartsData[] = [
  { year: '2019', projects: 120 },
  { year: '2020', projects: 180 },
  { year: '2021', projects: 240 },
  { year: '2022', projects: 300 },
  { year: '2023', projects: 400 },
];
