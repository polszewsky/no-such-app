import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const shapeStyles = { bgcolor: 'lightgreen', width: 200, height: 200};
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} marginTop={10} textAlign='center'>
</Box>

function createData(
  from, to, footprint, vehicleType,
) {
  return { from, to, footprint, vehicleType };
}

const rows = [
  createData('Cracow', 'Warsaw', 122, 'train'),
  createData('Berlin', 'London', 437, 'plane'),
  createData('Lisbon', 'Kyiv', 1579, 'plane'),
  createData('Cairo', 'Rome', 1408, 'plane'),
  createData('Hamburg', 'Hague', 12, 'bike'),
];

export default function TravelPage() {
  return <Grid container spacing={5} direction="column" alignItems="center" justifyContent="center">
     Travel Page
    {rectangle}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table" alignItems="center" justifyContent="center">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell align="left">To</TableCell>
            <TableCell align="left">Carbon dioxide (t)</TableCell>
            <TableCell align="left">Transportation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="left">{row.from}</TableCell>
              <TableCell align="left">{row.to}</TableCell>
              <TableCell align="left">{row.footprint}</TableCell>
              <TableCell align="left">{row.vehicleType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>;
}
