import { Box, Container, Grid } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { NameFilters } from '../../types';
import { useTranslations } from 'next-intl';
import { ControlledTextField } from '@/components';

export const NameForm = () => {
  const t = useTranslations();
  const { control } = useFormContext<NameFilters>();

  return (
    <Box py={4} sx={(theme) => ({ backgroundColor: theme.palette.secondary.main })}>
      <Container>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid item xs={12}>
            <ControlledTextField<NameFilters, 'name'> control={control} name="name" label={t('name.form.name.label')} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
