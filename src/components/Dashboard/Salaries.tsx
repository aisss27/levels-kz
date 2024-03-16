'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
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
      <CardContent>
       <BarChartSalaries/>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button color="inherit" size="small">
          Overview
        </Button>
      </CardActions>
    </Card>
  );
}

