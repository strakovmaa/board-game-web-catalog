'use client';

import { Box, Container, Tabs } from '@mui/material';
import { usePathname } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';
import { LinkTab } from './components';
import { APP_TABS } from './config';
import { useTranslations } from 'next-intl';

export function AppTabs() {
  const t = useTranslations();
  const pathname = usePathname();

  const defaultTab = APP_TABS.findIndex(({ url }) => url === pathname);
  const [tab, setTab] = useState(defaultTab);

  const handleTabChange = (_e: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box sx={(theme) => ({ backgroundColor: theme.palette.secondary.light })}>
      <Container>
        <Box sx={{ borderBottom: 1, borderColor: 'rgba(0, 0, 0, 0.23)' }}>
          <Tabs value={tab} onChange={handleTabChange} textColor="secondary" variant="scrollable">
            {APP_TABS.map(({ url, label }) => (
              <LinkTab key={url} label={t(label)} href={url} />
            ))}
          </Tabs>
        </Box>
      </Container>
    </Box>
  );
}
