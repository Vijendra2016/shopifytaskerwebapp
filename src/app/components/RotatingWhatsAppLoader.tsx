'use client';

import dynamic from 'next/dynamic';

const RotatingWhatsApp = dynamic(
  () => import('./RotatingWhatsApp'),
  { ssr: false }
);

export default function RotatingWhatsAppLoader() {
  return <RotatingWhatsApp />;
}
