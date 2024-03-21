import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { blueGrey } from '@mui/material/colors';
import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

type Props = {
  setModule: Dispatch<SetStateAction<string>>;
  id: string | undefined;
};

export default function CompanyName({ setModule, id }: Props) {
  const companiesList = useSelector(
    (state: RootState) => state.companiesListReducer.companiesList
  );
  const handleOverview = () => {
    setModule('overview');
  };
  const handleSalaries = () => {
    setModule('salaries');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 128,
        width: '80vw',
        paddingTop: 2,
      }}
    >
      <Paper
        elevation={3}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          flexGrow: 1,
          borderEndStartRadius: '0px',
          padding: 20,
        }}
      >
        {companiesList.map((company) =>
          id === company.id ? (
            <img
              src={company.image}
              alt={company.name}
              style={{ borderRadius: '50%', width: 50, height: 50 }}
            />
          ) : null
        )}
        {companiesList.map((company) =>
          id === company.id ? company.name : null
        )}
      </Paper>
      <Box
        sx={{
          width: '100%',
          height: 30,
          backgroundColor: blueGrey[100],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderEndStartRadius: '5px',
        }}
      >
        <Button
          onClick={handleOverview}
          sx={{
            '&.Mui-selected': {},
            ':focus': {
              borderBottom: '4px solid #37474f',
            },
            width: '50%',
          }}
        >
          Overview
        </Button>
        <Button
          onClick={handleSalaries}
          sx={{
            '&.Mui-selected': {},
            ':focus': {
              borderBottom: '4px solid #37474f',
            },
            width: '50%',
          }}
        >
          Salaries
        </Button>
      </Box>
    </Box>
  );
}
