"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell } from "@/components/layout/Shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProgressGauge } from "@/components/ui/progress-gauge";
import { AvatarGroup, AvatarSingle } from "@/components/ui/avatar-group";
import { MoMoCheckoutModal } from "@/components/modules/MoMoCheckoutModal";
import { formatCurrency, formatMoMoPhone } from "@/lib/utils";
import {
  Receipt,
  Users,
  Plus,
  Trash2,
  Share2,
  Copy,
  Check,
  Smartphone,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  QrCode,
  Sliders,
  DollarSign,
  Send,
  MessageCircle,
} from "lucide-react";

interface Contributor {
  id: string;
  name: string;
  handle: string;
  phone: string;
  amount: number;
  status: "PAID" | "PENDING";
  avatarUrl?: string;
  initials?: string;
}

export default function SplitPage() {
  // Wizard Form State
  const [groupName, setGroupName] = useState("Weekend Trip to Ada");
  const [category, setCategory] = useState<"Trip" | "Celebration" | "Food" | "Project">("Trip");
  const [totalBudget, setTotalBudget] = useState<number>(800);
  const [currency, setCurrency] = useState<"GHS" | "UGX" | "USD">("GHS");
  const [splitMode, setSplitMode] = useState<"EQUAL" | "CUSTOM">("EQUAL");

  // Contributor List
  const [contributors, setContributors] = useState<Contributor[]>([
    {
      id: "c-1",
      name: "Gabriel Okello (You)",
      handle: "@gabriel",
      phone: "+233 24 819 0312",
      amount: 200,
      status: "PAID",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    {
      id: "c-2",
      name: "Sadick Abubakar",
      handle: "@sadick",
      phone: "+233 55 491 8832",
      amount: 200,
      status: "PENDING",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    },
    {
      id: "c-3",
      name: "Abena Mensah",
      handle: "@abena_m",
      phone: "+233 20 812 4040",
      amount: 200,
      status: "PENDING",
      avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
    },
    {
      id: "c-4",
      name: "Kofi Owusu",
      handle: "@kofi_tech",
      phone: "+233 27 910 1122",
      amount: 200,
      status: "PAID",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    },
  ]);

  // New Contributor Input
  const [newHandle, setNewHandle] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isGroupCreated, setIsGroupCreated] = useState(true);

  // Pay Modal State for simulating settlement
  const [payingMember, setPayingMember] = useState<Contributor | null>(null);

  const categories = [
    { label: "Trip", icon: "🏖️" },
    { label: "Celebration", icon: "🎂" },
    { label: "Food", icon: "🍲" },
    { label: "Project", icon: "🚀" },
  ] as const;

  // Real-time calculation of equal shares
  const calculatedContributors = useMemo(() => {
    if (splitMode === "EQUAL") {
      const count = contributors.length || 1;
      const equalShare = Math.round((totalBudget / count) * 100) / 100;
      return contributors.map((c) => ({
        ...c,
        amount: equalShare,
      }));
    }
    return contributors;
  }, [contributors, totalBudget, splitMode]);

  // Derived totals
  const totalCollected = calculatedContributors
    .filter((c) => c.status === "PAID")
    .reduce((sum, c) => sum + c.amount, 0);

  const totalAllocated = calculatedContributors.reduce((sum, c) => sum + c.amount, 0);
  const percentCollected = totalBudget > 0 ? Math.min(Math.round((totalCollected / totalBudget) * 100), 100) : 0;

  // Slug generator (e.g. mova.me/s/weekend-trip-ada)
  const groupSlug = groupName
    .toLowerCase()
    .replace(/\bto\b/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  const shareableUrl = `mova.me/s/${groupSlug || "weekend-trip-ada"}`;

  // Quick preset contacts for instant 1-click addition
  const suggestedContacts = [
    { name: "Sadick Abubakar", handle: "@sadick", phone: "+233 55 491 8832" },
    { name: "Abena Mensah", handle: "@abena_m", phone: "+233 20 812 4040" },
    { name: "Kofi Owusu", handle: "@kofi_tech", phone: "+233 27 910 1122" },
    { name: "Sarah Nalwanga", handle: "@sarahbakes", phone: "+233 24 819 0312" },
    { name: "Ama Kitchen", handle: "@amakitchen", phone: "+233 78 844 0912" },
  ];

  // Add contributor handler
  const handleAddContributor = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!newHandle.trim() && !newPhone.trim()) return;

    const formattedHandle = newHandle.trim()
      ? newHandle.trim().startsWith("@")
        ? newHandle.trim()
        : `@${newHandle.trim()}`
      : `@user_${Math.floor(100 + Math.random() * 900)}`;

    const newName = formattedHandle.replace("@", "");
    const newContributor: Contributor = {
      id: `c-${Date.now()}`,
      name: newName.charAt(0).toUpperCase() + newName.slice(1),
      handle: formattedHandle,
      phone: newPhone.trim() || "+233 24 000 0000",
      amount: splitMode === "EQUAL" ? Math.round(totalBudget / (contributors.length + 1)) : 0,
      status: "PENDING",
      initials: newName.slice(0, 2).toUpperCase(),
    };

    setContributors([...contributors, newContributor]);
    setNewHandle("");
    setNewPhone("");
  };

  const handleAddQuickContact = (contact: { name: string; handle: string; phone: string }) => {
    if (contributors.some((c) => c.handle === contact.handle)) return;
    const newContributor: Contributor = {
      id: `c-${Date.now()}`,
      name: contact.name,
      handle: contact.handle,
      phone: contact.phone,
      amount: splitMode === "EQUAL" ? Math.round(totalBudget / (contributors.length + 1)) : 0,
      status: "PENDING",
      initials: contact.name.slice(0, 2).toUpperCase(),
    };
    setContributors([...contributors, newContributor]);
  };

  const handleRemoveContributor = (id: string) => {
    if (contributors.length <= 1) return;
    setContributors(contributors.filter((c) => c.id !== id));
  };

  const handleCustomAmountChange = (id: string, value: string) => {
    const num = parseFloat(value) || 0;
    setContributors(
      contributors.map((c) => (c.id === id ? { ...c, amount: num } : c))
    );
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const individualShareAmount = calculatedContributors[0]?.amount || 200;
  const cleanTitle = groupName.replace(/\s+to\s+Ada/i, "");
  const whatsappMessage = `Hey! I've set up our ${cleanTitle || "Weekend Trip"} split on Mova. Click to pay your ${currency} ${individualShareAmount.toLocaleString()} directly with MoMo: ${shareableUrl}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 max-w-6xl space-y-10">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-obsidian-border pb-6">
          <div>
            <div className="inline-flex mb-2">
              <Badge variant="brand" size="sm" withPulseRing>
                <Sparkles className="h-3 w-3 mr-1" />
                Mova Split Engine
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-crisp font-display tracking-tight">
              Create Group Split & Collect via MoMo
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-2xl">
              Split bills evenly or with custom weights. Direct MoMo USSD requests sent to all participants without chasing screenshot receipts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="momo" size="md">
              <Zap className="h-3.5 w-3.5 mr-1" />
              Auto-USSD Push Rails
            </Badge>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2-COLUMN MAIN WORKFLOW (WIZARD & CALCULATOR vs LIVE VIRAL PREVIEW)        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Group Creation Wizard & Split Engine (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Group Basics Card */}
            <Card className="glass-card border-obsidian-border p-6 space-y-5">
              <div className="flex items-center gap-2 border-b border-obsidian-border pb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-obsidian-950 font-black text-xs">
                  1
                </div>
                <h3 className="text-base font-bold text-crisp font-display">
                  Group Setup & Total Budget
                </h3>
              </div>

              {/* Group Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-crisp">Group Split Name</label>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  placeholder="e.g. Weekend Trip to Ada, Office Birthday Cake"
                  className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 p-2.5 text-sm font-semibold text-crisp placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              {/* Category Pills & Currency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-crisp">Category</label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((c) => (
                      <button
                        key={c.label}
                        type="button"
                        onClick={() => setCategory(c.label)}
                        className={`flex items-center gap-2 rounded-xl border p-2 text-xs font-semibold transition-all ${
                          category === c.label
                            ? "border-brand bg-brand/15 text-brand shadow-momo-badge"
                            : "border-obsidian-border bg-obsidian-800 text-muted-foreground hover:text-crisp"
                        }`}
                      >
                        <span>{c.icon}</span>
                        <span>{c.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-crisp">Total Target Budget</label>
                  <div className="relative">
                    <div className="absolute left-2 top-1/2 -translate-y-1/2">
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
                      value={totalBudget || ""}
                      onChange={(e) => setTotalBudget(parseFloat(e.target.value) || 0)}
                      placeholder="800"
                      className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 py-2.5 pl-16 pr-4 text-base font-mono font-bold text-crisp focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 2: Split Engine Mode & Contributor Manager */}
            <Card className="glass-card border-obsidian-border p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-obsidian-border pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-obsidian-950 font-black text-xs">
                    2
                  </div>
                  <h3 className="text-base font-bold text-crisp font-display">
                    Split Engine & Contributors
                  </h3>
                </div>

                {/* Equal vs Custom Breakdown Toggle */}
                <div className="flex items-center rounded-lg border border-obsidian-border bg-obsidian-900 p-0.5 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setSplitMode("EQUAL")}
                    className={`rounded-md px-3 py-1 transition-all ${
                      splitMode === "EQUAL"
                        ? "bg-brand text-obsidian-950 shadow-brand-glow font-bold"
                        : "text-muted-foreground hover:text-crisp"
                    }`}
                  >
                    Split Equally
                  </button>
                  <button
                    type="button"
                    onClick={() => setSplitMode("CUSTOM")}
                    className={`rounded-md px-3 py-1 transition-all ${
                      splitMode === "CUSTOM"
                        ? "bg-brand text-obsidian-950 shadow-brand-glow font-bold"
                        : "text-muted-foreground hover:text-crisp"
                    }`}
                  >
                    Custom Breakdown
                  </button>
                </div>
              </div>

              {/* Contributor Adder Form */}
              <form onSubmit={handleAddContributor} className="flex gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Enter @handle (e.g. @sadick)"
                    value={newHandle}
                    onChange={(e) => setNewHandle(e.target.value)}
                    className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 p-2.5 text-xs text-crisp placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div className="flex-1 relative hidden sm:block">
                  <input
                    type="tel"
                    placeholder="Phone (024 XXX XXXX)"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 p-2.5 text-xs text-crisp placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand font-mono"
                  />
                </div>
                <Button
                  type="submit"
                  size="sm"
                  variant="primary"
                  className="font-bold shadow-brand-glow whitespace-nowrap"
                  leftIcon={<Plus className="h-4 w-4" />}
                >
                  Add Person
                </Button>
              </form>

              {/* Quick Suggestion Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                <span className="text-[10px] text-muted-foreground uppercase font-bold shrink-0">
                  Quick Add:
                </span>
                {suggestedContacts.map((contact) => (
                  <button
                    key={contact.handle}
                    type="button"
                    onClick={() => handleAddQuickContact(contact)}
                    className="inline-flex items-center gap-1 rounded-full border border-obsidian-border bg-obsidian-900/80 px-2.5 py-0.5 text-[11px] text-crisp/80 hover:text-brand hover:border-brand/40 transition-colors shrink-0"
                  >
                    <span>{contact.handle}</span>
                    <Plus className="h-2.5 w-2.5 text-brand" />
                  </button>
                ))}
              </div>

              {/* Real-time Calculation Cards for Each Member */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>
                    Group Members ({calculatedContributors.length} people)
                  </span>
                  <span className="font-mono text-brand">
                    {splitMode === "EQUAL"
                      ? `${currency} ${((totalBudget || 0) / (calculatedContributors.length || 1)).toFixed(2)} each`
                      : `Total Allocated: ${currency} ${totalAllocated}`}
                  </span>
                </div>

                <div className="space-y-2">
                  {calculatedContributors.map((c) => (
                    <div
                      key={c.id}
                      className="flex items-center justify-between p-3 rounded-xl border border-obsidian-border bg-obsidian-850 hover:border-obsidian-borderElevated transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <AvatarSingle
                          name={c.name}
                          avatarUrl={c.avatarUrl}
                          size="sm"
                          status={c.status === "PAID" ? "paid" : "pending"}
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-crisp">{c.name}</span>
                            <span className="text-[11px] text-muted-foreground font-mono">
                              {c.handle}
                            </span>
                          </div>
                          <span className="text-[10px] text-muted-foreground font-mono">
                            {formatMoMoPhone(c.phone)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {splitMode === "CUSTOM" ? (
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold text-brand">{currency}</span>
                            <input
                              type="number"
                              value={c.amount}
                              onChange={(e) => handleCustomAmountChange(c.id, e.target.value)}
                              className="w-20 rounded-lg border border-obsidian-border bg-obsidian-800 px-2 py-1 text-xs font-mono font-bold text-crisp text-right focus:border-brand focus:outline-none"
                            />
                          </div>
                        ) : (
                          <div className="text-right">
                            <span className="text-sm font-bold font-display text-brand">
                              {currency} {c.amount.toLocaleString()}
                            </span>
                          </div>
                        )}

                        {c.status === "PAID" ? (
                          <Badge variant="momo" size="sm">
                            Paid
                          </Badge>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setPayingMember(c)}
                            title="Simulate MoMo Payment for this member"
                            className="rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 text-[10px] font-semibold hover:bg-brand hover:text-obsidian-950 hover:border-brand transition-colors"
                          >
                            Simulate Pay
                          </button>
                        )}

                        {contributors.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveContributor(c.id)}
                            className="text-muted-foreground hover:text-rose-400 p-1"
                            title="Remove member"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Live Settlement Tracker & Viral Share (5 Cols Sticky) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Progress Card */}
            <Card className="rounded-2xl border-2 border-brand/40 bg-obsidian-850 p-6 shadow-brand-glow space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <Badge variant="brand" size="sm" className="mb-1.5">
                    Live Settlement
                  </Badge>
                  <h3 className="text-lg font-bold text-crisp font-display">
                    {groupName}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {category} Pool • {calculatedContributors.length} Members
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-brand font-display">
                    {percentCollected}%
                  </span>
                  <span className="text-[10px] text-muted-foreground block">
                    Collected
                  </span>
                </div>
              </div>

              {/* Progress Gauge */}
              <div className="space-y-1.5">
                <ProgressGauge
                  value={totalCollected}
                  max={totalBudget}
                  size="md"
                  showPercent={false}
                />
                <div className="flex justify-between text-xs pt-1">
                  <span className="font-semibold text-brand font-mono">
                    {currency} {totalCollected.toLocaleString()} Paid
                  </span>
                  <span className="text-muted-foreground font-mono">
                    Goal: {currency} {totalBudget.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Avatar Group of participants */}
              <div className="flex items-center justify-between pt-2 border-t border-obsidian-border/80">
                <span className="text-xs text-muted-foreground">Settlement Status:</span>
                <AvatarGroup
                  avatars={calculatedContributors.map((c) => ({
                    id: c.id,
                    name: c.name,
                    avatarUrl: c.avatarUrl,
                    status: c.status === "PAID" ? "paid" : "pending",
                  }))}
                  maxVisible={4}
                  size="sm"
                  showStatusRings
                />
              </div>
            </Card>

            {/* ========================================================================= */}
            {/* VIRAL SHARE & WHATSAPP INVITE GENERATOR CARD                             */}
            {/* ========================================================================= */}
            <Card className="glass-card border-obsidian-border p-6 space-y-5">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-crisp font-display">
                    Viral Share & WhatsApp Invite
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Direct MoMo payment link generated
                  </p>
                </div>
              </div>

              {/* Custom Mova Link Display */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground">
                  Custom Mova Split URL
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 rounded-xl border border-obsidian-border bg-obsidian-900/90 px-3.5 py-2 text-xs font-mono text-brand truncate">
                    {shareableUrl}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 text-xs"
                    onClick={handleCopyLink}
                    leftIcon={isCopied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  >
                    {isCopied ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>

              {/* Pre-populated WhatsApp Message Template Preview */}
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 space-y-2">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <Send className="h-3 w-3" /> WhatsApp Invite Template
                </span>
                <p className="text-xs text-crisp/90 italic bg-obsidian-900/70 p-2.5 rounded-lg border border-obsidian-border leading-relaxed font-sans">
                  "{whatsappMessage}"
                </p>
              </div>

              {/* High-Impact WhatsApp CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 text-xs transition-colors shadow-lg shadow-emerald-950/50"
              >
                <Share2 className="h-4 w-4" />
                <span>Share Directly to WhatsApp</span>
              </a>

              {/* Multi-handset MoMo Push Dispatcher */}
              <Button
                variant="outline"
                className="w-full text-xs font-semibold border-brand/40 text-brand hover:bg-brand/10"
                onClick={() => {
                  alert(`Dispatched MoMo USSD requests to ${calculatedContributors.filter(c => c.status === "PENDING").length} pending members!`);
                }}
                leftIcon={<Smartphone className="h-4 w-4 text-brand" />}
              >
                Dispatch Instant MoMo Push to Pending ({calculatedContributors.filter(c => c.status === "PENDING").length})
              </Button>
            </Card>
          </div>
        </div>

        {/* Modal for Simulating Payment */}
        {payingMember && (
          <MoMoCheckoutModal
            isOpen={!!payingMember}
            onClose={() => setPayingMember(null)}
            details={{
              recipientName: groupName,
              recipientHandle: payingMember.handle,
              recipientPhone: payingMember.phone,
              amount: payingMember.amount,
              currency,
              purpose: `Settlement for ${groupName}`,
            }}
            onSuccess={() => {
              setContributors((prev) =>
                prev.map((c) =>
                  c.id === payingMember.id ? { ...c, status: "PAID" } : c
                )
              );
              setPayingMember(null);
            }}
          />
        )}
      </div>
    </Shell>
  );
}
