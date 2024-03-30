import { CsvColumnsOptions } from '@/csvParser';

export const LEFT_MENU_WIDTH = 224;
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

/**
 * If you run multiple projects on one Vercel account, you can separate the databases by this prefix
 */
export const DB_PREFIX = 'DEMO_';

/**
 * On development environment, Admin is fully accessible regardless on authentication
 * Set this to `true` if you want to test real views of Admin (e.g. different states for different users)
 * On production environment, Admin always require authentication (it is not affected by this value)
 */
export const DISABLE_USER_AUTH_ON_DEVELOPMENT = true;

/**
 * Credentials authorization (username + password) is the only provider that works on Vercel preview
 * It is always enabled on development and preview environment
 * You can disable it on production for security reasons
 */
export const DISABLE_CREDENTIALS_ON_PRODUCTION = false;

/**
 * Column options for parsing CSV
 * @param enabled if true, column will be parsed
 * @param colName title of the column in CSV header line
 * @param typeGame text defining that the row is of type `game` (and not `note`)
 */
export const CSV_COLUMNS_OPTIONS: CsvColumnsOptions = {
  type: {
    enabled: false,
    colName: 'Hra / Poznámka',
    typeGame: 'GAME',
  },
  name: {
    colName: 'Název hry',
  },
  id: {
    enabled: true,
    colName: 'BGG ID',
  },
  langs: {
    enabled: true,
    colName: 'Jazyky',
    langIrrelevant: 'nerozhoduje',
  },
  location: {
    enabled: true,
    colName: 'Umístění',
  },
  yearpublished: {
    enabled: true,
    colName: 'Rok vydání',
  },
  image: {
    enabled: true,
    colName: 'Obrázek',
  },
  playingtime: {
    enabled: true,
    colName: 'Herní doba',
  },
  minplayers: {
    enabled: true,
    colName: 'Počet hráčů od',
  },
  maxplayers: {
    enabled: true,
    colName: 'Počet hráčů do',
  },
};
