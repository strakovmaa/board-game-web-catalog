'use client';

import { Button, Stack, Typography } from '@mui/material';
import { useState, useTransition } from 'react';
import { ButtonAction } from '@/components';
import { DbScanType } from '../../Admin';
import dynamic from 'next/dynamic';
import { deleteGameList } from '@/actions';

const ReactJson = dynamic(() => import('react-json-view'), {
  ssr: false,
});

type Props = {
  dbScan: DbScanType;
};

export const DbScan = ({ dbScan }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [showDbScan, setShowDbScan] = useState(false);

  const handleDelete = async () => {
    startTransition(() => deleteGameList());
  };

  const handleShowDbScan = () => {
    setShowDbScan((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h2" gutterBottom>
        DB Scan
      </Typography>

      <Stack direction="row" gap={2} alignItems="center" my={4}>
        <ButtonAction color="error" onClick={handleDelete} isPending={isPending}>
          Smazat DB
        </ButtonAction>
        <Button color="primary" variant="outlined" onClick={handleShowDbScan}>
          Zobrazit DbScan
        </Button>
      </Stack>

      {showDbScan && <ReactJson src={dbScan} theme="pop" />}
    </>
  );
};
