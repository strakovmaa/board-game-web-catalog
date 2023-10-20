'use client';

import { Stack, Typography } from '@mui/material';
import { useTransition } from 'react';
import { deleteGameListRecord, setActiveGameListRecord } from '@/actions';
import { Delete } from '@mui/icons-material';
import { ButtonAction } from '@/components';

type Props = {
  selectedRecordId: number;
  handleSelectRecord: (recordId?: number) => void;
  activeGameListRecord?: number;
};

export const GameListRecordDetail = ({ selectedRecordId, handleSelectRecord, activeGameListRecord }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(() => deleteGameListRecord(selectedRecordId));
    handleSelectRecord(undefined);
  };

  const handleActivate = async () => {
    startTransition(() => setActiveGameListRecord(selectedRecordId));
  };

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Verze: {selectedRecordId}
      </Typography>

      <Stack direction="row" gap={2} alignItems="center" my={4}>
        <ButtonAction
          color="error"
          onClick={handleDelete}
          isPending={isPending}
          startIcon={<Delete />}
          disabled={activeGameListRecord === selectedRecordId}
        >
          Smazat tuto verzi
        </ButtonAction>
        <ButtonAction
          color="success"
          onClick={handleActivate}
          isPending={isPending}
          disabled={activeGameListRecord === selectedRecordId}
        >
          Označit jako aktivní
        </ButtonAction>
      </Stack>
    </>
  );
};
