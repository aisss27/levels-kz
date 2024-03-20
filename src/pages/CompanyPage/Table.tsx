import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
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
  date: number,
  bonus: number,
  baseSalary: number,
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
          <span>{row.location} | {row.date}</span>
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
          <span>{row.baseSalary}/{row.bonus}</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const today = new Date();
const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const currentDate = month + "/" + date + "/" + year;
const rows = [
  createData('Aviata', 'web development aaa', 6.0, 24, 4.0, 3.99, 'location', currentDate, 100, 20),
  createData('ForteBank', 2, 3, 4, 5, 6, 'location', currentDate, 9, 10),
  createData('Kaspi', 2, 3, 4, 5, 6, 'location', currentDate, 9, 10),
  createData('Railways', 2, 3, 4, 5, 6, 'location', currentDate, 9, 10),
  createData('Hello', 2, 3, 4, 5, 6, 'location', currentDate, 9, 10),
];

export default function CollapsibleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box sx={{ width: '100vw', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px" }}>
      <Paper />
      <TableContainer component={Paper} sx={{ width: '80vw', borderRadius: "10px" }}>
        <Table aria-label="collapsible table">
          <TableHead sx={{ background: '#455a64' }}>
            <TableRow >
              <TableCell></TableCell>
              <TableCell align="left"><p>Company</p><span>Location | Date</span></TableCell>
              <TableCell align="right"><p>Level Name</p><span >Tag</span></TableCell>
              <TableCell align="right"><p>Years of Experience</p><span>Experience at a Company</span></TableCell>
              <TableCell align="right"><p>Total Compensation</p><span>Base/Bonus</span></TableCell>
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
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}