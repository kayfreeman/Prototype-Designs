
export enum ComplianceStatus {
  PASSED = 'PASSED',
  PENDING = 'PENDING',
  FAILED = 'FAILED',
  FLAGGED = 'FLAGGED'
}

export enum RiskLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export interface Client {
  id: string;
  name: string;
  type: 'Individual' | 'Company';
  status: ComplianceStatus;
  riskScore: number;
  riskLevel: RiskLevel;
  lastChecked: string;
  verificationSource: string;
}

export interface Transaction {
  id: string;
  clientName: string;
  amount: number;
  propertyAddress: string;
  riskEmbedding: string;
  timestamp: string;
  status: 'In Progress' | 'Completed' | 'Requires Review';
}
