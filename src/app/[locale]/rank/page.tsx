import { getGameList } from '@/actions';
import Rank from '@/layouts/Rank/Rank';

export default async function RankPage() {
  const gameList = await getGameList();

  return <Rank gameList={gameList} />;
}
