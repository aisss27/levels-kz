import { useSelector, useDispatch } from 'react-redux';
import { Button, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RootState } from '../store/store.ts';
import { deleteFromComparison } from '../store/slices/comparasionSlice.ts';

export const CompanyComparison = () => {
  const dispatch = useDispatch();
  const comparedCompaniesId = useSelector(
    (state: RootState) => state.comparasionReducer.comparedCompaniesId
  );
  const companiesList = useSelector(
    (state: RootState) => state.companiesListReducer.companiesList
  );

  const comparedCompaniesList = companiesList.filter((company) =>
    comparedCompaniesId.includes(company._id)
  );

  const handleDelete = (companyId: string) => {
    dispatch(deleteFromComparison(companyId));
  };

  return (
    <Stack alignItems="center" gap={4}>
      <h2>Company Comparison</h2>
      <TableContainer
        component={Paper}
        sx={{ margin: '0 auto', width: 'fit-content' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Company name</TableCell>
              <TableCell>Delete company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comparedCompaniesList.map((company) => (
              <TableRow key={company._id}>
                <TableCell component="th" scope="row">
                  {company.name}
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(company._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
