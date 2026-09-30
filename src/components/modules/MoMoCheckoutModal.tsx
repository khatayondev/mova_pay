"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  X,
  Lock,
  ArrowRight,
  Share2,
  Copy,
  Check,
  Clock,
  Zap,
  PhoneCall,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, formatCurrency } from "@/lib/utils";

export interface MoMoPaymentDetails {
  recipientName: string;
  recipientHandle?: string;
  recipientPhone?: string;
  amount: number;
  currency?: "GHS" | "UGX" | "USD" | "RWF";
  purpose: string;
  reference?: string;
}

export interface MoMoSuccessReceipt {
  transactionId: string;
  referenceId: string;
  amount: number;
  currency: string;
  recipientName: string;
  payerPhone: string;
  network: string;
  timestamp: string;
}

interface MoMoCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: MoMoPaymentDetails;
  onSuccess?: (receipt: MoMoSuccessReceipt) => void;
}

export function MoMoCheckoutModal({
  isOpen,
  onClose,
  details,
  onSuccess,
}: MoMoCheckoutModalProps) {
  const [step, setStep] = useState<"SUMMARY" | "USSD_PROMPT" | "RECEIPT">("SUMMARY");
  const [phone, setPhone] = useState("024 819 0312");
  const [network, setNetwork] = useState("MTN Mobile Money");
  const [countdown, setCountdown] = useState(45);
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [receiptData, setReceiptData] = useState<MoMoSuccessReceipt | null>(null);

  const currency = details.currency || "GHS";

  // Networks available
  const networkOptions = [
    { id: "mtn-gh", label: "MTN MoMo (Ghana)", code: "MTN Mobile Money", primary: true },
    { id: "mtn-ug", label: "MTN MoMo (Uganda)", code: "MTN MoMo Uganda", primary: true },
    { id: "telecel", label: "Telecel Cash", code: "Telecel Cash", primary: false },
    { id: "airteltigo", label: "AirtelTigo Money", code: "AirtelTigo", primary: false },
  ];

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep("SUMMARY");
      setCountdown(45);
      setIsAuthorizing(false);
      setIsCopied(false);
    }
  }, [isOpen]);

  // Countdown timer for USSD step
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && step === "USSD_PROMPT" && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, step, countdown]);

  if (!isOpen) return null;

  // Step 1 -> Step 2: Trigger API & Launch USSD Simulation
  const handleProceedToUSSD = async () => {
    setIsAuthorizing(true);
    try {
      const res = await fetch("/api/momo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: phone,
          amount: details.amount,
          currency: currency,
          recipientName: details.recipientName,
          recipientHandle: details.recipientHandle,
          network,
          note: details.purpose,
        }),
      });

      const data = await res.json();
      setReceiptData({
        transactionId: data.transactionId || `MOMO-${Date.now().toString().slice(-6)}`,
        referenceId: data.referenceId || `MOVA-REF-${Math.floor(100000 + Math.random() * 900000)}`,
        amount: details.amount,
        currency,
        recipientName: details.recipientName,
        payerPhone: phone,
        network,
        timestamp: new Date().toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      setStep("USSD_PROMPT");
      setCountdown(45);
    } catch {
      // Fallback in case of network variance
      setReceiptData({
        transactionId: `MOMO-${Math.floor(100000 + Math.random() * 900000)}`,
        referenceId: `MOVA-REF-${Math.floor(100000 + Math.random() * 900000)}`,
        amount: details.amount,
        currency,
        recipientName: details.recipientName,
        payerPhone: phone,
        network,
        timestamp: new Date().toLocaleString("en-GB"),
      });
      setStep("USSD_PROMPT");
    } finally {
      setIsAuthorizing(false);
    }
  };

  // Step 2 -> Step 3: Trigger Approval (Demo Button)
  const handleApprovePin = () => {
    setIsAuthorizing(true);
    setTimeout(() => {
      setIsAuthorizing(false);
      setStep("RECEIPT");
      if (receiptData && onSuccess) {
        onSuccess(receiptData);
      }
    }, 1200);
  };

  const handleShareWhatsApp = () => {
    if (!receiptData) return;
    const message = `Payment Verified on Mova! 🚀\n\nPaid: ${receiptData.currency} ${receiptData.amount.toLocaleString()} to ${receiptData.recipientName}\nMoMo Ref: ${receiptData.transactionId}\nSettled via MTN MoMo Rails.\n\nMoney moves better together with Mova!`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleCopyReceipt = () => {
    if (!receiptData) return;
    const text = `Mova MoMo Receipt:\nTx ID: ${receiptData.transactionId}\nAmount: ${receiptData.currency} ${receiptData.amount.toLocaleString()}\nTo: ${receiptData.recipientName}\nStatus: VERIFIED`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-obsidian-950/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-md overflow-hidden rounded-2xl border border-obsidian-border bg-obsidian-850 shadow-brand-glow-lg flex flex-col"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-obsidian-border bg-obsidian-900/90 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand font-black text-obsidian-950 shadow-brand-glow text-xs">
              M
            </div>
            <div>
              <span className="text-xs font-bold text-crisp font-display">
                Mova MoMo Rail Simulator
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-muted-foreground hover:bg-obsidian-800 hover:text-crisp transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="grid grid-cols-3 border-b border-obsidian-border/60 bg-obsidian-900/40 text-[11px] font-semibold">
          <div
            className={cn(
              "py-2 text-center border-b-2 transition-all",
              step === "SUMMARY"
                ? "border-brand text-brand bg-brand/5"
                : "border-transparent text-muted-foreground"
            )}
          >
            1. Verification
          </div>
          <div
            className={cn(
              "py-2 text-center border-b-2 transition-all",
              step === "USSD_PROMPT"
                ? "border-brand text-brand bg-brand/5"
                : "border-transparent text-muted-foreground"
            )}
          >
            2. USSD Push
          </div>
          <div
            className={cn(
              "py-2 text-center border-b-2 transition-all",
              step === "RECEIPT"
                ? "border-emerald-400 text-emerald-400 bg-emerald-500/5"
                : "border-transparent text-muted-foreground"
            )}
          >
            3. Digital Receipt
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STATE 1: VERIFICATION & ORDER SUMMARY                                    */}
        {/* ========================================================================= */}
        {step === "SUMMARY" && (
          <div className="p-5 space-y-5">
            {/* Recipient Details & Amount Banner */}
            <div className="rounded-xl border border-brand/30 bg-obsidian-900/90 p-4 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand">
                    Goal / Payee Details
                  </span>
                  <h4 className="text-base font-bold text-crisp font-display mt-0.5">
                    {details.recipientName}
                  </h4>
                  {details.recipientHandle && (
                    <span className="text-xs text-muted-foreground font-mono">
                      {details.recipientHandle}
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-semibold text-muted-foreground">
                    Amount
                  </span>
                  <div className="text-xl font-extrabold text-brand font-display">
                    {currency} {details.amount.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-obsidian-border flex items-center justify-between text-[11px] text-muted-foreground">
                <span>Purpose: {details.purpose}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" /> Zero Surcharge
                </span>
              </div>
            </div>

            {/* Telecom Network Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-crisp">
                Select Mobile Money Carrier
              </label>
              <div className="grid grid-cols-2 gap-2">
                {networkOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setNetwork(opt.code)}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border p-2.5 text-left text-xs transition-all",
                      network === opt.code
                        ? "border-brand bg-brand/10 text-brand font-bold shadow-momo-badge"
                        : "border-obsidian-border bg-obsidian-800 text-muted-foreground hover:text-crisp hover:border-obsidian-borderElevated"
                    )}
                  >
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        opt.primary ? "bg-brand" : "bg-slate-400"
                      )}
                    />
                    <span className="truncate">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Payer Phone Input */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-crisp">Payer MoMo Phone Number</span>
                <span className="text-muted-foreground text-[11px]">e.g. 024 XXX XXXX</span>
              </div>
              <div className="relative">
                <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="024 XXX XXXX"
                  className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 py-2.5 pl-10 pr-4 text-sm font-mono font-bold text-crisp placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>

            {/* Security note */}
            <div className="rounded-lg bg-obsidian-900/60 p-2.5 border border-obsidian-border/80 flex items-center gap-2 text-[11px] text-muted-foreground">
              <Lock className="h-3.5 w-3.5 text-brand shrink-0" />
              <span>A secure USSD push will prompt on this handset for your 4-digit PIN.</span>
            </div>

            {/* Action CTA */}
            <Button
              className="w-full font-bold shadow-brand-glow text-sm py-3"
              onClick={handleProceedToUSSD}
              isLoading={isAuthorizing}
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Dispatch MoMo USSD Push ({currency} {details.amount.toLocaleString()})
            </Button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STATE 2: SIMULATED USSD PUSH PROMPT (INTERACTIVE SCREEN MOCKUP)          */}
        {/* ========================================================================= */}
        {step === "USSD_PROMPT" && (
          <div className="p-5 space-y-5">
            {/* Phone Screen Mockup */}
            <div className="relative mx-auto w-full max-w-[320px] rounded-3xl border-4 border-obsidian-borderElevated bg-black p-4 shadow-card-elevated space-y-3">
              {/* Phone Speaker & Notch */}
              <div className="mx-auto h-1.5 w-16 rounded-full bg-obsidian-700" />

              {/* Network / Carrier Header */}
              <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
                <span>{network}</span>
                <span className="text-brand font-bold">{countdown}s</span>
              </div>

              {/* Telecom USSD Pop-up Box */}
              <div className="rounded-2xl border-2 border-brand/60 bg-obsidian-900 p-4 text-center space-y-3 shadow-brand-glow">
                <div className="inline-flex rounded-full bg-brand/20 p-1.5 text-brand">
                  <Smartphone className="h-5 w-5 animate-pulse" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-wider text-brand font-display">
                    Authorize Payment
                  </h4>
                  <p className="text-xs font-medium text-crisp leading-snug">
                    Authorize payment of{" "}
                    <strong className="text-brand font-mono font-bold">
                      {currency} {details.amount.toLocaleString()}
                    </strong>{" "}
                    to <span className="underline">{details.recipientName}</span> via MoMo PIN?
                  </p>
                </div>

                {/* Simulated PIN Dots */}
                <div className="flex justify-center gap-2 pt-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-3 w-3 rounded-full border border-brand bg-brand/40 animate-pulse"
                    />
                  ))}
                </div>

                <div className="text-[10px] text-zinc-400 font-mono">
                  Ref: MOVA-{Math.floor(1000 + Math.random() * 9000)}
                </div>
              </div>

              {/* Pulsing Radar Ring Indicator */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-brand font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand animate-ping opacity-80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                <span>Awaiting user handset approval...</span>
              </div>
            </div>

            {/* Sandbox Demo Fast-Track Button */}
            <div className="rounded-xl border border-brand/30 bg-brand/10 p-3.5 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-brand">
                <Sparkles className="h-4 w-4" />
                <span>Tester / Sandbox Simulation Rail</span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Click below to instantly trigger simulated PIN approval without needing a live telecom API subscription.
              </p>
              <Button
                variant="primary"
                className="w-full font-bold shadow-brand-glow text-xs"
                onClick={handleApprovePin}
                isLoading={isAuthorizing}
                leftIcon={<CheckCircle2 className="h-4 w-4" />}
              >
                Simulate PIN Approval on Phone
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="w-full text-xs text-muted-foreground"
              onClick={() => setStep("SUMMARY")}
            >
              Back to Edit Number
            </Button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STATE 3: PAYMENT VERIFIED & DIGITAL RECEIPT                              */}
        {/* ========================================================================= */}
        {step === "RECEIPT" && receiptData && (
          <div className="p-5 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {/* Celebration Checkmark */}
            <div className="text-center space-y-2">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-obsidian-950 shadow-brand-glow-lg border-2 border-brand-hover">
                <Check className="h-9 w-9 stroke-[3]" />
                <span className="absolute -inset-1 rounded-full animate-ping bg-brand/40 opacity-50" />
              </div>
              <h3 className="text-xl font-extrabold text-crisp font-display">
                Payment Authorized!
              </h3>
              <p className="text-xs text-muted-foreground">
                Transaction verified and settled via {receiptData.network}.
              </p>
            </div>

            {/* Digital Receipt Card */}
            <div className="rounded-2xl border border-obsidian-border bg-obsidian-900/90 p-4 space-y-3 relative overflow-hidden">
              {/* Receipt Header */}
              <div className="flex justify-between items-center pb-2 border-b border-obsidian-border/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand font-display">
                  Mova Digital Receipt
                </span>
                <Badge variant="momo" size="sm">
                  Settled
                </Badge>
              </div>

              {/* Receipt Body */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount Paid:</span>
                  <span className="font-extrabold text-brand font-display text-sm">
                    {receiptData.currency} {receiptData.amount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Beneficiary:</span>
                  <span className="font-semibold text-crisp">{receiptData.recipientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payer Handset:</span>
                  <span className="font-mono text-crisp">{receiptData.payerPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">MoMo Tx ID:</span>
                  <span className="font-mono text-brand font-semibold">
                    {receiptData.transactionId}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timestamp:</span>
                  <span className="text-muted-foreground">{receiptData.timestamp}</span>
                </div>
              </div>
            </div>

            {/* 1-Tap Share to WhatsApp & Copy Actions */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleShareWhatsApp}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 text-xs transition-colors shadow-lg shadow-emerald-950/50"
              >
                <Share2 className="h-4 w-4" />
                <span>Share Receipt to WhatsApp</span>
              </button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                  onClick={handleCopyReceipt}
                  leftIcon={isCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                >
                  {isCopied ? "Copied to Clipboard!" : "Copy Receipt Details"}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1 font-bold shadow-brand-glow text-xs"
                  onClick={onClose}
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
