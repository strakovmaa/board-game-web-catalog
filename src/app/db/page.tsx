import { kv } from '@vercel/kv';
import SaveButton from './SaveButton';
import DbManager from './DbManager';

export type DcScan = Record<string, unknown>;

export default async function Db({ params }) {
  const getDbScan = async () => {
    const result: DcScan = {};

    // scan for keys
    for await (const key of kv.scanIterator()) {
      const value = await kv.get(key);
      result[key] = value;
    }

    return result;
  };

  const dbScan = await getDbScan();

  return (
    <div>
      <h1>DB SCAN</h1>

      <SaveButton />

      <hr />
      <h2>Scan</h2>
      <DbManager dbScan={dbScan} />
    </div>
  );
}
