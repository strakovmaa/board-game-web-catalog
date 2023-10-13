'use client';

import Container from '@mui/material/Container';
import { Layout } from '../Layout';
import { CsvLoader, DbScan } from './components';
import { Game } from '@/types';

export type DbScanType = Record<string, unknown>;

type Props = {
  dbScan: DbScanType;
  gameList: Game[];
};

export default function Admin({ dbScan, gameList }: Props) {
  return (
    <Layout>
      <Container maxWidth="lg">
        <DbScan dbScan={dbScan} />
        <CsvLoader gameList={gameList} />
      </Container>
    </Layout>
  );
}
