import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { RootState } from '../../store/store.ts';
import { addToComparison } from '../../store/slices/comparasionSlice.ts';
import styles from './CompaniesPage.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCompaniesList } from '../../store/slices/companiesListSlice.ts';

export default function CompaniesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const companiesList = useSelector(
    (state: RootState) => state.companiesListReducer.companiesList
  );

  const AddToCompare = (companyId: string) => {
    dispatch(addToComparison(companyId));
  };

  const goToCompanyPage = (companyId: string) => {
    navigate(`/company-page/${companyId}`);
  };

  useEffect(() => {
    dispatch(getCompaniesList());
  }, []);

  return (
    <>
      <h2 className={styles.title}>Companies List</h2>

      <TableContainer
        className={styles.tableContainer}
        component={Paper}
        sx={{ width: 'fit-content' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Average salary</TableCell>
              <TableCell>Add to compare</TableCell>
              <TableCell>Go to company page</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companiesList.map((company) => (
              <TableRow key={company._id}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ display: 'flex', alignItems: 'center', gap: 4 }}
                >
                  <img
                    src={company.image}
                    alt={company.name}
                    style={{ borderRadius: '50%', width: 50, height: 50 }}
                  />
                  {company.name}
                </TableCell>
                <TableCell>{company.averageSalary}</TableCell>
                <TableCell>
                  <Button onClick={() => AddToCompare(company._id)}>Add</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => goToCompanyPage(company._id)}>
                    Go to
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
