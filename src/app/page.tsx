"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProgressGauge } from "@/components/ui/progress-gauge";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  Receipt,
  Sparkles,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function Home() {
  const [splitAmount, setSplitAmount] = useState(850000);
  const [totalGoal] = useState(1200000);
  const [isSimulating, setIsSimulating] = useState(false);

  const sampleMembers = [
    {
      id: "1",
      name: "Brian Mukasa",
      status: "paid" as const,
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    {
      id: "2",
      name: "Sarah Nalwanga",
      status: "paid" as const,
      avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
    },
    {
      id: "3",
      name: "David Otim",
      status: "paid" as const,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    },
    {
      id: "4",
      name: "Grace Kigozi",
      status: "pending" as const,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    },
    {
      id: "5",
      name: "Aisha Nassolo",
      status: "pending" as const,
      initials: "AN",
    },
    {
      id: "6",
      name: "Timothy Kato",
      status: "pending" as const,
      initials: "TK",
    },
  ];

  const handleSimulatePayment = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setSplitAmount((prev) => Math.min(prev + 150000, totalGoal));
      setIsSimulating(false);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-obsidian bg-grid-subtle overflow-x-hidden selection:bg-brand selection:text-obsidian-950">
      {/* Background Hero Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-brand/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header / Brand Bar */}
      <header className="sticky top-0 z-40 border-b border-obsidian-border/80 bg-obsidian/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand font-black text-obsidian-950 shadow-brand-glow">
              <span className="text-xl tracking-tighter">M</span>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-crisp font-display">
                Mova
              </span>
              <span className="ml-2 hidden text-xs text-brand/90 font-medium sm:inline-block">
                Powered by MTN MoMo
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="momo" size="sm" withPulseRing>
              MTN MoMo Rail Active
            </Badge>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button size="sm" className="font-semibold shadow-brand-glow">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Pill Badge */}
          <div className="inline-flex mb-6">
            <Badge variant="brand" size="lg" withPulseRing>
              <Sparkles className="h-3.5 w-3.5 text-brand mr-1" />
              The Social Layer For Mobile Money
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl font-display text-crisp">
            Money moves <br />
            <span className="relative inline-block text-brand yellow-neon-glow">
              better together
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Eliminate WhatsApp screenshot chaos, endless chasing, and manual spreadsheets.
            Mova turns <strong className="text-crisp font-semibold">MTN Mobile Money</strong> into an interconnected, real-time social payment engine.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto shadow-brand-glow text-base font-bold"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              onClick={handleSimulatePayment}
              isLoading={isSimulating}
            >
              Simulate MoMo Split
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base"
              leftIcon={<Smartphone className="h-5 w-5 text-brand" />}
            >
              View MoMo USSD Rails
            </Button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-muted-foreground border-y border-obsidian-border/60 py-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" />
              <span>Direct MoMo API Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-brand" />
              <span>Instant USSD Push Settlement</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand" />
              <span>Zero WhatsApp Screenshots</span>
            </div>
          </div>
        </div>

        {/* Live UI Components Showcase & Interactive Pitch Card */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Live Group Split Card */}
          <div className="lg:col-span-7">
            <Card className="glass-card border-brand/30 relative overflow-hidden shadow-card-elevated">
              <div className="absolute top-0 right-0 p-4">
                <Badge variant="success" size="sm" withPulseRing>
                  Active Group
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand uppercase tracking-wider">
                  <Receipt className="h-4 w-4" />
                  Mova Split Engine
                </div>
                <CardTitle className="text-2xl font-bold mt-1">
                  Entebbe Weekend Villa & BBQ
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  6 friends sharing accommodation and grocery costs via direct MoMo push.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 pt-2">
                {/* Metric Summary Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-obsidian-900/90 border border-obsidian-border">
                  <div>
                    <span className="text-[11px] text-muted-foreground uppercase font-medium">
                      Collected
                    </span>
                    <p className="text-xl font-bold text-brand font-display">
                      {formatCurrency(splitAmount, "UGX")}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] text-muted-foreground uppercase font-medium">
                      Target
                    </span>
                    <p className="text-xl font-bold text-crisp font-display">
                      {formatCurrency(totalGoal, "UGX")}
                    </p>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex flex-col justify-center">
                    <span className="text-[11px] text-muted-foreground uppercase font-medium">
                      Status
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      4 of 6 Settled
                    </span>
                  </div>
                </div>

                {/* Progress Gauges Showcase */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-crisp">Live Settlement Gauge</span>
                    <span className="text-brand font-bold">
                      {Math.round((splitAmount / totalGoal) * 100)}% Funded
                    </span>
                  </div>
                  <ProgressGauge
                    value={splitAmount}
                    max={totalGoal}
                    size="lg"
                    showPercent={false}
                  />
                </div>

                {/* Avatar Group Component Demo */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-obsidian-border/70">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground block mb-1">
                      Split Participants (6 Members)
                    </span>
                    <AvatarGroup
                      avatars={sampleMembers}
                      maxVisible={4}
                      size="md"
                      showStatusRings
                    />
                  </div>

                  <Button
                    size="sm"
                    variant="primary"
                    onClick={handleSimulatePayment}
                    isLoading={isSimulating}
                    leftIcon={<Zap className="h-4 w-4" />}
                  >
                    Send MoMo Prompt (+150k)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Component Feature Showcase */}
          <div className="lg:col-span-5 space-y-6">
            {/* Circular Progress Gauge Card */}
            <Card className="glass-card border-obsidian-border p-6 flex items-center justify-between gap-4">
              <div>
                <Badge variant="brand" size="sm" className="mb-2">
                  Mova Fund
                </Badge>
                <h4 className="text-base font-bold text-crisp font-display">
                  Community Solar Borehole
                </h4>
                <p className="text-xs text-muted-foreground mt-1 max-w-[200px]">
                  Real-time circular progress gauge with live MoMo API webhooks.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-semibold">
                    +UGX 450,000 today
                  </span>
                </div>
              </div>

              <ProgressGauge
                value={splitAmount}
                max={totalGoal}
                variant="circular"
                size="md"
                subLabel="GOAL"
              />
            </Card>

            {/* Design Token Spec Card */}
            <Card className="glass-card border-obsidian-border p-6">
              <h4 className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">
                Token & Primitive Specifications
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-obsidian-border/60">
                  <span className="text-muted-foreground">Hero Brand Yellow</span>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-brand shadow-brand-glow" />
                    <code className="text-crisp font-mono">#FFD200</code>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-obsidian-border/60">
                  <span className="text-muted-foreground">Obsidian Canvas</span>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-obsidian border border-obsidian-border" />
                    <code className="text-crisp font-mono">#0B0E14</code>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-obsidian-border/60">
                  <span className="text-muted-foreground">Elevated Cards</span>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-obsidian-800 border border-obsidian-border" />
                    <code className="text-crisp font-mono">#141923</code>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Typography</span>
                  <span className="text-crisp font-semibold">Inter & Plus Jakarta Sans</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
