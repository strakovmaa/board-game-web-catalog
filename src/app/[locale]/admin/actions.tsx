'use server';

import { kv } from '@vercel/kv';
import { revalidatePath } from 'next/cache';

type GameList = Record<string, any>;

const GAMELIST_KEY = 'gameList';

export const processSave = async (id: string) => {
  const game = {
    id,
    name: `Game ${id}`,
    category: `Category ${id}`,
  };

  const gameList = await kv.get<GameList>(GAMELIST_KEY);
  const payload = { ...gameList, [id]: game };

  await kv.set(GAMELIST_KEY, payload);

  revalidatePath('/admin');
};

export const processDelete = async () => {
  await kv.del(GAMELIST_KEY);

  revalidatePath('/admin');
};
