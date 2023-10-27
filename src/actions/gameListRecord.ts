'use server';

import { Game } from '@/types';
import { kv } from '@vercel/kv';
import { revalidatePath } from 'next/cache';
import { GameListRecord, GameListRecordStatus } from './types';
import { GAMELIST_RECORDS_KEY } from './config';

export const getGameListRecords = async (): Promise<GameListRecord[]> => await kv.zrange(GAMELIST_RECORDS_KEY, 0, -1);

export const deleteGameListRecords = async () => {
  await kv.del(GAMELIST_RECORDS_KEY);

  revalidatePath('/admin');
};

export const createGameListRecord = async (gameList: Game[]): Promise<{ recordId: number }> => {
  const recordId = Date.now();

  const gameListRecord: GameListRecord = {
    recordId,
    status: GameListRecordStatus.INCOMPLETED,
    gameList,
  };

  await kv.zadd<GameListRecord>(GAMELIST_RECORDS_KEY, { nx: true }, { score: recordId, member: gameListRecord });

  revalidatePath('/admin');

  return { recordId };
};

export const updateGameListRecord = async (record: GameListRecord, gameList: Game[]) => {
  const gameListRecord: GameListRecord = {
    ...record,
    gameList,
  };

  await kv.zremrangebyscore(GAMELIST_RECORDS_KEY, record.recordId, record.recordId);
  await kv.zadd<GameListRecord>(GAMELIST_RECORDS_KEY, { score: record.recordId, member: gameListRecord });

  revalidatePath('/admin');
};

export const deleteGameListRecord = async (recordId: number) => {
  await kv.zremrangebyscore(GAMELIST_RECORDS_KEY, recordId, recordId);

  revalidatePath('/admin');
};
