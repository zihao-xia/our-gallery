'use client';
import { useState } from 'react';
import { Button } from '@nextui-org/react';

export default function Home() {
  const [error, setError] = useState(false);
  return <>{error ? Error() : <Button onClick={() => setError(true)}>get error</Button>}</>;
}
