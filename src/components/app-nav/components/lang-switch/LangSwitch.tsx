'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ToggleButton, ToggleButtonGroup, darken } from '@mui/material';
import { localeLangOptions } from './config';
import { MouseEvent } from 'react';

export function LangSwitch() {
  const locale = useLocale();
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (_e: MouseEvent<HTMLElement>, newValue: string | null) => {
    if (newValue !== null) {
      const path = pathname.startsWith(`/${locale}`) ? pathname.substring(3) : pathname;
      const url = `/${newValue}${path}?${searchParams}`;
      push(url);
    }
  };

  return (
    <ToggleButtonGroup color="secondary" value={locale} exclusive onChange={handleChange} size="small">
      {localeLangOptions.map(({ label, value }) => (
        <ToggleButton
          key={value}
          value={value}
          sx={({ palette, spacing }) => ({
            color: darken(palette.primary.contrastText, 0.3),
            borderColor: darken(palette.primary.contrastText, 0.5),
            py: spacing(0.25),
          })}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
