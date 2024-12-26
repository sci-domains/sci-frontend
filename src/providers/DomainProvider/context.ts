import { DomainProviderContext } from '@/providers/DomainProvider/types';
import { createContext, useContext } from 'react';

export const DomainContext = createContext<DomainProviderContext | undefined>(
  undefined,
);

export const useDomain = () => {
  const context = useContext(DomainContext);
  if (!context) {
    throw new Error('useDomain must be used within a DomainProvider');
  }
  return context;
};
