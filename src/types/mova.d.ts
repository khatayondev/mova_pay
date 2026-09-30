export type MoMoCurrency = "UGX" | "GHS" | "RWF" | "XOF" | "USD";

export type MoMoTransactionStatus =
  | "PENDING_AUTHORIZATION"
  | "PUSH_NOTIFICATION_SENT"
  | "SUCCESSFUL"
  | "FAILED"
  | "EXPIRED";

export interface MoMoUser {
  id: string;
  name: string;
  phone: string;
  avatarUrl?: string;
  verifiedMoMo: boolean;
  tier?: "standard" | "merchant" | "community_lead";
}

export interface SplitMember {
  user: MoMoUser;
  allocatedAmount: number;
  paidAmount: number;
  status: "PAID" | "PENDING" | "DECLINED";
  paidAt?: string;
  txReference?: string;
}

export interface SplitGroup {
  id: string;
  title: string;
  description?: string;
  category: "dinner" | "trip" | "rent" | "gift" | "event" | "project";
  totalAmount: number;
  currency: MoMoCurrency;
  creator: MoMoUser;
  members: SplitMember[];
  settled: boolean;
  createdAt: string;
  expiresAt?: string;
  qrCodeUrl?: string;
}

export interface CrowdfundTier {
  id: string;
  label: string;
  amount: number;
  description: string;
  claimedCount: number;
}

export interface CampaignGoal {
  id: string;
  title: string;
  story: string;
  category: "community" | "medical" | "startup" | "creative" | "emergency";
  targetAmount: number;
  collectedAmount: number;
  currency: MoMoCurrency;
  creator: MoMoUser;
  backerCount: number;
  verifiedOrg: boolean;
  coverImage: string;
  daysRemaining: number;
  tiers?: CrowdfundTier[];
  createdAt: string;
}

export interface Transaction {
  id: string;
  referenceId: string;
  type: "P2P_TRANSFER" | "SPLIT_CONTRIBUTION" | "FUND_PLEDGE" | "MERCHANT_CHECKOUT";
  sender: MoMoUser;
  recipient: MoMoUser;
  amount: number;
  currency: MoMoCurrency;
  status: MoMoTransactionStatus;
  note?: string;
  splitGroupId?: string;
  campaignId?: string;
  createdAt: string;
  completedAt?: string;
}

export interface MoMoPromptPayload {
  transactionId: string;
  phoneNumber: string;
  amount: number;
  currency: MoMoCurrency;
  recipientName: string;
  reference: string;
}
