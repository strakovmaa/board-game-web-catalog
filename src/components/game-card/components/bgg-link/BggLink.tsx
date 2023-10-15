import { Launch } from '@mui/icons-material';
import { Link, Stack, Tooltip } from '@mui/material';
import { useTranslations } from 'next-intl';
import { Urls } from '@/config';
import { Game } from '@/types';

type Props = Pick<Game, 'id' | 'primaryName'>;

export const BggLink = ({ id, primaryName }: Props) => {
  const t = useTranslations();

  return id ? (
    <Tooltip arrow enterTouchDelay={100} title={t('gameCard.goToBgg') ?? ''}>
      <Link
        display="inline-block"
        variant="h4"
        color="text.secondary"
        href={`${Urls.EXTERNAL_BGG}${id}`}
        target="_blank"
      >
        <Stack direction="row" alignItems="center" gap={1}>
          {primaryName}
          <Launch fontSize="inherit" />
        </Stack>
      </Link>
    </Tooltip>
  ) : null;
};
