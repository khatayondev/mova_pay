import { NextResponse } from "next/server";

export interface MoMoApiRequest {
  phoneNumber: string;
  amount: number;
  currency: string;
  recipientName: string;
  recipientHandle?: string;
  network?: string;
  note?: string;
  metadata?: Record<string, any>;
}

export interface MoMoApiResponse {
  success: boolean;
  transactionId: string;
  externalId: string;
  referenceId: string;
  amount: number;
  currency: string;
  network: string;
  status: "PENDING_AUTHORIZATION" | "SUCCESSFUL" | "FAILED";
  ussdPrompt: string;
  timestamp: string;
}

// In-memory transaction store for demo lifecycle
const simulatedTransactions = new Map<string, MoMoApiResponse>();

export async function POST(req: Request) {
  try {
    const body: MoMoApiRequest = await req.json();

    if (!body.phoneNumber || !body.amount) {
      return NextResponse.json(
        { error: "Phone number and amount are required" },
        { status: 400 }
      );
    }

    const transactionId = `MOMO-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const referenceId = `REF-MOVA-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    const network = body.network || "MTN Mobile Money";
    const currency = body.currency || "GHS";

    const newTx: MoMoApiResponse = {
      success: true,
      transactionId,
      externalId: `EXT-${Date.now()}`,
      referenceId,
      amount: body.amount,
      currency,
      network,
      status: "PENDING_AUTHORIZATION",
      ussdPrompt: `Authorize ${currency} ${body.amount.toLocaleString()} payment to ${body.recipientName} via MoMo PIN.`,
      timestamp: new Date().toISOString(),
    };

    simulatedTransactions.set(transactionId, newTx);

    return NextResponse.json(newTx);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process MoMo payment request" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const txId = searchParams.get("transactionId");

  if (!txId) {
    return NextResponse.json(
      { error: "Missing transactionId parameter" },
      { status: 400 }
    );
  }

  const tx = simulatedTransactions.get(txId);
  if (!tx) {
    // Generate fallback mock response if not in memory
    return NextResponse.json({
      success: true,
      transactionId: txId,
      status: "SUCCESSFUL",
      timestamp: new Date().toISOString(),
    });
  }

  return NextResponse.json(tx);
}

export async function PUT(req: Request) {
  try {
    const { transactionId, status } = await req.json();
    const tx = simulatedTransactions.get(transactionId);

    if (tx) {
      tx.status = status;
      simulatedTransactions.set(transactionId, tx);
      return NextResponse.json({ success: true, transaction: tx });
    }

    return NextResponse.json({
      success: true,
      transaction: { transactionId, status: status || "SUCCESSFUL" },
    });
  } catch {
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
  }
}
