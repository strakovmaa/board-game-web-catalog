import {
  Alert,
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { getGameFromCsv, mergeNotesToCsvGame } from './utils';
import { dataCsv } from '@/data';
import { useTransition } from 'react';
import { ButtonAction } from '@/components';
import { Game } from '@/types';
import { saveGameList } from '@/actions';

type Props = {
  gameList: Game[];
};

export const CsvLoader = ({ gameList }: Props) => {
  const [isPending, startTransition] = useTransition();

  const csvGameList = mergeNotesToCsvGame(dataCsv).map(getGameFromCsv);

  const handleSaveGameList = async () => {
    startTransition(() => saveGameList(csvGameList));
  };

  return (
    <>
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          CSV Data
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Seznam her z CSV obsahuje {csvGameList?.length || 0} položek.
        </Typography>
      </Box>

      <TableContainer component={Paper} elevation={4} sx={{ my: 4, maxHeight: '500px', overflow: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>uid</TableCell>
              <TableCell>sourceName</TableCell>
              <TableCell>notes</TableCell>
              <TableCell>langs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {csvGameList?.map(({ uid, sourceName, notes, langs }) => (
              <TableRow key={uid} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="td" scope="row">
                  {uid}
                </TableCell>
                <TableCell component="td" scope="row">
                  {sourceName}
                </TableCell>
                <TableCell component="td" scope="row">
                  {notes?.map((item) => (
                    <Typography key={item}>{item}</Typography>
                  ))}
                </TableCell>
                <TableCell component="td" scope="row">
                  {langs?.map((item) => (
                    <Typography key={item}>{item}</Typography>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {gameList.length === csvGameList.length && (
        <Alert severity="success">V DB i v CSV je {gameList.length} položek</Alert>
      )}

      {!!csvGameList.length && (
        <Stack direction="row" gap={2} my={4}>
          <ButtonAction color="success" onClick={handleSaveGameList} isPending={isPending}>
            Uložit CSV do DB
          </ButtonAction>
        </Stack>
      )}
    </>
  );
};
