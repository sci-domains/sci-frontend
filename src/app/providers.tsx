'use client';

import { config } from '@/config/wagmi';
import { WagmiProvider } from 'wagmi';

export function Providers({ children }: { children: React.ReactNode }) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}
