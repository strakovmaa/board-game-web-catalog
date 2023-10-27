import { Game, TFunction } from '@/types';
import { CategoryGroup, MechanicGroup } from '../types';

export type GetAutocompleteOptionsProps = {
  gameList: Game[];
  t: TFunction;
  locale: string;
  key: 'categories' | 'mechanics';
  getGroup: (value: string) => string;
  GroupEnum: typeof CategoryGroup | typeof MechanicGroup;
};
