'use client';

import ReactJson from 'react-json-view';
import { DcScan } from './page';

type Props = {
  dbScan: DcScan;
};

export default function DbManager({ dbScan }: Props) {
  return <ReactJson src={dbScan} theme="pop" />;
}
