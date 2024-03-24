import { Grid } from '@mui/material';
import { MyCompanies } from './MyCompanies.tsx';
import { PopularCompanies } from './PopularCompanies.tsx';
import { Salaries } from './Salaries.tsx';
import {useSelector} from 'react-redux';
import { RootState } from '../../store/store.ts';
import {Traffic} from './Traffic.tsx';

export function Dashboard() {
  const companiesList = useSelector(
    (state: RootState) => state.companiesListReducer.companiesList
  );

  const myCompaniesList = companiesList.slice(5, 10);
  const companyNames = myCompaniesList.map(company => company.name);

  const labels = ["Frontend", "Backend", "Mobile IOS", "DevOps", "UX/UI", "Manager"];

  const cardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <Grid item lg={6} md={12} xs={12}>
          <Salaries sx={cardStyles} />
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <Traffic
            chartSeries={[42,26,10,10,10,2]}
            labels={labels}
            sx={cardStyles}
          />
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <PopularCompanies companies={companiesList} sx={cardStyles} />
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <MyCompanies orders={companyNames} sx={cardStyles} />
        </Grid>
      </Grid>
    </>
  );
}