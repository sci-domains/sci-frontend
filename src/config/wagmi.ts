import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID');
}

const rpcUrls = {
  mainnet: process.env.NEXT_PUBLIC_RPC_MAINNET,
  sepolia: process.env.NEXT_PUBLIC_RPC_SEPOLIA,
};

// Chain configuration
export const chains = [mainnet, sepolia];

// Wagmi config
export const config = createConfig({
  chains: [mainnet, sepolia] as const,
  transports: {
    [mainnet.id]: http(rpcUrls.mainnet),
    [sepolia.id]: http(rpcUrls.sepolia),
  },
  connectors: [
    metaMask(),
    walletConnect({
      projectId,
      showQrModal: true,
      metadata: {
        name: 'Your App Name',
        description: 'Your app description',
        url: 'https://youapp.com', // your app's url
        icons: ['https://youapp.com/icon.png'], // your app's icon
      },
    }),
    injected({
      shimDisconnect: true,
    }),
  ],
});
