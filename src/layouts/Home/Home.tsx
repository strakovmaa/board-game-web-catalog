'use client';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import { Link } from '@/components';

export default function Home() {
  return (
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
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 1 }} elevation={3}>
          <Typography variant="h2" gutterBottom>
            Material UI - Next.js example using App Router in TypeScript
          </Typography>
          <Typography variant="h3" gutterBottom>
            Material UI - Next.js example using App Router in TypeScript
          </Typography>
          <Typography variant="h4" gutterBottom>
            Material UI - Next.js example using App Router in TypeScript
          </Typography>
          <Link href="/about">Go to the about page</Link>
        </Card>
      </Box>
    </Container>
  );
}
