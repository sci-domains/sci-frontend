import { Domain } from '@/types/domain';

export enum DomainStatus {
  NOT_VERIFIED = 'NOT_VERIFIED',
  NOT_REGISTERED = 'NOT_REGISTERED',
  REGISTERED_NO_CONTRACTS = 'REGISTERED_NO_CONTRACTS',
  REGISTERED_WITH_CONTRACTS = 'REGISTERED_WITH_CONTRACTS',
}

interface ProviderState {
  data: Domain | null;
  isLoading: boolean;
  error: string | null;
}

export interface DomainProviderContext {
  state: ProviderState;
  loadDomain: (domainName: string) => Promise<void>;
  getDomainStatus: () => DomainStatus;
  registerDomain: () => Promise<void>;
  isOwner: boolean;
  canRegister: boolean;
}
