import { camelCase } from 'lodash-es';
import { Game, Lang, Status } from '@/types';
import { CsvColumnsOptions, CsvGame } from './types';

const getGameUid = (csvGame: CsvGame, langs: Lang[], options: CsvColumnsOptions): string =>
  camelCase(`${csvGame[options.name.colName]} ${langs.join(' ')} ${csvGame?.notes?.[0]?.substring(0, 15) ?? ''}`);

export const getGameFromCsv = (csvGame: CsvGame, options: CsvColumnsOptions): Game => {
  const id = options.id.enabled ? parseInt(csvGame[options.id.colName]) || undefined : undefined;

  const langs = options.langs.enabled
    ? ((csvGame[options.langs.colName] as string) ?? '')
        .split(',')
        .map((lang) => lang.trim())
        .filter((lang): lang is Lang => Object.values(Lang).includes(lang as Lang))
    : [];

  return {
    uid: getGameUid(csvGame, langs, options),
    sourceName: csvGame[options.name.colName].toString(),
    id: id,
    langs,
    notes: csvGame.notes,
    status: Status.NEW,
  };
};
