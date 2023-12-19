import { CSV_COLUMNS_OPTIONS } from '@/app/[locale]/admin/_components/config';
import { Lang } from '@/types';
import { CsvColumnsHelps } from './types';

export const CSV_COLUMNS_HELPS: CsvColumnsHelps = {
  type: {
    required: true,
    values: [CSV_COLUMNS_OPTIONS.type.typeGame, '[prázdné]'],
    description: (
      <>
        GAME = řádek s hrou. <br />
        Prázdný řádek se přiřadí jako poznámka k nejbližšímu předchozímu řádku s hrou.
      </>
    ),
  },
  name: {
    required: true,
    values: ['[text]'],
    description:
      'Název, podle kterého se hra hledá na BGG. Neměl by obsahovat žádné jiné informace (edice, jazyky apod.)',
  },
  id: {
    required: false,
    values: ['[text]'],
    description: 'ID hry na BGG (lze získat z URL)',
  },
  langs: {
    required: false,
    values: Object.values(Lang),
    description: (
      <>
        Jazyková verze = krabice se hrou v daném jazyce. <br />
        Např. <code>CZ, ENG</code> = 1 krabice s českou verzí hry + 1 krabice s anglickou verzí.
      </>
    ),
  },
};
