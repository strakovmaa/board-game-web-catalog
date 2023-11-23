import { AppBar, Box, Container, Link, Stack, Toolbar, Typography } from '@mui/material';
import { Urls } from '@/config';

export const AppNav = () => (
  <AppBar position="static">
    <Container>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Link href={Urls.SEARCH} color="white" underline="none">
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography sx={{ pt: 0.5 }}>Administrace</Typography>
          </Stack>
        </Link>
        <Box ml={2} mr={-1}>
          Přihlášení
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
