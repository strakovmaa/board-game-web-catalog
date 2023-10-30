import { TFunction } from '@/types';
import { RankFilters } from '../types';
import { BGG_RANK_NAMES } from '@/bggData';
import { ControlledSelectOption } from '@/components';

export const getRankNameOptions = (t: TFunction): ControlledSelectOption<RankFilters, 'rankName'>[] =>
  Object.values(BGG_RANK_NAMES).map((value) => ({
    value,
    label: t(`rank.form.rankName.options.${value}`),
  }));
