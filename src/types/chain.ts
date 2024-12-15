export interface Chain {
  chainId: number;
  chainName: string;
  icon?: string;
}

export const chains: Chain[] = [
  {
    chainId: 2,
    chainName: 'Ethereum',
    icon: '/images/icons/chains/ethereum.svg',
  },
  {
    chainId: 4,
    chainName: 'Polygon',
    icon: '/images/icons/chains/polygon.svg',
  },
];
