import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import type { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export interface Order {
  id: string;
  status: string;
}

export interface MyCompaniesProps {
  orders?: Order[];
  sx?: SxProps;
}

export function MyCompanies({ orders = [], sx }: MyCompaniesProps) {
  return (
    <Card sx={sx}>
      <CardHeader title="My Companies" />
      <Box sx={{ overflowX: 'auto', width: '90%' }}>
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              return (
                <TableRow hover key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    <Chip color={'primary'} label={'finished'} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
}
