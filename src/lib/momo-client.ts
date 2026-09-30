import { MoMoCurrency, MoMoTransactionStatus, Transaction } from "@/types/mova";

/**
 * Simulated MTN MoMo API Client (Sandbox & Direct USSD Push Rails)
 */
export interface MoMoRequestToPayParams {
  amount: number;
  currency: MoMoCurrency;
  payerPhone: string;
  payeePhone: string;
  externalId: string;
  payerMessage: string;
  payeeNote: string;
}

export interface MoMoPaymentResponse {
  referenceId: string;
  status: MoMoTransactionStatus;
  message: string;
  timestamp: string;
}

export class MoMoClient {
  private static instance: MoMoClient;

  private constructor() {}

  public static getInstance(): MoMoClient {
    if (!MoMoClient.instance) {
      MoMoClient.instance = new MoMoClient();
    }
    return MoMoClient.instance;
  }

  /**
   * Initiates a MoMo USSD Push prompt to the user's mobile device
   */
  async requestToPay(params: MoMoRequestToPayParams): Promise<MoMoPaymentResponse> {
    const referenceId = `MOMO-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    // Simulate API network latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      referenceId,
      status: "PENDING_AUTHORIZATION",
      message: `USSD push prompt dispatched to ${params.payerPhone}. Approve with MoMo PIN.`,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Polls or checks status of a simulated MoMo transaction
   */
  async checkTransactionStatus(referenceId: string): Promise<MoMoTransactionStatus> {
    await new Promise((resolve) => setTimeout(resolve, 600));
    // Simulate high success rate
    return "SUCCESSFUL";
  }
}

export const momoClient = MoMoClient.getInstance();
