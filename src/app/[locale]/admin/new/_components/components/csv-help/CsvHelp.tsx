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
import { CsvColumnsHelpDemand } from './types';

export const CsvHelp = () => {
  const columns = pickBy(
    CSV_COLUMNS_HELPS,
    (_, column) => (CSV_COLUMNS_OPTIONS[column as keyof CsvColumnsOptions] as CsvColumnOption<true>)?.enabled !== false,
  );

  const getRowBackground = (column: keyof CsvColumnsOptions) => {
    switch (column) {
      case 'type':
      case 'name':
      case 'langs':
      case 'location':
      case 'added':
        return '#cfe7f5';

      case 'id':
        return '#e6e6ff';

      case 'yearpublished':
      case 'image':
      case 'playingtime':
      case 'minplayers':
      case 'maxplayers':
        return '#ccffcc';
    }
  };

  const getDemandText = (demand: `${CsvColumnsHelpDemand}`) => {
    switch (demand) {
      case CsvColumnsHelpDemand.Required:
        return 'Povinné';
      case CsvColumnsHelpDemand.Unrequired:
        return 'Nepovinné';
      case CsvColumnsHelpDemand.Rewriting:
        return 'Vlastní*';
    }
  };

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
            {Object.entries(columns).map(([column, { demand, values, description }]) => (
              <TableRow
                key={column}
                sx={(theme) => ({
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: alpha(getRowBackground(column as keyof CsvColumnsOptions), 0.5),
                })}
              >
                <TableCell component="td" scope="row">
                  {CSV_COLUMNS_OPTIONS[column as keyof CsvColumnsOptions].colName}
                </TableCell>
                <TableCell>{getDemandText(demand)}</TableCell>
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

      <Typography my={4}>
        * Tyto sloupce vyplňte pouze v případě, že hru nelze dohledat v BGG. Hra, která má vyplněný aspoň 1 z těchto
        sloupců, bude označena jako <i>úspěšně načtená</i> a nebude se již dohledávat na BGG.
      </Typography>
    </>
  );
};
