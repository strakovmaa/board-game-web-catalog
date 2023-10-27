'use server';

import { kv } from '@vercel/kv';
import { revalidatePath } from 'next/cache';
import { ACTIVE_GAMELIST_RECORD_KEY } from './config';

export const getActiveGameListRecord = async () => {
  const activeId = await kv.get<string | null>(ACTIVE_GAMELIST_RECORD_KEY);

  return activeId ? parseInt(activeId) : undefined;
};

export const setActiveGameListRecord = async (recordId: number) => {
  await kv.set(ACTIVE_GAMELIST_RECORD_KEY, recordId);

  revalidatePath('/admin');
};
