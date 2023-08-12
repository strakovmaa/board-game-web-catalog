'use client';

import { useTransition } from 'react';
import processSave from './actions';
import { Button } from '@mui/material';

export default function SaveButton() {
  const [isPending, startTransition] = useTransition();
  console.log('isPending:', isPending);

  const gameId = '42';

  const handleSave = async () => {
    startTransition(() => processSave(gameId));
    console.log('SAVED');
  };

  return (
    <Button variant="contained" onClick={handleSave}>
      Save value {gameId}
    </Button>
  );
}
