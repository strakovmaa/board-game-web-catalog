import Admin from '@/layouts/Admin/Admin';
import { getActiveGameListRecord, getGameListRecords } from '@/actions';

export default async function DbScan() {
  const gameListRecords = await getGameListRecords();
  const activeGameListRecord = await getActiveGameListRecord();

  return <Admin gameListRecords={gameListRecords} activeGameListRecord={activeGameListRecord} />;
}
