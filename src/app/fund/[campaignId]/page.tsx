"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Shell } from "@/components/layout/Shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressGauge } from "@/components/ui/progress-gauge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarSingle } from "@/components/ui/avatar-group";
import { MoMoCheckoutModal, MoMoSuccessReceipt } from "@/components/modules/MoMoCheckoutModal";
import { sampleCampaigns, CampaignBacker } from "@/lib/campaigns-data";
import { formatCurrency, formatMoMoPhone } from "@/lib/utils";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Calendar,
  Share2,
  Heart,
  MessageSquare,
  Sparkles,
  Smartphone,
  ArrowLeft,
  ChevronRight,
  Clock,
  Check,
  Loader2,
  Lock,
  DollarSign,
  AlertCircle,
  Zap,
} from "lucide-react";

export default function CampaignDetailPage() {
  const params = useParams();
  const campaignId = (params?.campaignId as string) || "sarah-bakery";
  const initialCampaign = sampleCampaigns[campaignId] || sampleCampaigns["sarah-bakery"];

  const [campaign, setCampaign] = useState(initialCampaign);
  const [selectedPreset, setSelectedPreset] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [encouragementMessage, setEncouragementMessage] = useState<string>("");
  const [backerPhone, setBackerPhone] = useState<string>("0248190312");

  // MoMo USSD Modal Simulation States
  const [isMoMoModalOpen, setIsMoMoModalOpen] = useState(false);
  const [momoStep, setMomoStep] = useState<"PROMPT" | "WAITING_USSD" | "SUCCESS">("PROMPT");
  const [isProcessing, setIsProcessing] = useState(false);

  const presets = [50, 100, 250];

  const currentContributionAmount = customAmount
    ? parseFloat(customAmount) || 0
    : selectedPreset;

  const percentageRaised = Math.min(
    Math.round((campaign.raisedAmount / campaign.targetAmount) * 100),
    100
  );

  const handleStartContribution = () => {
    if (currentContributionAmount <= 0) return;
    setMomoStep("PROMPT");
    setIsMoMoModalOpen(true);
  };

  const handleDispatchUSSDPush = () => {
    setIsProcessing(true);
    setMomoStep("WAITING_USSD");

    // Simulate USSD push prompt delivered to mobile and approved with MoMo PIN
    setTimeout(() => {
      setIsProcessing(false);
      setMomoStep("SUCCESS");

      // Update campaign in real-time
      const newBacker: CampaignBacker = {
        id: `backer-${Date.now()}`,
        name: isAnonymous ? "Anonymous Backer" : "Gabriel Okello",
        handle: isAnonymous ? undefined : "@gabriel",
        amount: currentContributionAmount,
        currency: campaign.currency,
        message: encouragementMessage.trim() || "Proud to back this initiative via MTN MoMo!",
        timestamp: "Just now",
        isAnonymous: isAnonymous,
        avatarUrl: isAnonymous
          ? undefined
          : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      };

      setCampaign((prev) => ({
        ...prev,
        raisedAmount: prev.raisedAmount + currentContributionAmount,
        backerCount: prev.backerCount + 1,
        supporters: [newBacker, ...prev.supporters],
      }));
    }, 2800);
  };

  return (
    <Shell>
      <div className="container mx-auto px-4 py-6 max-w-6xl space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/fund" className="hover:text-crisp flex items-center gap-1 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Discover Goals
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
          <span className="text-crisp truncate max-w-[200px] sm:max-w-none">
            {campaign.title}
          </span>
        </div>

        {/* ========================================================================= */}
        {/* 1. CAMPAIGN HERO SECTION                                                 */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden rounded-3xl border border-obsidian-border bg-obsidian-850 shadow-card-elevated">
          {/* Cover Banner */}
          <div className="relative h-64 sm:h-96 w-full">
            <Image
              src={campaign.coverImage}
              alt={campaign.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-black/20" />

            {/* Category Pill Tag */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="rounded-full bg-brand px-3.5 py-1 text-xs font-bold text-obsidian-950 shadow-brand-glow">
                {campaign.category}
              </span>
              <Badge variant="obsidian" size="sm">
                <Sparkles className="h-3 w-3 text-brand mr-1" />
                Verified Community Goal
              </Badge>
            </div>

            {/* Days Remaining Pill */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <span className="rounded-full bg-obsidian-900/80 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-semibold text-crisp flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-brand" />
                {campaign.daysRemaining} days remaining
              </span>
            </div>

            {/* Hero Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 space-y-2">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-crisp tracking-tight font-display drop-shadow-md">
                {campaign.title}
              </h1>
              <p className="text-sm sm:text-base text-crisp/90 max-w-3xl line-clamp-2 drop-shadow">
                {campaign.tagline}
              </p>
            </div>
          </div>

          {/* Organizer Verified Identity Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-6 bg-obsidian-900/90 border-t border-obsidian-border">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-brand/60 shadow-brand-glow">
                <Image
                  src={campaign.organizer.avatarUrl}
                  alt={campaign.organizer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-crisp">
                    {campaign.organizer.name}
                  </span>
                  <Badge variant="brand" size="sm">
                    <CheckCircle2 className="h-3 w-3 mr-0.5" />
                    Verified MoMo Organizer
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5">
                  <span className="font-mono">{campaign.organizer.handle}</span>
                  <span>•</span>
                  <span>{campaign.organizer.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                leftIcon={<Share2 className="h-3.5 w-3.5 text-brand" />}
                onClick={() => {
                  if (typeof navigator !== "undefined" && navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Campaign link copied to clipboard!");
                  }
                }}
              >
                Share Goal
              </Button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN 2-COLUMN GRID (STORY + DIRECT CONTRIBUTION CARD)                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Story & Milestones (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Live Milestone Tracker */}
            <Card className="glass-card border-obsidian-border p-6 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Total Raised So Far
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl font-extrabold text-brand font-display">
                        {campaign.currency} {campaign.raisedAmount.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        of {campaign.currency} {campaign.targetAmount.toLocaleString()} goal
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-crisp font-display">
                      {percentageRaised}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar Gauge */}
                <ProgressGauge
                  value={campaign.raisedAmount}
                  max={campaign.targetAmount}
                  size="lg"
                  showPercent={false}
                />

                <div className="flex justify-between items-center text-xs text-muted-foreground pt-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Users className="h-3.5 w-3.5 text-brand" />
                    <strong>{campaign.backerCount}</strong> direct contributors
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    Zero Overseas Intermediary Fees
                  </span>
                </div>
              </div>

              {/* Milestones Timeline */}
              <div className="space-y-4 pt-4 border-t border-obsidian-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand font-display">
                  Project Milestones & Fund Allocation
                </h3>
                <div className="space-y-3">
                  {campaign.milestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all ${
                        milestone.completed
                          ? "border-emerald-500/30 bg-emerald-500/5 text-crisp"
                          : "border-obsidian-border bg-obsidian-900/60 text-muted-foreground"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          milestone.completed
                            ? "bg-emerald-500 text-obsidian-950 font-bold"
                            : "border border-obsidian-border bg-obsidian-800"
                        }`}
                      >
                        {milestone.completed ? (
                          <Check className="h-3 w-3 stroke-[3]" />
                        ) : (
                          <span className="text-[10px]">{idx + 1}</span>
                        )}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-crisp">
                            {milestone.title}
                          </span>
                          <span className="text-xs font-mono font-semibold text-brand">
                            {campaign.currency} {milestone.amount.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Campaign Rich Story */}
            <Card className="glass-card border-obsidian-border p-6 space-y-4">
              <h2 className="text-xl font-bold text-crisp font-display">
                About Sarah's Vision & The Bakery Hub
              </h2>
              <div className="space-y-4 text-sm text-crisp/80 leading-relaxed font-normal">
                {campaign.story.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Fraud-Resistant MoMo Transparency Notice */}
              <div className="mt-6 rounded-xl border border-brand/20 bg-brand/5 p-4 flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-brand">
                    The Mova Fraud-Resistant Commitment
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    Unlike traditional crowdfunds that hold money in foreign bank accounts, Mova's automated smart-ledger logs each MTN MoMo transaction in real time. Disbursements are tied strictly to verified milestone proofs.
                  </p>
                </div>
              </div>
            </Card>

            {/* Supporter Wall Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-crisp font-display">
                    Supporter Wall
                  </h3>
                  <Badge variant="brand" size="sm">
                    {campaign.supporters.length} Recent Backers
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  Live MoMo Stream
                </span>
              </div>

              <div className="space-y-3">
                {campaign.supporters.map((backer) => (
                  <Card
                    key={backer.id}
                    className="border-obsidian-border bg-obsidian-850 p-4 transition-all hover:border-obsidian-borderElevated"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <AvatarSingle
                          name={backer.name}
                          avatarUrl={backer.avatarUrl}
                          size="md"
                          status="paid"
                        />
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-crisp">
                              {backer.name}
                            </span>
                            {backer.handle && (
                              <span className="text-[11px] text-muted-foreground font-mono">
                                {backer.handle}
                              </span>
                            )}
                            <span className="text-[10px] text-muted-foreground">
                              • {backer.timestamp}
                            </span>
                          </div>
                          {backer.message && (
                            <p className="text-xs text-crisp/80 bg-obsidian-900/60 p-2.5 rounded-lg border border-obsidian-border mt-1.5 italic">
                              "{backer.message}"
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Contribution Amount Badge */}
                      <Badge variant="momo" size="sm" className="font-mono">
                        +{backer.currency} {backer.amount}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contribution Card (5 Cols Sticky) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <Card className="rounded-2xl border-2 border-brand/40 bg-obsidian-850 p-6 shadow-brand-glow">
                <div className="space-y-5">
                  <div>
                    <Badge variant="brand" size="sm" className="mb-2">
                      <Zap className="h-3 w-3 mr-1" />
                      Direct MTN MoMo Rail
                    </Badge>
                    <CardTitle className="text-xl font-bold text-crisp font-display">
                      Back Sarah's Bakery
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      Instant USSD push sent to your phone. Zero merchant surcharge.
                    </p>
                  </div>

                  {/* Preset Amount Tiers */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-crisp">
                      Select Contribution Amount ({campaign.currency})
                    </span>
                    <div className="grid grid-cols-3 gap-2.5">
                      {presets.map((amt) => {
                        const isSelected = selectedPreset === amt && !customAmount;
                        return (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => {
                              setSelectedPreset(amt);
                              setCustomAmount("");
                            }}
                            className={`flex flex-col items-center justify-center p-3 rounded-xl border text-sm font-bold transition-all ${
                              isSelected
                                ? "bg-brand text-obsidian-950 border-brand shadow-brand-glow font-extrabold"
                                : "bg-obsidian-800 border-obsidian-border text-crisp hover:border-brand/40"
                            }`}
                          >
                            <span className="text-[10px] opacity-75 font-normal">
                              {campaign.currency}
                            </span>
                            <span className="text-base font-display">{amt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Custom Amount Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground flex justify-between">
                      <span>Or Enter Custom Amount</span>
                      <span className="font-mono text-brand">Min {campaign.currency} 10</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">
                        {campaign.currency}
                      </span>
                      <input
                        type="number"
                        placeholder="e.g. 500"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedPreset(0);
                        }}
                        className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 py-2.5 pl-14 pr-4 text-sm font-semibold text-crisp placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand font-mono"
                      />
                    </div>
                  </div>

                  {/* Supporter Encouragement Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-crisp flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-brand" />
                        Leave Words of Encouragement
                      </span>
                      <span className="text-[10px] text-muted-foreground">Optional</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Can't wait for opening day! Keep shining!"
                      value={encouragementMessage}
                      onChange={(e) => setEncouragementMessage(e.target.value)}
                      className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 p-3 text-xs text-crisp placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>

                  {/* Anonymous Toggle */}
                  <div className="flex items-center justify-between p-3 rounded-xl border border-obsidian-border bg-obsidian-900/60">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-crisp">
                        Contribute Anonymously
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        Hide your name from the public backer stream
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsAnonymous(!isAnonymous)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        isAnonymous ? "bg-brand" : "bg-obsidian-700"
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-obsidian-950 shadow ring-0 transition duration-200 ease-in-out ${
                          isAnonymous ? "translate-x-4" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Primary Vibrant Yellow CTA Button */}
                  <Button
                    size="lg"
                    className="w-full shadow-brand-glow text-base font-extrabold tracking-wide py-4"
                    onClick={handleStartContribution}
                    rightIcon={<Smartphone className="h-5 w-5" />}
                  >
                    Back this Goal via MoMo ({campaign.currency} {currentContributionAmount})
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                    <Lock className="h-3 w-3 text-brand" />
                    <span>Protected by MTN MoMo 2-Factor USSD PIN</span>
                  </div>
                </div>
              </Card>

              {/* Verified Trust Shield */}
              <div className="rounded-xl border border-obsidian-border bg-obsidian-800/80 p-4 space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2 text-crisp font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Instant Settlement Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Funds stay directly inside the audited project wallet and cannot be siphoned into personal accounts. Every withdrawal requires multi-signature validation from the community elder board.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. SIMULATED MOMO USSD CHECKOUT MODAL                                    */}
        {/* ========================================================================= */}
        <MoMoCheckoutModal
          isOpen={isMoMoModalOpen}
          onClose={() => setIsMoMoModalOpen(false)}
          details={{
            recipientName: campaign.organizer.name,
            recipientHandle: campaign.organizer.handle,
            recipientPhone: campaign.organizer.phone,
            amount: currentContributionAmount,
            currency: campaign.currency,
            purpose: `Contribution to ${campaign.title}`,
          }}
          onSuccess={(receipt: MoMoSuccessReceipt) => {
            const newBacker: CampaignBacker = {
              id: receipt.transactionId,
              name: isAnonymous ? "Anonymous Backer" : "Gabriel Okello",
              handle: isAnonymous ? undefined : "@gabriel",
              amount: receipt.amount,
              currency: receipt.currency,
              message: encouragementMessage.trim() || "Proud to back this initiative via MTN MoMo!",
              timestamp: "Just now",
              isAnonymous: isAnonymous,
              avatarUrl: isAnonymous
                ? undefined
                : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
            };

            setCampaign((prev) => ({
              ...prev,
              raisedAmount: prev.raisedAmount + receipt.amount,
              backerCount: prev.backerCount + 1,
              supporters: [newBacker, ...prev.supporters],
            }));
          }}
        />
      </div>
    </Shell>
  );
}
