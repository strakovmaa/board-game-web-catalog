'use client';

import { AppFooter, AppNav } from '@/components';
import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <AppNav />
      <Box flexGrow={1}>{children}</Box>
      <AppFooter />
    </Stack>
  );
}
