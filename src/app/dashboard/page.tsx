"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shell } from "@/components/layout/Shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProgressGauge } from "@/components/ui/progress-gauge";
import { AvatarGroup, AvatarSingle } from "@/components/ui/avatar-group";
import { MoMoCheckoutModal } from "@/components/modules/MoMoCheckoutModal";
import { formatCurrency, formatMoMoPhone } from "@/lib/utils";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Receipt,
  PiggyBank,
  Store,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  TrendingUp,
  Plus,
  Send,
  Smartphone,
  Eye,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const [balance] = useState(4850);
  const [currency] = useState("GHS");
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  // Recent transactions
  const transactions = [
    {
      id: "tx-1",
      title: "Weekend Trip to Ada Split",
      category: "Group Split",
      amount: -200,
      timestamp: "Today, 2:15 PM",
      status: "SETTLED",
      handle: "@sadick",
      type: "DEBIT",
    },
    {
      id: "tx-2",
      title: "Ama Kitchen Group Lunch",
      category: "Merchant",
      amount: -25,
      timestamp: "Today, 12:45 PM",
      status: "SETTLED",
      handle: "@amakitchen",
      type: "DEBIT",
    },
    {
      id: "tx-3",
      title: "Sarah's Bakery Crowdfund Pledge",
      category: "Crowdfund",
      amount: -100,
      timestamp: "Yesterday, 6:30 PM",
      status: "SETTLED",
      handle: "@sarahbakes",
      type: "DEBIT",
    },
    {
      id: "tx-4",
      title: "Transfer from Kofi Owusu",
      category: "P2P Transfer",
      amount: 450,
      timestamp: "Sep 28, 4:10 PM",
      status: "SETTLED",
      handle: "@kofi_tech",
      type: "CREDIT",
    },
  ];

  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 max-w-6xl space-y-8">
        {/* ========================================================================= */}
        {/* 1. TOP BALANCE BANNER & QUICK ACTIONS                                    */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden rounded-3xl border border-brand/40 bg-gradient-to-br from-obsidian-850 via-obsidian-900 to-obsidian-950 p-6 sm:p-8 shadow-brand-glow">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-brand/10 blur-[80px] pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="momo" size="sm">
                  MTN Mobile Money Primary
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">
                  +256 772 120 488 • @gabriel
                </span>
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                Total Available MoMo Liquidity
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-brand font-display tracking-tight">
                  {currency} {balance.toLocaleString()}.00
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="h-3.5 w-3.5" /> +GHS 450 this week
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Link href="/pay">
                <Button
                  size="default"
                  variant="primary"
                  className="font-bold shadow-brand-glow text-xs"
                  leftIcon={<Send className="h-4 w-4" />}
                >
                  Send MoMo
                </Button>
              </Link>
              <Link href="/split">
                <Button
                  size="default"
                  variant="outline"
                  className="text-xs"
                  leftIcon={<Receipt className="h-4 w-4 text-brand" />}
                >
                  New Split
                </Button>
              </Link>
              <Link href="/fund">
                <Button
                  size="default"
                  variant="outline"
                  className="text-xs"
                  leftIcon={<PiggyBank className="h-4 w-4 text-brand" />}
                >
                  Crowdfund
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. DUAL COLUMNS: ACTIVE POOLS & LIVE ACTIVITY                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Active Connected Groups & Pools (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Active Group Split Card */}
            <Card className="glass-card border-obsidian-border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand border border-brand/30">
                    <Receipt className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-crisp font-display">
                      Weekend Trip to Ada
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      4 members • GHS 200/person
                    </span>
                  </div>
                </div>

                <Badge variant="momo" size="sm">
                  3/4 Settled
                </Badge>
              </div>

              <div className="space-y-1.5">
                <ProgressGauge value={600} max={800} size="md" showPercent={false} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span className="text-brand font-semibold">GHS 600 collected</span>
                  <span>Target: GHS 800</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-obsidian-border/70">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Members:</span>
                  <AvatarGroup
                    avatars={[
                      { id: "1", name: "Gabriel", status: "paid" },
                      { id: "2", name: "Sadick", status: "paid" },
                      { id: "3", name: "Kofi", status: "paid" },
                      { id: "4", name: "Abena", status: "pending" },
                    ]}
                    size="sm"
                    showStatusRings
                  />
                </div>
                <Link href="/split">
                  <Button variant="ghost" size="sm" className="text-xs hover:text-brand" rightIcon={<ArrowRight className="h-3 w-3" />}>
                    Manage Split
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Backed Crowdfund Card */}
            <Card className="glass-card border-obsidian-border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand border border-brand/30">
                    <PiggyBank className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-crisp font-display">
                      Help Sarah Launch Her Bakery
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      Community Goal by @sarahbakes
                    </span>
                  </div>
                </div>

                <Badge variant="brand" size="sm">
                  83% Funded
                </Badge>
              </div>

              <div className="space-y-1.5">
                <ProgressGauge value={12500} max={15000} size="md" showPercent={false} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span className="text-brand font-semibold">GHS 12,500 raised</span>
                  <span>Goal: GHS 15,000</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-obsidian-border/70">
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> You pledged GHS 250
                </span>
                <Link href="/fund/sarah-bakery">
                  <Button variant="ghost" size="sm" className="text-xs hover:text-brand" rightIcon={<ArrowRight className="h-3 w-3" />}>
                    View Goal
                  </Button>
                </Link>
              </div>
            </Card>
          </div>

          {/* Right Column: Live MoMo Transaction Stream (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-crisp font-display">
                Recent MoMo Stream
              </h3>
              <Badge variant="obsidian" size="sm">
                Live Rails
              </Badge>
            </div>

            <div className="space-y-2.5">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-obsidian-border bg-obsidian-850 hover:border-obsidian-borderElevated transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border text-xs ${
                        tx.type === "CREDIT"
                          ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                          : "bg-obsidian-800 border-obsidian-border text-crisp"
                      }`}
                    >
                      {tx.type === "CREDIT" ? (
                        <ArrowDownLeft className="h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-brand" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-crisp block">{tx.title}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {tx.timestamp} • {tx.handle}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-xs font-bold font-mono font-display ${
                        tx.type === "CREDIT" ? "text-emerald-400" : "text-crisp"
                      }`}
                    >
                      {tx.type === "CREDIT" ? "+" : ""}
                      {currency} {Math.abs(tx.amount)}
                    </span>
                    <span className="text-[10px] text-muted-foreground block font-mono">
                      MoMo Settled
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Merchant Hub Banner */}
            <div className="rounded-2xl border border-brand/30 bg-brand/5 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Store className="h-4 w-4 text-brand" />
                <span className="text-xs font-bold text-brand">
                  Managing Campus Food or Events?
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Switch to the Merchant Hub to manage batch lunch orders, export kitchen tickets, and generate table QR codes.
              </p>
              <Link href="/merchant" className="block pt-1">
                <Button size="sm" variant="outline" className="w-full text-xs border-brand/40 text-brand">
                  Open Merchant Hub (@amakitchen)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
