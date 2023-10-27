import { AppBar, Box, Container, Stack, Toolbar, Typography } from '@mui/material';
import { AppMenu, LangSwitch } from './components';
import { useTranslations } from 'next-intl';
import { Urls } from '@/config';
import { Link } from '../Link';

export const AppNav = () => {
  const t = useTranslations();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#292112' }}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link href={Urls.SEARCH} color="secondary" underline="none" flexGrow={1}>
            <Stack direction="row" alignItems="center" gap={1} ml={-1} mr={1}>
              <img width={40} height={40} src="/Mystica_Facebook_400x400_150dpi-300x300.png" />
              <Typography sx={{ pt: 0.5 }}>{t('meta.title')}</Typography>
            </Stack>
          </Link>
          <LangSwitch />
          <Box ml={2} mr={-1}>
            <AppMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
