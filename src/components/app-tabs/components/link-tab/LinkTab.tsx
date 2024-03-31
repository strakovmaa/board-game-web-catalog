'use client';

import { Link, LinkProps } from '@/components';
import { Tab } from '@mui/material';

type LinkTabProps = {
  label: string;
  href: LinkProps['href'];
  selected?: boolean;
};

export const LinkTab = (props: LinkTabProps) => (
  <Tab
    component={Link}
    {...props}
    sx={(theme) => ({
      color: 'text.primary',
      '&.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
      },
    })}
  />
);
