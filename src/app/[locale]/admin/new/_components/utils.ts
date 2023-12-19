import { camelCase, takeWhile } from 'lodash-es';
import { Game, Lang, Status } from '@/types';
import { CSV_COLUMNS_OPTIONS } from '../../_components/config';
import { CsvGame } from './types';

export const processCsvGameList = (csv: CsvGame[]) => {
  const gamelist = CSV_COLUMNS_OPTIONS.type.enabled ? mergeNotesToCsvGameList(csv) : createCsvGameList(csv);

  return gamelist.map(getGameFromCsv);
};

/**
 * Every row with empty TYPE is merged to nearest upper row with TYPE = typeGame into its `notes`
 */
export const mergeNotesToCsvGameList = (csvGames: CsvGame[]): CsvGame[] =>
  csvGames.reduce((acc: CsvGame[], csvGame: CsvGame, index) => {
    const { colName, typeGame } = CSV_COLUMNS_OPTIONS.type;
    if (csvGame[colName] === typeGame) {
      const noteRelatedToGame = takeWhile(csvGames.slice(index + 1), (i) => i[colName] !== typeGame);
      const notes = noteRelatedToGame
        ?.map((csvGame) => csvGame[CSV_COLUMNS_OPTIONS.name.colName])
        .filter((item) => !!item?.length);

      const csvGameWithNotes = {
        ...csvGame,
        notes,
      };

      return [...acc, csvGameWithNotes];
    }

    return acc;
  }, []);

export const createCsvGameList = (csvGames: CsvGame[]): CsvGame[] =>
  csvGames?.filter((csvGame) => !!csvGame[CSV_COLUMNS_OPTIONS.name.colName]?.length);

const getGameUid = (csvGame: CsvGame, langs: Lang[]): string =>
  camelCase(
    `${csvGame[CSV_COLUMNS_OPTIONS.name.colName]} ${langs.join(' ')} ${csvGame?.notes?.[0]?.substring(0, 15) ?? ''}`,
  );

const getGameFromCsv = (csvGame: CsvGame): Game => {
  const id = CSV_COLUMNS_OPTIONS.id.enabled
    ? parseInt(csvGame[CSV_COLUMNS_OPTIONS.id.colName]) || undefined
    : undefined;

  const langs = CSV_COLUMNS_OPTIONS.langs.enabled
    ? ((csvGame[CSV_COLUMNS_OPTIONS.langs.colName] as string) ?? '')
        .split(',')
        .map((lang) => lang.trim())
        .filter((lang): lang is Lang => Object.values(Lang).includes(lang as Lang))
    : [];

  return {
    uid: getGameUid(csvGame, langs),
    sourceName: csvGame[CSV_COLUMNS_OPTIONS.name.colName].toString(),
    id: id,
    langs,
    notes: csvGame.notes,
    status: Status.NEW,
  };
};
