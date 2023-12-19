import { CsvColumnsOptions } from '@/app/[locale]/admin/_components/types';
import { ReactNode } from 'react';

export type CsvColumnsHelp = {
  required: boolean;
  values: string[];
  description: ReactNode | string;
};

export type CsvColumnsHelps = Record<keyof CsvColumnsOptions, CsvColumnsHelp>;
