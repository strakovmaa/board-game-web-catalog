import { Box, Container, Grid } from '@mui/material';
import { useFormContext } from 'react-hook-form';

import { CategoryFilters } from '../../types';
import { Alarm, Group } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import {
  ControlledSelectOption,
  ControlleAutocompleteOption,
  ControlledSelect,
  ControlledAutocomplete,
} from '@/components';

type Props = {
  playersCountOptions: ControlledSelectOption<CategoryFilters, 'playersCount'>[];
  playingTimeOptions: ControlledSelectOption<CategoryFilters, 'playingTime'>[];
  categoryOptions: ControlleAutocompleteOption[];
  mechanicsOptions: ControlleAutocompleteOption[];
};

export const CategoryForm = ({ playersCountOptions, playingTimeOptions, categoryOptions, mechanicsOptions }: Props) => {
  const t = useTranslations();
  const { control } = useFormContext<CategoryFilters>();

  return (
    <Box py={4} sx={(theme) => ({ backgroundColor: theme.palette.secondary.main })}>
      <Container>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid item xs={12} md={6}>
            <ControlledSelect<CategoryFilters, 'playersCount'>
              control={control}
              name="playersCount"
              label={t('search.form.playersCount.label')}
              options={playersCountOptions}
              Icon={Group}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <ControlledSelect<CategoryFilters, 'playingTime'>
              control={control}
              name="playingTime"
              label={t('search.form.playingTime.label')}
              options={playingTimeOptions}
              Icon={Alarm}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <ControlledAutocomplete<CategoryFilters, 'categories'>
              control={control}
              name="categories"
              label={t('search.form.categories.label')}
              options={categoryOptions}
              noOptionsText={t('common.noOptionsText')}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <ControlledAutocomplete<CategoryFilters, 'mechanics'>
              control={control}
              name="mechanics"
              label={t('search.form.mechanics.label')}
              options={mechanicsOptions}
              noOptionsText={t('common.noOptionsText')}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
