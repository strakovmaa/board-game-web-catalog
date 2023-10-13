'use server';

import { Game } from '@/types';
import { kv } from '@vercel/kv';
import { revalidatePath } from 'next/cache';

type GameListPayload = Record<string, any>;

const GAMELIST_KEY = 'gameList';

export const getGameList = async (): Promise<Game[]> => {
  const data = await kv.get<GameListPayload>(GAMELIST_KEY);

  return Object.values(data ?? {});
};

export const deleteGameList = async () => {
  await kv.del(GAMELIST_KEY);

  revalidatePath('/admin');
};

const getGameListPayload = (gameList: Game[]): GameListPayload =>
  gameList.reduce((result, game) => ({ ...result, [game.uid]: game }), {});

export const saveGameList = async (gameList: Game[]) => {
  const payload = getGameListPayload(gameList);

  await kv.set(GAMELIST_KEY, payload);

  revalidatePath('/admin');
};
