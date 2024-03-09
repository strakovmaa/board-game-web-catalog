import { Game } from '@/types';
import { getDateFromCzechDate } from '@/utils';
import { capitalize } from 'lodash-es';

export const getGroupGameByAdded =
  (resolvedLanguage: string, defaultGroupTitle: string): ((game: Game) => unknown) =>
  (game) => {
    const date = getDateFromCzechDate(game.added);

    if (date.getTime() === 0) {
      return defaultGroupTitle;
    }

    return capitalize(date.toLocaleDateString(resolvedLanguage, { month: 'long', year: 'numeric' }));
  };
