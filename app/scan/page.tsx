'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ScanRedirect() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = 'https://www.google.com/search?q=RGlitz+Technologies';
  }, []);

  return <p>Redirecting to Google...</p>;
}
