import { getActiveGameListRecord, getGameListRecords } from '@/actions';
import Admin from './_components/Admin/Admin';

export default async function AdminPage() {
  const gameListRecords = await getGameListRecords();
  const activeGameListRecord = await getActiveGameListRecord();

  return <Admin gameListRecords={gameListRecords} activeGameListRecord={activeGameListRecord} />;
}
