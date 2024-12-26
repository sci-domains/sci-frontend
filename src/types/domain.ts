export interface Domain {
  name: string;
  owner?: string;
  verifier?: {
    name: string;
    registrationDate: string;
  };
  registrationDate?: string;
}
