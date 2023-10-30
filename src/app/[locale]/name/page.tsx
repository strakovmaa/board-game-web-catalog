import { getGameList } from '@/actions';
import Name from '@/layouts/Name/Name';

export default async function NamePage() {
  const gameList = await getGameList();

  return <Name gameList={gameList} />;
}
