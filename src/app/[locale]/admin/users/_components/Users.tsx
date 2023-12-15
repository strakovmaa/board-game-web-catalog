'use client';

import { UserAuthRecord } from '../../_components/userAuth';
import { UserAuthRecords } from './components';

type Props = {
  userAuthRecords: UserAuthRecord[];
};

export const Users = ({ userAuthRecords }: Props) => <UserAuthRecords userAuthRecords={userAuthRecords} />;
