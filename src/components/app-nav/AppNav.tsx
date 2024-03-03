import { AppBar, Box, Container, Stack, Toolbar, Typography } from '@mui/material';
import { AppMenu, LangSwitch } from './components';
import { useTranslations } from 'next-intl';
import { Urls } from '@/config';
import { Link } from '../Link';
import Image from 'next/image';

export const AppNav = () => {
  const t = useTranslations();

  return (
    <AppBar position="static" sx={(theme) => ({ backgroundColor: theme.palette.secondary.dark })}>
      <Container>
        <Toolbar disableGutters>
          <Box display="flex" flexGrow={1}>
            <Link href={Urls.SEARCH} color="secondary" underline="none">
              <Stack direction="row" alignItems="center" gap={1.5} ml={-1} mr={1}>
                <Image alt="logo" width={40} height={40} src="/Logo.png" />
                <Typography sx={{ pt: 0.5 }}>{t('meta.title')}</Typography>
              </Stack>
            </Link>
          </Box>
          <LangSwitch />
          <Box ml={2} mr={-1}>
            <AppMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
