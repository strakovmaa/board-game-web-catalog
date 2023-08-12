'use client';

import Container from '@mui/material/Container';
import { Layout } from '../Layout';
import ReactJson from 'react-json-view';
import { ReactNode } from 'react';
import { Typography } from '@mui/material';

export type DbScanType = Record<string, unknown>;

type Props = {
  children: ReactNode;
  dbScan: DbScanType;
};

export default function Admin({ children, dbScan }: Props) {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h2">DB Scan</Typography>
        {children}
        <Typography variant="h2">Scan</Typography>
        <ReactJson src={dbScan} theme="pop" />
      </Container>
    </Layout>
  );
}
