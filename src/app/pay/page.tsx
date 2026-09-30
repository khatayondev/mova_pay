"use client";

import React, { useState } from "react";
import { Shell } from "@/components/layout/Shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AvatarSingle } from "@/components/ui/avatar-group";
import { MoMoCheckoutModal, MoMoSuccessReceipt } from "@/components/modules/MoMoCheckoutModal";
import { formatCurrency, formatMoMoPhone } from "@/lib/utils";
import {
  Send,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  ArrowUpRight,
  ArrowDownLeft,
  Search,
  Filter,
  Users,
} from "lucide-react";

export default function PayPage() {
  const [recipient, setRecipient] = useState("@sadick");
  const [phone, setPhone] = useState("055 491 8832");
  const [amount, setAmount] = useState<number>(50);
  const [currency, setCurrency] = useState<"GHS" | "UGX" | "USD">("GHS");
  const [note, setNote] = useState("Lunch settlement at East Legon");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const quickContacts = [
    { name: "Sadick Abubakar", handle: "@sadick", phone: "055 491 8832", avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
    { name: "Abena Mensah", handle: "@abena_m", phone: "020 812 4040", avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" },
    { name: "Kofi Owusu", handle: "@kofi_tech", phone: "027 910 1122", avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
    { name: "Sarah Nalwanga", handle: "@sarahbakes", phone: "024 819 0312", avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
    { name: "Ama Kitchen", handle: "@amakitchen", phone: "024 819 0312", avatarUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=100&q=80" },
  ];

  const [activities, setActivities] = useState([
    {
      id: "act-1",
      title: "Payment to Sadick Abubakar",
      handle: "@sadick",
      amount: -50,
      currency: "GHS",
      type: "DEBIT",
      status: "SETTLED",
      timestamp: "Today, 10:14 AM",
      category: "P2P",
    },
    {
      id: "act-2",
      title: "Weekend Trip to Ada Share",
      handle: "@gabriel",
      amount: -200,
      currency: "GHS",
      type: "DEBIT",
      status: "SETTLED",
      timestamp: "Yesterday, 3:45 PM",
      category: "Split",
    },
    {
      id: "act-3",
      title: "Received from Abena Mensah",
      handle: "@abena_m",
      amount: 150,
      currency: "GHS",
      type: "CREDIT",
      status: "SETTLED",
      timestamp: "Sep 27, 2:10 PM",
      category: "P2P",
    },
  ]);

  const handleSelectContact = (c: typeof quickContacts[0]) => {
    setRecipient(c.handle);
    setPhone(c.phone);
  };

  const handleLaunchPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount <= 0) return;
    setIsModalOpen(true);
  };

  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 max-w-6xl space-y-10">
        <div className="border-b border-obsidian-border pb-6">
          <div className="inline-flex mb-2">
            <Badge variant="brand" size="sm" withPulseRing>
              <Sparkles className="h-3 w-3 mr-1" />
              Direct MoMo Push Rails
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-crisp font-display tracking-tight">
            Mova Pay & Activity Stream
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
            Instant peer-to-peer transfers with zero intermediary delays. Handset prompts dispatched directly through MTN MoMo sandbox and live networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: P2P Pay Form (6 Cols) */}
          <div className="lg:col-span-6 space-y-5">
            <Card className="glass-card border-obsidian-border p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand border border-brand/30">
                    <Send className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-crisp font-display">
                      Send Instant MoMo
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Zero surcharge peer-to-peer rail
                    </p>
                  </div>
                </div>
                <Badge variant="momo" size="sm">
                  Active
                </Badge>
              </div>

              {/* Quick Contacts */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                  Quick Select Recipient:
                </span>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {quickContacts.map((c) => (
                    <button
                      key={c.handle}
                      type="button"
                      onClick={() => handleSelectContact(c)}
                      className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-all shrink-0 ${
                        recipient === c.handle
                          ? "border-brand bg-brand/15 text-brand font-bold"
                          : "border-obsidian-border bg-obsidian-850 text-muted-foreground hover:text-crisp"
                      }`}
                    >
                      <AvatarSingle name={c.name} avatarUrl={c.avatarUrl} size="sm" />
                      <span>{c.handle}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleLaunchPayment} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-crisp">Recipient Handle</label>
                    <input
                      type="text"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      placeholder="@handle"
                      className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 p-2.5 text-xs text-crisp focus:border-brand focus:outline-none"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-crisp">MoMo Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="024 XXX XXXX"
                      className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 p-2.5 text-xs font-mono text-crisp focus:border-brand focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-crisp">Transfer Amount</label>
                  <div className="relative">
                    <div className="absolute left-2.5 top-1/2 -translate-y-1/2">
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value as any)}
                        className="bg-transparent text-xs font-bold text-brand focus:outline-none cursor-pointer pr-1"
                      >
                        <option value="GHS" className="bg-obsidian-850">GHS</option>
                        <option value="UGX" className="bg-obsidian-850">UGX</option>
                        <option value="USD" className="bg-obsidian-850">USD</option>
                      </select>
                    </div>
                    <input
                      type="number"
                      value={amount || ""}
                      onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                      placeholder="50"
                      className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 py-2.5 pl-16 pr-4 text-base font-mono font-bold text-crisp focus:border-brand focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-crisp">Transfer Note (Optional)</label>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="e.g. Lunch refund, Groceries"
                    className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 p-2.5 text-xs text-crisp focus:border-brand focus:outline-none"
                  />
                </div>

                <div className="rounded-xl border border-brand/20 bg-brand/5 p-3 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
                  <span>Prompt is sent via USSD push directly to the recipient's telecom wallet.</span>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  className="w-full font-bold shadow-brand-glow text-xs py-3"
                  rightIcon={<Zap className="h-4 w-4" />}
                >
                  Send {currency} {amount} via MoMo Push
                </Button>
              </form>
            </Card>
          </div>

          {/* Right Column: Live Payment Activity (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-crisp font-display">
                  Live Payment Activity
                </h3>
                <p className="text-xs text-muted-foreground">
                  Audited transaction ledger with instant verification.
                </p>
              </div>
              <Badge variant="obsidian" size="sm">
                Real-Time
              </Badge>
            </div>

            <div className="space-y-3">
              {activities.map((act) => (
                <Card
                  key={act.id}
                  className="border-obsidian-border bg-obsidian-850 p-4 transition-all hover:border-obsidian-borderElevated"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                          act.type === "CREDIT"
                            ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                            : "bg-obsidian-800 border-obsidian-border text-brand"
                        }`}
                      >
                        {act.type === "CREDIT" ? (
                          <ArrowDownLeft className="h-5 w-5" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-crisp block">{act.title}</span>
                        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mt-0.5">
                          <span className="font-mono">{act.handle}</span>
                          <span>•</span>
                          <span>{act.timestamp}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span
                        className={`text-sm font-bold font-mono font-display block ${
                          act.type === "CREDIT" ? "text-emerald-400" : "text-crisp"
                        }`}
                      >
                        {act.type === "CREDIT" ? "+" : "-"}
                        {act.currency} {Math.abs(act.amount)}
                      </span>
                      <Badge variant="momo" size="sm" className="mt-1 text-[10px]">
                        Settled
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Integrated MoMo Simulator Modal */}
        <MoMoCheckoutModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          details={{
            recipientName: recipient,
            recipientHandle: recipient,
            recipientPhone: phone,
            amount,
            currency,
            purpose: note || "Mova P2P Transfer",
          }}
          onSuccess={(receipt: MoMoSuccessReceipt) => {
            const newAct = {
              id: receipt.transactionId,
              title: `Payment to ${recipient}`,
              handle: recipient,
              amount: -receipt.amount,
              currency: receipt.currency,
              type: "DEBIT" as const,
              status: "SETTLED",
              timestamp: "Just now",
              category: "P2P",
            };
            setActivities([newAct, ...activities]);
          }}
        />
      </div>
    </Shell>
  );
}
