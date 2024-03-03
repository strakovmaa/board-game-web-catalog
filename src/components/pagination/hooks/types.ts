import { Game } from '@/types';
import { ChangeEvent } from 'react';

export type UsePaginationReturn = {
  currentPageGameList: Game[];
  showPagination: boolean;
  currentPage: number;
  pageCount: number;
  handlePageChange: (event: ChangeEvent<unknown>, value: number) => void;
  showMoreButton: boolean;
  showMoreButtonCount: number;
  handleMoreButton: () => void;
};
