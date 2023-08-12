'use client';

import { LangSwitch } from '@/components';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <LangSwitch />
      {children}
    </>
  );
}
