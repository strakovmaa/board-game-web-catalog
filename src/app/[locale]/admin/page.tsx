import { kv } from '@vercel/kv';
import Admin, { DbScanType } from '@/layouts/Admin/Admin';
import Buttons from './Buttons';

export default async function DbScan() {
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
      <Buttons />
    </Admin>
  );
}
