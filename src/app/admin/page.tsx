import { kv } from '@vercel/kv';
import SaveButton from './SaveButton';
import Admin, { DbScanType } from '@/layouts/Admin/Admin';

export default async function DbScan({ params }) {
  const getDbScan = async () => {
    const result: DbScanType = {};

    // scan for keys
    for await (const key of kv.scanIterator()) {
      const value = await kv.get(key);
      result[key] = value;
    }

    return result;
  };

  const dbScan = await getDbScan();

  return (
    <Admin dbScan={dbScan}>
      <SaveButton />
    </Admin>
  );
}
