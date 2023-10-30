import { useMemo } from 'react';
import { filterGameByName } from '../utils';
import { NameFilters } from '../types';
import { Game } from '@/types';

type Props = {
  filters: NameFilters;
  gameList: Game[];
};

type Return = {
  gameFilteredList: Game[];
  gameListOptions: string[];
};

export const useFilteredGamesByName = ({ filters, gameList }: Props): Return => {
  const gameFilteredList = useMemo(() => {
    if ((filters.name?.length ?? 0) < 3) {
      return [];
    }

    return (gameList || []).filter((game) => filterGameByName(game, filters));
  }, [gameList, filters]);

  const gameListOptions = useMemo(() => (gameList || []).map(({ sourceName }) => sourceName), [gameList]);

  return { gameFilteredList, gameListOptions };
};
