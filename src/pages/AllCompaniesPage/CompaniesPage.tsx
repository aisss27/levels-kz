import { Box } from '@mui/material';
import { Header } from '../../components/Header/Header';
import EnhancedTable from './CompaniesTable';
import { Footer } from '../../components/Footer/Footer';

export const CompaniesPage = () => {
  return (
    <Box>
      <Header />
      <EnhancedTable />
      <Footer />
    </Box>
  );
};
