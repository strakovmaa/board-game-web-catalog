'use server';

import { kv } from '@vercel/kv';
import { GameListRecord } from './types';
import { GAMELIST_RECORDS_KEY } from './config';
import { getActiveGameListRecord } from './activeGameListRecord';
import { Game } from '@/types';

export const getGameList = async (): Promise<Game[]> => {
  const activeGameListRecord = await getActiveGameListRecord();

  const [_key, results] = await kv.zscan(GAMELIST_RECORDS_KEY, 0, {
    match: `*${activeGameListRecord}*`,
  });

  const gameList = (results[0] as unknown as GameListRecord)?.gameList;

  return gameList;
};
