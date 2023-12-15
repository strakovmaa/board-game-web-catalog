import { getUserAuthRecords } from '@/actions/userAuth';
import { Users } from './_components';

export default async function UsersPage() {
  const userAuthRecords = await getUserAuthRecords();

  return <Users userAuthRecords={userAuthRecords} />;
}
