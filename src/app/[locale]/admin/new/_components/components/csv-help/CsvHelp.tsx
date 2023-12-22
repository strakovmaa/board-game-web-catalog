import { CSV_COLUMNS_OPTIONS } from '@/app/[locale]/admin/_components/config';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  alpha,
} from '@mui/material';
import { CSV_COLUMNS_HELPS } from './config';
import { CsvColumnOption, CsvColumnsOptions } from '@/csvParser';
import { pickBy } from 'lodash-es';

export const CsvHelp = () => {
  const columns = pickBy(
    CSV_COLUMNS_HELPS,
    (_, column) => (CSV_COLUMNS_OPTIONS[column as keyof CsvColumnsOptions] as CsvColumnOption<true>)?.enabled !== false,
  );

  return (
    <>
      <Typography variant="h3">Nastavení CSV sloupců</Typography>

      <TableContainer component={Paper} elevation={4} sx={{ my: 4, maxHeight: '500px', overflow: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>Název sloupce</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>Povinné</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>Povolené hodnoty</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>Popis</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(columns).map(([column, { required, values, description }]) => (
              <TableRow
                key={column}
                sx={(theme) => ({
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: required ? alpha(theme.palette.primary.main, 0.05) : undefined,
                })}
              >
                <TableCell component="td" scope="row">
                  {CSV_COLUMNS_OPTIONS[column as keyof CsvColumnsOptions].colName}
                </TableCell>
                <TableCell>{required ? 'Ano' : 'Ne'}</TableCell>
                <TableCell component="td" scope="row">
                  <code>{values.join(', ')}</code>
                </TableCell>
                <TableCell component="td" scope="row">
                  {description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
