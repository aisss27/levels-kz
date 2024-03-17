import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';

import BarChartSalaries from '../BarChart/BarChartSalaries.tsx';

export interface SalariesProps {
  sx?: SxProps;
}

export function Salaries({ sx }: SalariesProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <CardHeader title="Salaries"/>
       <BarChartSalaries/>
      <Divider />
    </Card>
  );
}

