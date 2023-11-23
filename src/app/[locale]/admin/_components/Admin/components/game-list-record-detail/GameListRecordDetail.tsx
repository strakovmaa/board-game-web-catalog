'use client';

import { Alert, AlertTitle, Box, Button, Divider, Stack, Typography } from '@mui/material';
import { useMemo, useState, useTransition } from 'react';
import { deleteGameListRecord, setActiveGameListRecord } from '@/actions';
import { Delete, Download, KeyboardDoubleArrowRight, Visibility, VisibilityOff } from '@mui/icons-material';
import { ButtonAction, GameList } from '@/components';
import { GameListRecord, GameListRecordStatus } from '@/actions/types';
import { Status } from '@/types';
import { BggLoader } from '../bgg-loader';

type Props = {
  handleSelectRecord: (recordId?: number) => void;
  activeGameListRecord?: number;
  selectedRecord: GameListRecord;
};

export const GameListRecordDetail = ({ handleSelectRecord, activeGameListRecord, selectedRecord }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [showGameList, setShowGameList] = useState(false);
  const [showBggLoader, setShowBggLoader] = useState(false);

  const gameList = selectedRecord.gameList;

  const { newCount, unfinishedCount } = useMemo(
    () => ({
      newCount: gameList?.filter((game) => game.status === Status.NEW).length,
      unfinishedCount: gameList?.filter((game) => game.status === Status.UNFINISHED).length,
      finishedCount: gameList?.filter((game) => game.status === Status.FINISHED).length,
    }),
    [gameList],
  );

  const handleDelete = async () => {
    startTransition(() => deleteGameListRecord(selectedRecord.recordId));
    handleSelectRecord(undefined);
  };

  const handleActivate = async () => {
    startTransition(() => setActiveGameListRecord(selectedRecord.recordId));
  };

  const handleDownload = () => {
    const content = JSON.stringify(selectedRecord, undefined, 2);

    const link = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = 'record.json';
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleShowGameList = () => setShowGameList((prev) => !prev);
  const handleShowBggLoader = () => setShowBggLoader((prev) => !prev);

  return (
    <>
      <Typography variant="h2" gutterBottom>
        {selectedRecord.recordName || ''}{' '}
        <Box component="span" fontWeight="normal">
          ({new Date(selectedRecord.recordId).toLocaleString()})
        </Box>
      </Typography>

      <Stack direction="row" gap={2} alignItems="center" my={4}>
        <Button variant="contained" color="primary" onClick={handleDownload} startIcon={<Download />}>
          Stáhnout JSON
        </Button>

        <ButtonAction
          color="success"
          onClick={handleActivate}
          isPending={isPending}
          disabled={activeGameListRecord === selectedRecord.recordId}
          startIcon={<Visibility />}
        >
          Označit jako aktivní
        </ButtonAction>

        <ButtonAction
          color="error"
          onClick={handleDelete}
          isPending={isPending}
          startIcon={<Delete />}
          disabled={activeGameListRecord === selectedRecord.recordId}
        >
          Smazat seznam
        </ButtonAction>
      </Stack>

      <Stack direction="row" gap={2} alignItems="center" my={4}>
        {selectedRecord.status === GameListRecordStatus.COMPLETED ? (
          <Alert severity="success" sx={{ width: '50%' }}>
            <AlertTitle>Všechny hry staženy ({gameList.length})</AlertTitle>
            Nenalezeno {unfinishedCount} her.
          </Alert>
        ) : (
          <Alert severity="warning" sx={{ width: '50%' }}>
            <AlertTitle>Chybí stáhnout {newCount} her</AlertTitle>
            Nenalezeno {unfinishedCount} her.
          </Alert>
        )}

        {activeGameListRecord === selectedRecord.recordId ? (
          <Alert severity="info" icon={<Visibility />} sx={{ width: '50%' }}>
            <AlertTitle>Zveřejněno</AlertTitle>
            Seznam je aktuálně viditelný pro uživatele.
          </Alert>
        ) : (
          <Alert severity="info" icon={<VisibilityOff />} sx={{ width: '50%' }}>
            <AlertTitle>Nezveřejněno</AlertTitle>
            Seznam je aktuálně skrytý.
          </Alert>
        )}
      </Stack>

      <Stack direction="row" gap={2} alignItems="center" my={4}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleShowBggLoader}
          startIcon={<KeyboardDoubleArrowRight />}
        >
          Zobrazit BGG loader
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleShowGameList}
          startIcon={<KeyboardDoubleArrowRight />}
        >
          Zobrazit náhled seznamu her
        </Button>
      </Stack>

      <Divider sx={{ mb: 3 }} />

      {showBggLoader && <BggLoader selectedRecord={selectedRecord} />}
      {showGameList && <GameList gameList={gameList} gameTotalCount={gameList.length} />}
    </>
  );
};
