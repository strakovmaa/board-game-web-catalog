'use client';

import { Box, Container } from '@mui/material';
import { useRef } from 'react';
import { GameListGrouped, PageTitle, Pagination, useGroupedPagination } from '@/components';
import { Game, GameListInfo } from '@/types';
import { Layout } from '../Layout';
import { useLocale } from 'next-intl';
import { useGroupedGamesByAdded } from './hooks';

type Props = {
  gameList: Game[];
  gameListInfo: GameListInfo;
};

export default function Added({ gameList, gameListInfo }: Props) {
  const resolvedLanguage = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  const { gameGroupedList } = useGroupedGamesByAdded({
    gameList,
    resolvedLanguage,
  });

  const { currentPageGameGroupedList, ...paginationProps } = useGroupedPagination({ gameGroupedList, ref });

  return (
    <Layout gameListInfo={gameListInfo}>
      <PageTitle i18nKey="added.pageTitle" />

      <Container>
        <Box ref={ref}>
          <GameListGrouped gameGroupedList={currentPageGameGroupedList} />
          <Pagination {...paginationProps} isGrouped />
        </Box>
      </Container>
    </Layout>
  );
}
