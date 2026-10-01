"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  Check,
  Send,
  Receipt,
  PiggyBank,
  Store,
  ShieldCheck,
  XCircle,
  AlertTriangle,
  Smartphone,
  CheckCircle2,
  Users,
  QrCode,
  Share2,
  Lock,
  MessageCircle,
  HelpCircle,
  Radio,
  Copy,
  Flame,
  Star,
  Zap,
  Gift,
  Coins,
  FileSpreadsheet,
  Image as ImageIcon,
  Sliders,
  Clock,
  CheckCheck,
  Home as HomeIcon,
  Handshake,
  Linkedin,
  Instagram,
  Youtube,
  Globe,
} from "lucide-react";
import { MoMoCheckoutModal } from "@/components/modules/MoMoCheckoutModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"SPLIT" | "PAY" | "FUND" | "MERCHANT">("SPLIT");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Audience Switcher (Criba style)
  const [audience, setAudience] = useState<"groups" | "creators">("groups");

  // Interactive Calculator State (Criba style)
  const [calcAmount, setCalcAmount] = useState(1200);
  const [calcMembers, setCalcMembers] = useState(6);

  // Waitlist State
  const [desiredHandle, setDesiredHandle] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [selectedRole, setSelectedRole] = useState("Personal & Friend Groups");
  const [isJoiningWaitlist, setIsJoiningWaitlist] = useState(false);
  const [waitlistSuccess, setWaitlistSuccess] = useState<null | {
    handle: string;
    queueNumber: number;
    contact: string;
    role: string;
  }>(null);
  const [copiedReferral, setCopiedReferral] = useState(false);

  const cleanHandle = (val: string) => {
    return val.toLowerCase().replace(/[^a-z0-9_]/g, "").slice(0, 20);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!desiredHandle && !contactInfo) return;

    setIsJoiningWaitlist(true);
    setTimeout(() => {
      const generatedQueue = 1428 + Math.floor(Math.random() * 5) + 1;
      setWaitlistSuccess({
        handle: desiredHandle ? `@${cleanHandle(desiredHandle)}` : "@user",
        queueNumber: generatedQueue,
        contact: contactInfo || "your phone/email",
        role: selectedRole,
      });
      setIsJoiningWaitlist(false);
    }, 700);
  };

  const copyReferralLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(`https://mova.app/?ref=${desiredHandle || "vip"}`);
      setCopiedReferral(true);
      setTimeout(() => setCopiedReferral(false), 2000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-950 font-sans antialiased selection:bg-[#FFD200] selection:text-slate-950 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* TOP NAVBAR: FULL SCREEN WIDTH                                             */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6 sm:px-12">
          {/* Logo with bold glyph mark */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-[#FFD200] font-extrabold text-sm tracking-tighter shadow-sm">
              <span className="font-serif italic text-lg">§</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-950 font-display">
              Mova
            </span>
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-slate-600">
            <Link href="#features" className="hover:text-slate-950 transition-colors">
              Features
            </Link>
            <Link href="#calculator" className="hover:text-slate-950 transition-colors">
              Friction Calculator
            </Link>
            <Link href="#products" className="hover:text-slate-950 transition-colors">
              Products
            </Link>
            <Link href="/live" className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-bold transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>TikTok Live & Social</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-900 border border-amber-300">Soon</span>
            </Link>
            <Link href="#why-mova" className="hover:text-slate-950 transition-colors">
              Why Mova
            </Link>
            <Link href="#faq" className="hover:text-slate-950 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Right Action: Pill Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="hidden sm:inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Test MoMo Rail
            </button>
            <a
              href="#waitlist"
              className="rounded-full bg-[#FFD200] hover:bg-[#FACC15] text-slate-950 px-5 py-2.5 text-xs font-black shadow-md shadow-amber-400/30 transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span>Join Waitlist</span>
            </a>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* HERO SECTION: FULL SCREEN WIDTH                                           */}
      {/* ========================================================================= */}
      <div className="w-full bg-white relative overflow-hidden pt-10 sm:pt-14 pb-8">
        <div className="max-w-5xl mx-auto text-center px-4 space-y-5">
          
          {/* Criba-Style Audience Switcher Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-full bg-slate-100 p-1 font-semibold text-xs border border-slate-200 shadow-inner">
              <button
                type="button"
                onClick={() => setAudience("groups")}
                className={`px-4 sm:px-5 py-2 rounded-full transition-all ${
                  audience === "groups"
                    ? "bg-[#FFD200] text-slate-950 font-bold shadow-sm"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                For Friends & Groups
              </button>
              <button
                type="button"
                onClick={() => setAudience("creators")}
                className={`px-4 sm:px-5 py-2 rounded-full transition-all ${
                  audience === "creators"
                    ? "bg-[#FFD200] text-slate-950 font-bold shadow-sm"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                For Creators & Vendors
              </button>
            </div>
          </div>

          {/* Subtle Tagline Pill */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/90 bg-amber-50 px-3.5 py-1 text-xs font-semibold text-amber-900 shadow-sm">
              <span className="text-amber-500 text-xs">✧</span>
              <span>
                {audience === "groups"
                  ? "The Connected Social MoMo Layer"
                  : "Live Streaming & In-Chat Commerce Rails"}
              </span>
            </div>
          </div>

          {/* Hero Headline: MONEY MOVES BETTER TOGETHER */}
          {audience === "groups" ? (
            <h1 className="text-4xl sm:text-6xl md:text-[72px] font-black tracking-tight text-slate-950 font-display leading-[1.05] uppercase">
              MONEY MOVES <br />
              <span className="bg-gradient-to-r from-slate-950 via-[#854D0E] to-[#CA8A04] bg-clip-text text-transparent">
                BETTER TOGETHER
              </span>
            </h1>
          ) : (
            <h1 className="text-4xl sm:text-6xl md:text-[72px] font-black tracking-tight text-slate-950 font-display leading-[1.05] uppercase">
              GET PAID DIRECTLY <br />
              <span className="bg-gradient-to-r from-slate-950 via-[#854D0E] to-[#CA8A04] bg-clip-text text-transparent">
                WHERE YOU CREATE
              </span>
            </h1>
          )}

          {/* Subtext */}
          <p className="text-xs sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal pt-1">
            {audience === "groups"
              ? "Mova connects people and groups to MTN MoMo — making it simple to request, split bills, collect contributions, and manage money without spreadsheets, screenshots, or awkward debt reminders."
              : "Accept instant MoMo tips on TikTok Live, split group costs inside Telegram chats, and sell lunch pre-orders with zero fake screenshot scams."}
          </p>

          {/* Primary CTA: Exact Button Replica with Left Arrow Circle */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-3 rounded-full bg-[#FFD200] hover:bg-[#FACC15] text-slate-950 pl-2 pr-6 py-2.5 text-xs sm:text-sm font-black shadow-lg shadow-amber-500/25 transition-all active:scale-95 group"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-[#FFD200] shadow-sm transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5 stroke-[3]" />
              </span>
              <span>Join Waitlist</span>
            </a>

            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 px-5 py-2.5 text-xs font-bold transition-colors"
            >
              Test MoMo USSD Prompt
            </button>
          </div>

          <p className="text-[11px] font-medium text-slate-400">
            Joining is free. No separate wallet to fund. Settles directly to your MTN MoMo.
          </p>

          {/* Inline @Handle Reservation Box */}
          <div className="pt-3 max-w-md mx-auto">
            {waitlistSuccess ? (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left space-y-2 animate-in fade-in duration-300">
                <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Handle Reserved: {waitlistSuccess.handle}
                  </span>
                  <span className="font-mono text-[10px] bg-amber-200 px-2 py-0.5 rounded-full">
                    #{waitlistSuccess.queueNumber}
                  </span>
                </div>
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={copyReferralLink}
                    className="flex-1 py-1.5 px-3 rounded-xl bg-slate-950 text-white text-[11px] font-bold flex items-center justify-center gap-1.5"
                  >
                    {copiedReferral ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedReferral ? "Copied!" : "Share Link"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setWaitlistSuccess(null)}
                    className="py-1.5 px-3 rounded-xl border border-slate-300 text-slate-700 text-[11px] font-semibold"
                  >
                    Reset
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex items-center gap-2 p-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-sm">
                <div className="flex-1 relative flex items-center pl-3">
                  <span className="text-slate-400 text-xs font-bold mr-1">@</span>
                  <input
                    type="text"
                    required
                    placeholder="claim-your-handle"
                    value={desiredHandle}
                    onChange={(e) => setDesiredHandle(cleanHandle(e.target.value))}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 placeholder-slate-400 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Phone or Email"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-36 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-[11px] text-slate-900 placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isJoiningWaitlist}
                  className="rounded-full bg-slate-950 hover:bg-slate-800 text-[#FFD200] px-4 py-2 text-xs font-bold shrink-0 transition-all"
                >
                  {isJoiningWaitlist ? "..." : "Claim"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO GRAPHICS STAGE: YELLOW RIBBED PILLARS, PHONE & 4 FLOATING CARDS      */}
        {/* ========================================================================= */}
        <div className="relative mt-2 pt-14 pb-8 px-4 overflow-hidden flex flex-col items-center justify-end min-h-[520px] sm:min-h-[580px]">
          {/* Vertical Ribbed Backdrop in Warm Yellow / Gold extending full width */}
          <div className="absolute inset-x-0 bottom-0 top-6 flex justify-between pointer-events-none -z-10 opacity-90 px-4 sm:px-12">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="w-full mx-[2px] sm:mx-1 rounded-t-xl transition-all"
                style={{
                  height: "100%",
                  opacity: 0.16 + (i % 2 === 0 ? 0.28 : 0.55),
                  background: `linear-gradient(to top, #CA8A04 0%, #EAB308 38%, rgba(253, 224, 71, 0.45) 75%, transparent 100%)`,
                }}
              />
            ))}
          </div>

          {/* Central Composition: Phone & Surrounding Floating Cards */}
          <div className="relative w-full max-w-[860px] flex items-center justify-center">
            
            {/* FLOATING ITEM 1: CIRCULAR UP-TRENDING ICON (TOP LEFT) */}
            <div className="absolute -top-6 left-6 sm:left-14 z-30 animate-bounce duration-1000 hidden xs:flex">
              <div className="p-1 rounded-full bg-white shadow-xl">
                <div className="h-12 w-12 rounded-full bg-[#FFD200] text-slate-950 flex items-center justify-center shadow-inner font-black">
                  <TrendingUp className="w-6 h-6 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* FLOATING ITEM 2: BUDGET / SPLIT SCORES DONUT CARD (BOTTOM LEFT) */}
            <div className="absolute bottom-6 -left-2 sm:left-4 z-30 w-56 sm:w-64 p-4 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl space-y-3 hidden sm:block">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                <span>Budget Scores</span>
                <span className="text-[10px] text-slate-400 font-medium flex items-center gap-0.5">
                  This Month <ChevronDown className="w-3 h-3" />
                </span>
              </div>

              {/* Donut Chart with Slices */}
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 shrink-0">
                  <svg viewBox="0 0 36 36" className="w-16 h-16 transform -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#F1F5F9" strokeWidth="5" />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#FFD200"
                      strokeWidth="5"
                      strokeDasharray="52.1 100"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#D97706"
                      strokeWidth="5"
                      strokeDasharray="22.8 100"
                      strokeDashoffset="-52.1"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#0F172A"
                      strokeWidth="5"
                      strokeDasharray="13.5 100"
                      strokeDashoffset="-74.9"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="5"
                      strokeDasharray="11.6 100"
                      strokeDashoffset="-88.4"
                    />
                  </svg>
                </div>

                {/* Legend list */}
                <div className="space-y-1 text-[10px] text-slate-600 font-medium leading-tight">
                  <div className="flex justify-between items-center gap-2">
                    <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#FFD200]" /> Needs</span>
                    <strong className="text-slate-900 font-mono">52.1%</strong>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-600" /> Wants</span>
                    <strong className="text-slate-900 font-mono">22.8%</strong>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-slate-950" /> Splits</span>
                    <strong className="text-slate-900 font-mono">13.5%</strong>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Savings</span>
                    <strong className="text-slate-900 font-mono">11.6%</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTRAL PHONE MOCKUP */}
            <div className="relative z-20 w-full max-w-[280px] sm:max-w-[310px] rounded-t-[44px] border-[6px] border-b-0 border-slate-950 bg-slate-950 p-2.5 pt-3.5 shadow-2xl shadow-amber-900/30">
              {/* Dynamic Island Notch */}
              <div className="mx-auto mb-2.5 h-4 w-24 rounded-full bg-slate-900 flex items-center justify-between px-2">
                <div className="h-2 w-2 rounded-full bg-slate-800" />
                <div className="h-1.5 w-8 rounded-full bg-slate-800" />
              </div>

              {/* Phone Display Content */}
              <div className="rounded-t-[34px] bg-slate-50 p-3.5 space-y-3 text-slate-900 min-h-[410px]">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 px-1">
                  <span>9:41</span>
                  <span>Translate</span>
                  <div className="flex items-center gap-1 text-[9px]">
                    <span>5G</span>
                    <span className="h-2 w-3 rounded-sm border border-slate-400 inline-block" />
                  </div>
                </div>

                {/* Yellow Gradient Credit / MoMo Card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#FFD200] via-[#FACC15] to-[#EAB308] text-slate-950 shadow-md space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-800/80">MoMo Card</div>
                      <div className="text-base font-black tracking-tight">10,000$ / GHS</div>
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-slate-900">VISA</span>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-slate-900">
                    <span>•••• 4028</span>
                    <span className="font-bold">08/29</span>
                  </div>
                </div>

                {/* Sub balance & mini chart */}
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
                  <div className="text-[10px] text-slate-400 font-medium">Recent Activity</div>
                  <div className="text-lg font-black text-slate-950 font-display">GHS 450.00</div>
                  <div className="h-8 w-full pt-1">
                    <svg viewBox="0 0 100 25" className="w-full h-full stroke-amber-500 fill-amber-100/50">
                      <path d="M0,20 Q20,5 40,15 T70,8 T100,12 L100,25 L0,25 Z" />
                      <path d="M0,20 Q20,5 40,15 T70,8 T100,12" fill="none" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Quick 1-tap trigger */}
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full py-2 rounded-xl bg-[#FFD200] hover:bg-[#FACC15] text-slate-950 font-black text-xs shadow-sm transition-all"
                >
                  ⚡ Pay with MoMo
                </button>
              </div>
            </div>

            {/* FLOATING ITEM 3: AMOUNT RECEIVED & SPENT PILLS (TOP RIGHT) */}
            <div className="absolute top-4 right-0 sm:right-6 z-30 space-y-2 hidden sm:block">
              <div className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-2 text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Amount Received:</span>
                <span className="font-extrabold text-emerald-600 flex items-center gap-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> + $965
                </span>
              </div>

              <div className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center gap-2 text-xs">
                <span className="text-[11px] text-slate-500 font-medium">Amount Spent:</span>
                <span className="font-extrabold text-rose-600 flex items-center gap-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> - $950
                </span>
              </div>
            </div>

            {/* FLOATING ITEM 4: AMOUNT SAVED CARD (BOTTOM RIGHT) */}
            <div className="absolute bottom-8 right-0 sm:right-6 z-30 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-xs space-y-1 hidden sm:block">
              <div className="text-[10px] text-slate-400 font-medium">Amount Saved</div>
              <div className="flex items-center gap-2.5">
                <span className="text-base font-black text-slate-950">$734.50</span>
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  +4.2% ↗
                </span>
              </div>
            </div>

          </div>

          {/* Bottom watermark */}
          <div className="pt-4 text-center">
            <span className="font-display font-extrabold text-sm tracking-widest text-slate-400/80 uppercase">
              mova space
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: THE RELATABLE PROBLEM (CRIBA TONE: "SHOULDN'T FEEL LIKE THIS") */}
      {/* ========================================================================= */}
      <div id="features" className="w-full py-20 px-6 sm:px-12 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
            Managing money together <br />
            <span className="text-amber-600">shouldn’t feel like a second job.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Most friend groups and event organizers run into the exact same painful issues, over and over, before everyone’s share is settled.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <ImageIcon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              The Screenshot Graveyard
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              WhatsApp groups flooded with 30 unverified SMS screenshots that the organizer has to cross-reference and tally row by row.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <Smartphone className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              The 10-Digit Gamble
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              One mistyped digit on <span className="font-mono text-slate-700">024 XXX XXXX</span> and your contribution is sent to a stranger with zero instant refund.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              The Debt Collector Cringe
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Nobody likes sending <em>"Bro, did you see my MoMo request yet?"</em> five times in a week to their own friends or coworkers.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2B: INTERACTIVE FRICTION CALCULATOR (CRIBA "TRY IT YOURSELF" STYLE)*/}
      {/* ========================================================================= */}
      <div id="calculator" className="w-full py-20 px-6 sm:px-12 bg-amber-50/40 border-t border-amber-200/50">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold bg-[#FFD200] text-slate-950">
              Try It Yourself
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
              See what chasing group money actually costs.
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Same group expense, two very different realities. Slide to your group budget and see how much stress Mova removes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
            {/* Slider Column */}
            <div className="lg:col-span-6 p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Group Total Budget</label>
                <div className="text-3xl font-black text-slate-950 font-display mt-1">
                  GHS {calcAmount.toLocaleString()}
                </div>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="100"
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(parseInt(e.target.value))}
                  className="w-full mt-3 accent-[#EAB308] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                  <span>GHS 200</span>
                  <span>GHS 5,000</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Group Members</label>
                <div className="flex items-center gap-3 mt-2">
                  {[3, 4, 6, 8, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setCalcMembers(num)}
                      className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
                        calcMembers === num
                          ? "bg-slate-950 text-[#FFD200] shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {num} people
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-2">
                  Each person pays: <strong className="text-slate-900 font-mono">GHS {Math.round(calcAmount / calcMembers)}</strong>
                </p>
              </div>
            </div>

            {/* Comparison Cards Column */}
            <div className="lg:col-span-6 space-y-4">
              {/* WhatsApp Route */}
              <div className="p-5 rounded-2xl bg-white border border-rose-100 shadow-sm space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-rose-600">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> The WhatsApp & MoMo Way</span>
                  <span className="text-slate-400">Takes ~3 days</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-1.5 pt-1">
                  <li className="flex items-center gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>15+ awkward reminder messages sent in group chat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{calcMembers} unverified screenshots to manually match</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>High risk of 1 mistyped phone number transfer</span>
                  </li>
                </ul>
              </div>

              {/* Mova Route */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-emerald-50/40 border border-amber-300 shadow-sm space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-950">
                  <span className="flex items-center gap-1.5 text-emerald-800">
                    <CheckCheck className="w-4 h-4 text-emerald-600" /> With Mova
                  </span>
                  <span className="text-emerald-700 font-bold">Takes ~90 seconds</span>
                </div>
                <ul className="text-xs text-slate-700 space-y-1.5 pt-1">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>1 shareable link: friends tap and confirm MoMo PIN</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Automatic check-off: real-time live progress meter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Zero manual math or awkward debt collection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 3: THE CORE MOVA PRODUCTS                                         */}
      {/* ========================================================================= */}
      <div id="products" className="w-full py-20 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
            Four Connected Products. <br />
            <span className="text-amber-600">One Unified MoMo Social Layer.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Everything you need to send, split, collect, and sell money socially in Ghana.
          </p>

          {/* Product Switcher Tabs in Yellow & Slate */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("SPLIT")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "SPLIT"
                  ? "bg-[#FFD200] text-slate-950 shadow-md shadow-amber-400/30"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Mova Split (Groups)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("PAY")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "PAY"
                  ? "bg-[#FFD200] text-slate-950 shadow-md shadow-amber-400/30"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Mova Pay (@Handles)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("FUND")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "FUND"
                  ? "bg-[#FFD200] text-slate-950 shadow-md shadow-amber-400/30"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Mova Fund (Causes)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("MERCHANT")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "MERCHANT"
                  ? "bg-[#FFD200] text-slate-950 shadow-md shadow-amber-400/30"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Mova for Merchants
            </button>
          </div>
        </div>

        {/* Active Product Showcase */}
        <div className="mt-12 max-w-5xl mx-auto">
          {activeTab === "SPLIT" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-amber-50/40 border border-amber-200/60">
              <div className="md:col-span-7 space-y-4">
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                  For Roommates & Friends
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  Split Any Expense with 1-Click WhatsApp Links
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dinner checks, generator fuel, WiFi subscriptions, or road trip transport. Create a split, share the link to your WhatsApp group, and let Mova automatically tally contributions as members approve their MoMo prompt.
                </p>
                <div className="pt-2">
                  <Link
                    href="/split"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-950"
                  >
                    <span>Try the Group Split builder</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-xs">
                <div className="font-bold text-slate-900">Friday Pizza & Drinks (GHS 300)</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>4 members • GHS 75 each</span>
                    <span className="text-emerald-600 font-bold">3/4 Settled</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFD200] rounded-full w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "PAY" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-amber-50/40 border border-amber-200/60">
              <div className="md:col-span-7 space-y-4">
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                  Digital Financial Identity
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  Say Goodbye to Sharing 10-Digit Phone Numbers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Keep your personal phone number private. Claim your personal Mova handle like <strong className="text-slate-900">@gabriel</strong>. Friends verify your photo and verified name before confirming payment.
                </p>
                <div className="pt-2">
                  <a
                    href="#waitlist"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-950"
                  >
                    <span>Reserve your @handle on the waitlist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <div className="md:col-span-5 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-xs text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-[#FFD200] text-slate-950 flex items-center justify-center font-bold text-xl shadow-md">
                  GO
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Gabriel Okello</h4>
                  <p className="font-mono text-amber-700 text-xs font-bold">@gabriel</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "FUND" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-amber-50/40 border border-amber-200/60">
              <div className="md:col-span-7 space-y-4">
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                  Community Crowdfunding & Goals
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  Raise Money for Causes with Full Transparency
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Birthdays, funerals, school fees, medical support, or community projects. Donors contribute via MoMo and watch the funding meter rise live.
                </p>
                <div className="pt-2">
                  <Link
                    href="/fund"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-950"
                  >
                    <span>Explore active campaigns</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-xs">
                <span className="text-[10px] font-bold text-amber-700 uppercase">Live Campaign</span>
                <div className="font-bold text-slate-900 text-sm">Help Sarah Launch Her Bakery</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-900">GHS 12,500</span>
                    <span className="text-slate-400">Target: GHS 15,000</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFD200] rounded-full w-[83%]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "MERCHANT" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-amber-50/40 border border-amber-200/60">
              <div className="md:col-span-7 space-y-4">
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                  For Campus Vendors & Stalls
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  Fast QR Checkout & Group Lunch Pre-Orders
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Food vendors like <strong className="text-slate-900">@AmaKitchen</strong> can collect payments without expensive card terminals. Customers scan QR codes and pay via MoMo with zero fake SMS scam risk.
                </p>
                <div className="pt-2">
                  <Link
                    href="/merchant"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-950"
                  >
                    <span>Visit the Merchant Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-xs text-center">
                <div className="h-12 w-12 mx-auto rounded-2xl bg-[#FFD200]/30 text-slate-900 flex items-center justify-center font-bold">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Ama's Campus Kitchen</h4>
                  <p className="font-mono text-amber-700 text-xs font-bold">@amakitchen</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 4: TIKTOK LIVE SPOTLIGHT                                          */}
      {/* ========================================================================= */}
      <div className="w-full py-20 px-6 sm:px-12 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                COMING SOON: TIKTOK LIVE & SOCIAL
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                Contribute Directly Inside TikTok Live & Telegram Group Chats
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                African creators lose huge percentages to virtual coins. Mova's upcoming in-stream button lets fans tip and crowdfund directly using their MTN MoMo wallets with real-time broadcast alerts.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/live"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FFD200] hover:bg-[#FACC15] text-slate-950 px-5 py-2.5 text-xs font-black shadow-lg shadow-amber-400/20 transition-all active:scale-95"
                >
                  <span>Test the TikTok Live Interactive Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2 max-w-[240px]">
                <div className="h-10 w-10 mx-auto rounded-full bg-[#FFD200] text-slate-950 flex items-center justify-center font-bold text-sm">
                  ₵
                </div>
                <div className="text-xs font-bold text-white">In-Stream MoMo Tipping</div>
                <p className="text-[10px] text-slate-400">
                  Live broadcast alerts & 100% direct mobile money payouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 5: WHY MOVA WINS                                                  */}
      {/* ========================================================================= */}
      <div id="why-mova" className="w-full py-20 px-6 sm:px-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
              Why Mova Wins Over WhatsApp & Spreadsheets
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Comparing manual mobile money chaos against Mova's automated social layer.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-4 px-6">Capability</th>
                  <th className="py-4 px-6 text-rose-600">The Old Way (WhatsApp + Screenshots)</th>
                  <th className="py-4 px-6 text-amber-900 bg-amber-50">The Mova Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">User Identification</td>
                  <td className="py-4 px-6 text-slate-500">Raw 10-digit SIM (typo errors)</td>
                  <td className="py-4 px-6 text-amber-950 font-bold bg-amber-50/50">Verified @handles with recipient confirmation</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Group Tracking</td>
                  <td className="py-4 px-6 text-slate-500">Manual spreadsheets & lost chats</td>
                  <td className="py-4 px-6 text-amber-950 font-bold bg-amber-50/50">Automatic real-time progress & check-offs</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">Proof of Payment</td>
                  <td className="py-4 px-6 text-slate-500">Fakeable SMS screenshots</td>
                  <td className="py-4 px-6 text-amber-950 font-bold bg-amber-50/50">Direct USSD settlement receipts on MTN rail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 6: VIP WAITLIST SECTION (EXACT TRIPTYCH DESIGN AS REQUESTED)     */}
      {/* ========================================================================= */}
      <div id="waitlist" className="w-full py-20 px-4 sm:px-10 bg-[#EDF0F8] text-slate-900 border-t border-slate-200">
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Section Header Title & Subtitle */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-950">
              Reserve Your @Handle on the VIP Waitlist
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Join over 1,428 Ghanaians locking in their identity before the official public beta rollout.
            </p>
          </div>

          {/* TRIPTYCH CONTAINER WITH DASHED OUTLINE & SIDE VERTICAL PILLS (EXACT REPLICA) */}
          <div className="relative flex items-center justify-center">
            
            {/* Left Vertical Pill: Identity */}
            <div className="hidden xl:flex absolute -left-5 z-20 items-center justify-center w-9 h-36 rounded-2xl bg-[#1E3EF8] text-white font-bold text-[11px] tracking-widest [writing-mode:vertical-lr] rotate-180 shadow-md">
              Identity
            </div>

            {/* Right Vertical Pill: 0% Fees */}
            <div className="hidden xl:flex absolute -right-5 z-20 items-center justify-center w-9 h-36 rounded-2xl bg-[#1E3EF8] text-white font-bold text-[11px] tracking-widest [writing-mode:vertical-lr] rotate-180 shadow-md">
              0% Fees
            </div>

            {/* Dashed outer box */}
            <div className="w-full border-2 border-dashed border-slate-300 rounded-[36px] p-4 sm:p-6 lg:p-8">
              
              {/* The 3 Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                
                {/* CARD 1 (LEFT - WHITE) */}
                <div className="rounded-3xl bg-white p-7 sm:p-8 shadow-md border border-slate-100 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    {/* Top Row: Circular number badge 1 */}
                    <div className="flex items-center justify-between">
                      <div className="h-9 w-9 rounded-full bg-slate-100 text-slate-800 font-bold text-sm flex items-center justify-center shadow-inner">
                        1
                      </div>
                    </div>

                    {/* Outline House / Identity Icon */}
                    <div className="flex justify-center pt-2">
                      <div className="h-16 w-16 text-slate-800 flex items-center justify-center">
                        <HomeIcon className="w-12 h-12 stroke-[1.5]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 font-display">
                        Reserving Your @Handle:
                      </h3>
                      <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <span className="h-2 w-2 rounded-full bg-[#1E3EF8] mt-1.5 shrink-0" />
                        <p>
                          Secure your unique personal or business identity (e.g. <strong>@kofi</strong>, <strong>@amakitchen</strong>) before the public launch. Guaranteed reserved forever with zero name squatting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 2 (CENTER - THE ELEVATED ROYAL BLUE HERO CARD) */}
                <div className="rounded-3xl bg-[#1E3EF8] text-white p-7 sm:p-8 shadow-2xl shadow-blue-600/30 flex flex-col justify-between space-y-6 lg:-translate-y-2 lg:scale-[1.03] transition-all">
                  <div className="space-y-6">
                    {/* Top Row: Circular number badge 2 */}
                    <div className="flex items-center justify-between">
                      <div className="h-9 w-9 rounded-full bg-white text-[#1E3EF8] font-bold text-sm flex items-center justify-center shadow-md">
                        2
                      </div>
                    </div>

                    {/* Network Hub Icon (exact replica from image) */}
                    <div className="flex justify-center pt-2">
                      <div className="h-16 w-16 text-white flex items-center justify-center">
                        <svg viewBox="0 0 48 48" className="w-12 h-12 stroke-current fill-none stroke-[1.75]">
                          <circle cx="24" cy="24" r="5" fill="currentColor" />
                          <circle cx="12" cy="14" r="3" fill="currentColor" />
                          <circle cx="36" cy="14" r="3" fill="currentColor" />
                          <circle cx="10" cy="34" r="3" fill="currentColor" />
                          <circle cx="38" cy="34" r="3" fill="currentColor" />
                          <circle cx="24" cy="40" r="3" fill="currentColor" />
                          <line x1="24" y1="19" x2="24" y2="9" />
                          <circle cx="24" cy="7" r="3" fill="currentColor" />
                          <line x1="20" y1="21" x2="14" y2="16" />
                          <line x1="28" y1="21" x2="34" y2="16" />
                          <line x1="20" y1="27" x2="12" y2="32" />
                          <line x1="28" y1="27" x2="36" y2="32" />
                          <line x1="24" y1="29" x2="24" y2="37" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-white font-display">
                        0% Platform Fees:
                      </h3>
                      <div className="flex items-start gap-2.5 text-xs text-blue-100 leading-relaxed">
                        <span className="h-2 w-2 rounded-full bg-white mt-1.5 shrink-0" />
                        <p>
                          Founding members enjoy 0% Mova service fees on their first 15 group bill splits, campaign collections, and vendor pre-orders. Direct settlement to your MTN MoMo wallet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 3 (RIGHT - WHITE) */}
                <div className="rounded-3xl bg-white p-7 sm:p-8 shadow-md border border-slate-100 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    {/* Top Row: Circular number badge 3 */}
                    <div className="flex items-center justify-between">
                      <div className="h-9 w-9 rounded-full bg-slate-100 text-slate-800 font-bold text-sm flex items-center justify-center shadow-inner">
                        3
                      </div>
                    </div>

                    {/* Handshake Icon */}
                    <div className="flex justify-center pt-2">
                      <div className="h-16 w-16 text-slate-800 flex items-center justify-center">
                        <Handshake className="w-12 h-12 stroke-[1.5]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 font-display">
                        Priority Beta & Founding Badge:
                      </h3>
                      <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                        <span className="h-2 w-2 rounded-full bg-[#1E3EF8] mt-1.5 shrink-0" />
                        <p>
                          Get first-in-line access to TikTok Live in-stream payments, Telegram bot split commands, and a verified gold founding shield displayed permanently on your profile.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* BOTTOM METADATA BAR (EXACT FROM REFERENCE IMAGE) */}
          <div className="space-y-3 pt-2">
            <div className="text-[11px] text-slate-500 italic">
              Source: MTN Mobile Money Verified Social Layer
            </div>
            <div className="border-t border-slate-300/80 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xl font-black tracking-tight font-display text-slate-950">
                MOVA
              </div>
              <div className="flex items-center gap-6 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-slate-500" />
                  <Instagram className="w-4 h-4 text-slate-500" />
                  <Youtube className="w-4 h-4 text-slate-500" />
                  <span className="font-semibold text-slate-800">@movapay</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-800 font-bold">
                  <Globe className="w-4 h-4 text-[#1E3EF8]" />
                  <span>mova.app</span>
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE WAITLIST SIGNUP FORM */}
          <div className="mt-8 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl max-w-3xl mx-auto">
            {waitlistSuccess ? (
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 font-display">You're on the VIP Waitlist!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  You have reserved <strong>{waitlistSuccess.handle}</strong> as position <strong>#{waitlistSuccess.queueNumber}</strong>. We will message you when beta invites drop.
                </p>
                <button
                  type="button"
                  onClick={copyReferralLink}
                  className="py-2.5 px-6 rounded-full bg-[#1E3EF8] hover:bg-blue-700 text-white font-bold text-xs shadow-md"
                >
                  {copiedReferral ? "Referral Link Copied!" : "Share Link on WhatsApp"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <div className="text-center space-y-1 pb-2">
                  <h3 className="text-xl font-extrabold text-slate-950 font-display">Claim Your Spot Below</h3>
                  <p className="text-xs text-slate-500">Zero fees. Direct settlement to your MTN MoMo wallet.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Desired @Handle
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 font-bold text-slate-400 text-sm">@</span>
                      <input
                        type="text"
                        required
                        placeholder="e.g. kofi_mensah"
                        value={desiredHandle}
                        onChange={(e) => setDesiredHandle(cleanHandle(e.target.value))}
                        className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E3EF8]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Phone Number or Email
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="024 XXX XXXX or email"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E3EF8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Primary Use Case
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#1E3EF8]"
                  >
                    <option value="Personal & Friend Groups">Personal & Friend Group Splits</option>
                    <option value="TikTok & Content Creator">TikTok Live & Content Creator</option>
                    <option value="Campus & Small Merchant">Campus Food Vendor / Small Merchant</option>
                    <option value="Fundraiser & Community Organizer">Fundraising & Community Organizer</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isJoiningWaitlist}
                  className="w-full py-3 rounded-xl bg-[#1E3EF8] hover:bg-blue-700 text-white font-bold text-xs shadow-lg shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {isJoiningWaitlist ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Reserving Your VIP Spot...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Claim My Free Handle & Join Waitlist</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 7: FAQ                                                            */}
      {/* ========================================================================= */}
      <div id="faq" className="w-full py-20 px-6 sm:px-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-950 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Everything you need to know about Mova and the upcoming beta.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Do my friends need to download an app to contribute?",
                a: "No! When you share a Mova link on WhatsApp, friends simply tap the link in their browser, enter their phone number, and approve the official MTN MoMo USSD prompt on their phones.",
              },
              {
                q: "Is Mova a new mobile money wallet?",
                a: "No. You don't need to deposit money into a new wallet or deal with cashouts. Mova connects directly to your existing MTN Mobile Money wallet.",
              },
              {
                q: "How does Mova prevent wrong-number transfers?",
                a: "Instead of typing raw 10-digit SIM numbers, Mova uses verified handles like @gabriel. Before confirming any transfer, you see the recipient's verified photo and registered name.",
              },
              {
                q: "Is it completely free to join the waitlist?",
                a: "Yes! Joining the waitlist and claiming your unique @handle is 100% free and reserves your founding member perks.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FOOTER: FULL SCREEN WIDTH                                                 */}
      {/* ========================================================================= */}
      <footer className="w-full border-t border-slate-200 bg-slate-50 py-14 px-6 sm:px-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-[#FFD200] font-black text-xs">
                §
              </div>
              <span className="font-extrabold text-slate-900 text-sm">Mova</span>
              <span className="text-slate-400">| Money moves better together.</span>
            </div>
            <p className="text-[11px] text-slate-400">
              The connected payment and collective finance platform powered by MTN Mobile Money.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-slate-600">
            <Link href="/split" className="hover:text-amber-700">Mova Split</Link>
            <Link href="/fund" className="hover:text-amber-700">Mova Fund</Link>
            <Link href="/merchant" className="hover:text-amber-700">Merchant Hub</Link>
            <Link href="/live" className="text-amber-700 hover:text-amber-800 font-bold">TikTok Live & Social</Link>
            <a href="#waitlist" className="hover:text-amber-700">Join Waitlist</a>
          </div>
        </div>
        <div className="mt-8 text-center text-[10px] text-slate-400 border-t border-slate-200/60 pt-4 max-w-7xl mx-auto">
          © 2026 Mova Technologies • The connected social layer for MTN Mobile Money. Money moves better together.
        </div>
      </footer>

      {/* Interactive MoMo Modal */}
      <MoMoCheckoutModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        details={{
          recipientName: "Weekend Trip to Ada",
          recipientHandle: "@sadick",
          recipientPhone: "055 491 8832",
          amount: 200,
          currency: "GHS",
          purpose: "MoMo Prototype Verification",
        }}
      />
    </div>
  );
}
