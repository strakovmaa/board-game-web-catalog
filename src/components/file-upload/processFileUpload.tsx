'use client';

import { ChangeEvent } from 'react';

export const processFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
  const input = event?.target;
  const file = input?.files?.[0];

  if (!input || !file) return '';
  input.value = '';

  const data = await file.text();

  return data;
};
