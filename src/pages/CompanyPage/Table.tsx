import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TablePagination from '@mui/material/TablePagination';

function createData(
  company: string,
  level: string,
  totalExperience: number,
  companyExperience: number,
  totalSalary: number,
  tag: string,
  location: string,
  date: string,
  bonus: number,
  baseSalary: number
) {
  return {
    company,
    level,
    totalExperience,
    companyExperience,
    totalSalary,
    tag,
    location,
    date,
    bonus,
    baseSalary,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography variant="body2">{row.company}</Typography>
          <span>
            {row.location} | {row.date}
          </span>
        </TableCell>
        <TableCell align="right">
          <Typography variant="body2">{row.level}</Typography>
          <span>{row.tag}</span>
        </TableCell>
        <TableCell align="right">
          <Typography variant="body2">{row.totalExperience}</Typography>
          <span>{row.companyExperience}</span>
        </TableCell>
        <TableCell align="right">
          <Typography variant="body2">{row.totalSalary}</Typography>
          <span>
            {row.baseSalary}/{row.bonus}
          </span>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const currentDate = new Date().toLocaleDateString('en-US');
const rows = [
  createData(
    'Aviata',
    'web development aaa',
    6.0,
    24,
    4.0,
    '11',
    'location',
    currentDate,
    100,
    20
  ),
  createData(
    'ForteBank',
    '111',
    3231,
    4,
    512,
    '1233',
    'location',
    currentDate,
    9,
    10
  ),
  createData(
    'Kaspi',
    '11',
    564,
    4,
    456,
    '1111',
    'location',
    currentDate,
    9,
    10
  ),
  createData(
    'Railways',
    '11',
    3,
    12,
    5,
    '1223',
    'location',
    currentDate,
    9,
    10
  ),
  createData('Hello', '111', 3, 4, 789, '1231', 'location', currentDate, 9, 10),
];

export default function CollapsibleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
      }}
    >
      <Paper elevation={3} />
      <TableContainer
        component={Paper}
        sx={{ width: '80vw', borderRadius: '5px' }}
      >
        <Table aria-label="collapsible table">
          <TableHead sx={{ background: '#455a64' }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">
                <p>Company</p>
                <span>Location | Date</span>
              </TableCell>
              <TableCell align="right">
                <p>Level Name</p>
                <span>Tag</span>
              </TableCell>
              <TableCell align="right">
                <p>Years of Experience</p>
                <span>Experience at a Company</span>
              </TableCell>
              <TableCell align="right">
                <p>Total Compensation</p>
                <span>Base/Bonus</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.totalExperience + row.totalSalary} row={row} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          style={{ background: '#eceff1' }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, page) => handleChangePage(page)}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
