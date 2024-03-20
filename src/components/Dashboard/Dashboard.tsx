import Grid from '@mui/material/Unstable_Grid2';
import { MyCompanies } from './MyCompanies.tsx';
import { PopularCompanies } from './PopularCompanies.tsx';
import { Salaries } from './Salaries.tsx';
import { Traffic } from './Traffic.tsx';
import { orders, companies } from './data.ts';
import { HomeInfo } from '../HomeInfo/HomeInfo.tsx';
import InfiniteScroller from '../InfiniteScroller/InfiniteScroller.tsx';

export function Dashboard() {
  return (
    <>
      <HomeInfo />
      <Grid container spacing={3} sx={{ padding: '20px' }}>
        <Grid lg={6} md={12} xs={12}>
          <Salaries sx={{ height: '100%' }} />
        </Grid>
        <Grid lg={6} md={12} xs={12}>
          <Traffic
            chartSeries={[40, 40, 20]}
            labels={['Frontend', 'Backend', 'UI/UX']}
            sx={{ height: '100%' }}
          />
        </Grid>
        <Grid lg={6} md={12} xs={12}>
          <PopularCompanies companies={companies} sx={{ height: '100%' }} />
        </Grid>
        <Grid lg={6} md={12} xs={12}>
          <MyCompanies orders={orders} sx={{ height: '100%' }} />
        </Grid>
      </Grid>
      <InfiniteScroller />
    </>
  );
}
