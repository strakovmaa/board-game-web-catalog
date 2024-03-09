import { useMemo } from 'react';
import { groupBy, orderBy } from 'lodash-es';
import { Game } from '@/types';
import { useTranslations } from 'next-intl';
import { orderGameByAdded } from '@/layouts/Search/utils';
import { getGroupGameByAdded } from './utils';
import { GameGroupedList } from '@/components';

type Props = {
  gameList: Game[];
  resolvedLanguage: string;
};

type Return = {
  gameGroupedList: GameGroupedList;
};

export const useGroupedGamesByAdded = ({ gameList, resolvedLanguage }: Props): Return => {
  const t = useTranslations();

  const gameGroupedList = useMemo(() => {
    const orderedList = orderBy(gameList || [], orderGameByAdded, 'desc');
    const defaultGroupTitle = t('added.defaultGroupTitle');
    const groupedList = groupBy(orderedList, getGroupGameByAdded(resolvedLanguage, defaultGroupTitle));

    return groupedList;
  }, [gameList, resolvedLanguage, t]);

  return {
    gameGroupedList,
  };
};
