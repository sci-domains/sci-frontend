import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.scss';

import { unageo } from '@/lib/fonts';
export const metadata: Metadata = {
  title: 'SCI',
  description: 'See you on mainnet',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(unageo.className)}>{children}</body>
    </html>
  );
}
