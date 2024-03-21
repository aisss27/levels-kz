import React, {useEffect, useState} from 'react';
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
import axios from 'axios';
import {salaryType} from '../../types/salaryTypes.ts'; // Import axios

const Row: React.FC<{ row: salaryType }> = ({row}) => {
    const [open, setOpen] = useState(false);

    return (
        <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                <Typography variant="body2">
                    {row.company ? row.company.name : 'OOPS'}
                </Typography>
                <span>{row.created || '-'}</span>
            </TableCell>
            <TableCell align="right">
                <Typography variant="body2">{row.grade || 'Grade Not Available'}</Typography>
                <span>{row.specialization ? row.specialization.name : '-'}</span>
            </TableCell>
            <TableCell align="right">
                <Typography variant="body2">{row.yoe || '-'}</Typography>
                <span>{row.yac || '-'}</span>
            </TableCell>
            <TableCell align="right">
                <Typography variant="body2">{row.salary ? row.salary.base : '-'}</Typography>
                <span>{row.salary ? row.salary.bonus : '-'}</span>
            </TableCell>
        </TableRow>
    );
};

interface Props {
    companyName: string | undefined;
}

const CollapsibleTable: React.FC<Props> = ({companyName}) => {
    const [salariesList, setSalariesList] = useState<salaryType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token'); // Get token from local storage

                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                const response = await axios.get<salaryType[]>(
                    'https://onelab-levels-api.vercel.app/api/salaries/',
                    {headers}
                );

                const filteredSalaries = response.data.filter(
                    (salary) => salary.company && salary.company.name === companyName
                );

                setSalariesList(filteredSalaries);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [companyName]);

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
            <Paper elevation={3}/>
            <TableContainer component={Paper} sx={{width: '80vw', borderRadius: '5px'}}>
                <Table aria-label="collapsible table">
                    <TableHead sx={{background: '#455a64'}}>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="left">
                                <p>Company</p>
                                <span>Location | Date</span>
                            </TableCell>
                            <TableCell align="right">
                                <p>Grade</p>
                                <span>Specialization</span>
                            </TableCell>
                            <TableCell align="right">
                                <p>Years of Experience</p>
                                <span>Years at Company</span>
                            </TableCell>
                            <TableCell align="right">
                                <p>Total Compensation</p>
                                <span>Base/Bonus</span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    <Typography variant="body2">Loading...</Typography>
                                </TableCell>
                            </TableRow>
                        ) : salariesList.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} align="center">
                                    <Typography variant="body2">No data</Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            salariesList.map((row, index) => <Row key={index} row={row}/>)
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default CollapsibleTable;
