'use client';

import { useTransition } from 'react';
import { processDelete, processSave } from './actions';
import { Button, CircularProgress, Stack } from '@mui/material';

export default function Buttons() {
  const [isPending, startTransition] = useTransition();

  const gameId = '42';

  const handleSave = async () => {
    startTransition(() => processSave(gameId));
  };

  const handleDelete = async () => {
    startTransition(() => processDelete());
  };

  return (
    <Stack direction="row" gap={2} alignItems="center">
      <Button variant="contained" onClick={handleSave}>
        Save value {gameId}
      </Button>
      <Button variant="contained" color="error" onClick={handleDelete}>
        Delete gameList
      </Button>
      {isPending && <CircularProgress size={24} />}
    </Stack>
  );
}
