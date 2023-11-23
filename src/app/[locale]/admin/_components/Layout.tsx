'use client';

import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { ThemeRegistry } from './theme/ThemeRegistry';
import { AppNav } from './AppNav';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <ThemeRegistry>
      <Stack sx={{ minHeight: '100vh' }}>
        <AppNav />
        <Box flexGrow={1}>{children}</Box>
      </Stack>
    </ThemeRegistry>
  );
}
