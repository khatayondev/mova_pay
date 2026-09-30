"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shell } from "@/components/layout/Shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressGauge } from "@/components/ui/progress-gauge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { sampleCampaigns } from "@/lib/campaigns-data";
import { formatCurrency } from "@/lib/utils";
import {
  Sparkles,
  Search,
  Filter,
  Users,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  PiggyBank,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function FundHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Small Business", "Education", "Community"];

  const campaignList = Object.values(sampleCampaigns).filter((campaign) => {
    const matchesCategory =
      selectedCategory === "All" || campaign.category === selectedCategory;
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.organizer.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 max-w-7xl space-y-10">
        {/* ========================================================================= */}
        {/* 1. HERO PITCH HEADER                                                     */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden rounded-3xl border border-obsidian-border bg-gradient-to-br from-obsidian-800/90 via-obsidian-850 to-obsidian-900 p-6 sm:p-10 shadow-card-elevated">
          {/* Yellow ambient glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-80 w-80 rounded-full bg-brand/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex">
              <Badge variant="brand" size="md" withPulseRing>
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                Transparent MoMo Crowdfunding
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-crisp">
              Back impactful ideas. <br />
              <span className="text-brand yellow-neon-glow">Funded directly via Mobile Money.</span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              No overseas bank accounts, no foreign currency conversion losses, and no 14-day payout delays.
              Mova connects backers directly to verified community organizers and small businesses with real-time USSD push rails.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/fund/sarah-bakery">
                <Button size="lg" className="shadow-brand-glow font-bold" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Explore Sarah's Bakery
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium pl-2">
                <ShieldCheck className="h-4 w-4 text-brand" />
                <span>100% Verified MoMo Identity Verification</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. DISCOVERY & FILTER TOOLBAR                                            */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-brand text-obsidian-950 shadow-brand-glow font-bold"
                    : "border border-obsidian-border bg-obsidian-800 text-muted-foreground hover:text-crisp hover:border-obsidian-borderElevated"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search goals, founders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 py-2 pl-9 pr-4 text-xs text-crisp placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CAMPAIGN CARDS GRID                                                   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaignList.map((campaign) => {
            const percent = Math.min(
              Math.round((campaign.raisedAmount / campaign.targetAmount) * 100),
              100
            );

            return (
              <Card
                key={campaign.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-obsidian-border bg-obsidian-800 hover:border-brand/40 transition-all duration-200 hover:shadow-card-elevated"
              >
                {/* Cover Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-obsidian-900">
                  <Image
                    src={campaign.coverImage}
                    alt={campaign.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-transparent to-black/30" />

                  {/* Yellow Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full bg-brand px-3 py-0.5 text-[11px] font-bold text-obsidian-950 shadow-momo-badge">
                      {campaign.category}
                    </span>
                  </div>

                  {/* Days remaining badge */}
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-obsidian-900/80 backdrop-blur-md border border-white/10 px-2.5 py-0.5 text-[10px] font-medium text-crisp flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-brand" />
                      {campaign.daysRemaining} days left
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardHeader className="p-5 pb-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="relative h-6 w-6 rounded-full overflow-hidden border border-brand/50">
                      <Image
                        src={campaign.organizer.avatarUrl}
                        alt={campaign.organizer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                      by {campaign.organizer.name}
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                    </span>
                  </div>

                  <CardTitle className="text-lg font-bold leading-snug text-crisp group-hover:text-brand transition-colors line-clamp-2">
                    {campaign.title}
                  </CardTitle>

                  <CardDescription className="text-xs text-muted-foreground line-clamp-2">
                    {campaign.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-5 pt-0 mt-auto space-y-4">
                  {/* Progress Gauge */}
                  <div className="space-y-1.5 pt-2">
                    <ProgressGauge
                      value={campaign.raisedAmount}
                      max={campaign.targetAmount}
                      size="sm"
                      showPercent={false}
                    />
                    <div className="flex justify-between items-center text-xs">
                      <div>
                        <span className="font-bold text-brand font-display">
                          {formatCurrency(campaign.raisedAmount, campaign.currency as any)}
                        </span>
                        <span className="text-[11px] text-muted-foreground ml-1">
                          raised ({percent}%)
                        </span>
                      </div>
                      <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <Users className="h-3 w-3 text-brand" />
                        <span>{campaign.backerCount} backers</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Link to Campaign */}
                  <Link href={`/fund/${campaign.id}`} className="block w-full">
                    <Button
                      variant="outline"
                      className="w-full text-xs font-semibold group-hover:bg-brand group-hover:text-obsidian-950 group-hover:border-brand transition-all"
                      rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                    >
                      View & Back Goal
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}
