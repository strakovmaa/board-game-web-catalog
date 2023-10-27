import { Button, Pagination as MuiPagination, Stack } from '@mui/material';
import { PAGINATION_ITEMS_COUNT } from './config';
import { UsePaginationReturn } from './hooks';
import { useTranslations } from 'next-intl';

type Props = Omit<UsePaginationReturn, 'currentPageGameList'>;

export const Pagination = ({
  showPagination,
  currentPage,
  pageCount,
  handlePageChange,
  showMoreButton,
  handleMoreButton,
}: Props) => {
  const t = useTranslations();

  return showMoreButton || showPagination ? (
    <Stack alignItems="center" gap={3} mb={4}>
      {showMoreButton && (
        <Button variant="contained" size="large" onClick={handleMoreButton}>
          {t('pagination.showMore', { itemsCount: PAGINATION_ITEMS_COUNT })}
        </Button>
      )}
      {showPagination && (
        <MuiPagination
          size="large"
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          siblingCount={0}
          sx={{
            '.MuiPaginationItem-root': {
              lineHeight: 1,
            },
          }}
        />
      )}
    </Stack>
  ) : null;
};
