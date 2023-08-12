'use client';

import { useTransition } from 'react';
import processSave from './actions';

export default function SaveButton() {
  const [isPending, startTransition] = useTransition();
  console.log('isPending:', isPending);

  const handleSave = async () => {
    startTransition(() => processSave('1'));
    console.log('SAVED');
  };

  return <button onClick={handleSave}>Save value</button>;
}
