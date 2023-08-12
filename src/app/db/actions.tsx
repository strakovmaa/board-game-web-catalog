'use server';

import { kv } from '@vercel/kv';
import { revalidatePath } from 'next/cache';

type GameList = Record<string, any>;

const GAMELIST_KEY = 'gameList';

export default async function processSave(id: string) {
  const game = {
    id,
    name: `Game ${id}`,
    category: `Category ${id}`,
  };

  const gameList = await kv.get<GameList>(GAMELIST_KEY);
  const payload = { ...gameList, [id]: game };

  kv.set(GAMELIST_KEY, payload);

  console.log('processSave');

  revalidatePath('/db');
}
