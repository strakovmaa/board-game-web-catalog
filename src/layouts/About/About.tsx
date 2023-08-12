'use client';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from '@/components';
import { Layout } from '../Layout';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations();

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {t('component.title')}
          </Typography>
          <Link href="/">Go to the main page</Link>
        </Box>
      </Container>
    </Layout>
  );
}
