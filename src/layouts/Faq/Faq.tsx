'use client';

import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { range } from 'lodash-es';
import { Layout } from '../Layout';
import { PageTitle } from '@/components';
import { useTranslations } from 'next-intl';

export default function Faq() {
  const t = useTranslations();
  const content = range(8);

  return (
    <Layout>
      <PageTitle i18nKey="faq.pageTitle" />

      <Container maxWidth="md" sx={{ mt: 4, mb: 12 }}>
        {content.map((i) => (
          <Box key={i} my={3}>
            <Typography variant="h4" gutterBottom>
              {t(`faq.content.${i}.q`)}
            </Typography>
            <Typography>{t(`faq.content.${i}.a`)}</Typography>
          </Box>
        ))}
      </Container>
    </Layout>
  );
}
