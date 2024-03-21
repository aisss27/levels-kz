import { Box, Typography } from '@mui/material';
import CompanyName from './CompanyName';
import CollapsibleTable from './Table';
import { useState, useEffect } from 'react';
import { Overview } from './Overview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { companyType } from '../../types/companyTypes';

export const CompanyPage = () => {
  const [module, setModule] = useState('overview');
  const [company, setCompany] = useState<companyType | null>(null);
  const { id } = useParams();
  const companiesList = useSelector(
      (state: RootState) => state.companiesListReducer.companiesList
  );

  useEffect(() => {
    const selectedCompany = companiesList?.find(
        (company) => company._id === id
    );
    if (selectedCompany) {
      setCompany(selectedCompany);
    }
  }, [id, companiesList]);

  return (
      <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {company ? (
            <>
              <Typography variant="h4">{company.name}</Typography>
            </>
        ) : (
            <Typography variant="h4">Company Not Found!</Typography>
        )}
        <CompanyName id={id} setModule={setModule} />
        {module === 'overview' ? <Overview /> : <CollapsibleTable companyName={company?.name} />}
      </Box>
  );
};
