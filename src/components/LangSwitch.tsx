'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';

export function LangSwitch() {
  const locale = useLocale();
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const path = pathname.startsWith(`/${locale}`) ? pathname.substring(3) : pathname;
    const url = `/${target.value}${path}?${searchParams}`;
    push(url);
  };

  return (
    <select onChange={handleChange} value={locale}>
      <option value="cs">CZ</option>
      <option value="en">EN</option>
    </select>
  );
}
