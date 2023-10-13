'use client';

import { Button, ButtonProps, CircularProgress } from '@mui/material';

type Props = Omit<ButtonProps, 'variant'> & {
  isPending: boolean;
};

export function ButtonAction({ isPending, children, color, ...props }: Props) {
  return (
    <Button variant={isPending ? 'outlined' : 'contained'} color={color} {...props}>
      {children}
      {isPending && <CircularProgress size={20} color={color} sx={{ ml: 1 }} />}
    </Button>
  );
}
