'use client';

import { ReactNode } from 'react';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import { SnackbarCloseButton } from './SnackbarCloseButton';
import { styled } from '@mui/material';

type Props = {
  children: ReactNode;
};

const StyledMaterialDesignContent = styled(MaterialDesignContent)(({ theme }) => ({
  '&.notistack-MuiContent': {
    ...theme.typography.body1,
    py: 4,
  },
}));

export const SnackbarCustomProvider = ({ children }: Props) => (
  <SnackbarProvider
    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
    action={(id) => <SnackbarCloseButton id={id} />}
    Components={{
      default: StyledMaterialDesignContent,
      error: StyledMaterialDesignContent,
      info: StyledMaterialDesignContent,
      success: StyledMaterialDesignContent,
      warning: StyledMaterialDesignContent,
    }}
  >
    {children}
  </SnackbarProvider>
);
