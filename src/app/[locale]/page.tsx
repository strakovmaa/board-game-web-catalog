import { getGameList } from '@/actions';
import Search from '@/layouts/Search/Search';

export default async function SearchPage() {
  const gameList = await getGameList();

  return <Search gameList={gameList} />;
}
