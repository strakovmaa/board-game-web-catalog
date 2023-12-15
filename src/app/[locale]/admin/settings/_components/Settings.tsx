'use client';

import { revalidateAllAdminPaths } from '@/actions/utils';
import { ButtonAction } from '@/components';
import { Box, Stack, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useTransition } from 'react';

export const Settings = () => {
  const [isPending, startTransition] = useTransition();

  const handleRevalidateAdmin = () => {
    startTransition(() => {
      revalidateAllAdminPaths();
      enqueueSnackbar('Chache byla úspěšně vymazána', {
        variant: 'success',
      });
    });
  };

  return (
    <Box my={4}>
      <Typography variant="h2" gutterBottom>
        Nastavení Administrace
      </Typography>

      <Stack direction="row" gap={2} my={4}>
        <ButtonAction color="primary" onClick={handleRevalidateAdmin} isPending={isPending}>
          Vymazat cache
        </ButtonAction>
      </Stack>
    </Box>
  );
};
