import { Box } from '@mui/material';
import { Header } from '../Header/Header';
import EnhancedTable from './CompaniesTable';
import { Footer } from '../Footer/Footer';

export const CompaniesPage = () => {
  return (
    <Box>
      <Header />
      <EnhancedTable />
      <Footer />
    </Box>
  );
};
