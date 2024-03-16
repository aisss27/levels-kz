import { BarChart } from '@mui/x-charts/BarChart';
import styles from './BarChartSalaries.module.css'

const chartSetting = {
  width: 1200,
  height: 600,
};
const dataset = [
  {
    junior: 900,
    middle: 1500,
    senior: 3000,
    month: 'Frontend Developer',
  },
  {
    junior: 900,
    middle: 1500,
    senior: 3000,
    month: 'Backend Developer',
  },
  {
    junior: 700,
    middle: 1200,
    senior: 2000,
    month: 'Web Designer',
  },
  {
    junior: 1000,
    middle: 2000,
    senior: 3500,
    month: 'Data Scientist',
  },
];

const valueFormatter = (value: number) => `${value}$`;

export default function BarChartSalaries() {
  return (
    <div className={styles.barChartContainer}>
      <BarChart
        className={styles.barChart}
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'junior', label: 'Junior', valueFormatter },
          { dataKey: 'middle', label: 'Middle', valueFormatter },
          { dataKey: 'senior', label: 'Senior', valueFormatter },
        ]}
        {...chartSetting}
      />
    </div>
  );
}