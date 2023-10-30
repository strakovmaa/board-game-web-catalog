import { useMemo } from 'react';

import { orderBy } from 'lodash-es';

import { RankFilters } from '../types';
import { filterGamebyRank, getOrderGameByRank } from '../utils';
import { getRankNameOptions } from './utils';
import { Game } from '@/types';
import { ControlledSelectOption } from '@/components';
import { useTranslations } from 'next-intl';

type Props = {
  filters: RankFilters;
  gameList: Game[];
};

type Return = {
  gameFilteredList: Game[];
  rankNameOptions: ControlledSelectOption<RankFilters, 'rankName'>[];
};

export const useFilteredGamesByRank = ({ filters, gameList }: Props): Return => {
  const t = useTranslations();

  const gameFilteredList = useMemo(() => {
    const list = (gameList || []).filter((game) => filterGamebyRank(game, filters));

    return orderBy(list, getOrderGameByRank(filters), 'asc');
  }, [gameList, filters]);

  const rankNameOptions = useMemo(() => getRankNameOptions(t), [t]);

  return {
    gameFilteredList,
    rankNameOptions,
  };
};
