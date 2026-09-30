"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  ArrowDownLeft,
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
  ChevronRight,
  Award,
  Layers,
  FileSpreadsheet,
  Image as ImageIcon,
} from "lucide-react";
import { MoMoCheckoutModal } from "@/components/modules/MoMoCheckoutModal";
import { formatCurrency } from "@/lib/utils";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"PAY" | "SPLIT" | "FUND">("SPLIT");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Group split simulation
  const [splitContributors, setSplitContributors] = useState([
    { name: "Gabriel Okello", handle: "@gabriel", amount: 200, status: "PAID" },
    { name: "Sadick Abubakar", handle: "@sadick", amount: 200, status: "PAID" },
    { name: "Abena Mensah", handle: "@abena_m", amount: 200, status: "PAID" },
    { name: "Kofi Owusu", handle: "@kofi_tech", amount: 200, status: "AWAITING_PIN" },
  ]);

  const totalSplitBudget = 800;
  const collectedSplit = splitContributors
    .filter((c) => c.status === "PAID")
    .reduce((sum, c) => sum + c.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#C7D9FE] via-[#E2EDFF] to-[#BED4FE] py-4 sm:py-8 px-2 sm:px-6 flex flex-col items-center justify-center font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* ========================================================================= */}
      {/* MAIN WHITE CANVAS CARD CONTAINER (EXACT SPEC COMPLIANT)                   */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[1240px] rounded-[32px] sm:rounded-[44px] bg-white border border-white/60 shadow-[0_30px_90px_-20px_rgba(37,99,235,0.25)] overflow-hidden">
        
        {/* ========================================================================= */}
        {/* TOP NAVBAR                                                               */}
        {/* ========================================================================= */}
        <header className="flex h-20 items-center justify-between px-6 sm:px-12 pt-2 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950 text-white font-extrabold text-sm tracking-tighter">
              <span className="font-serif italic text-base">§</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
              Mova
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-slate-600">
            <Link href="#problem" className="hover:text-slate-950 transition-colors">
              The Problem
            </Link>
            <Link href="#products" className="hover:text-slate-950 transition-colors">
              3 Core Products
            </Link>
            <Link href="#identity" className="hover:text-slate-950 transition-colors">
              Digital Identity
            </Link>
            <Link href="#merchants" className="hover:text-slate-950 transition-colors">
              Merchants
            </Link>
            <Link href="#competition" className="hover:text-slate-950 transition-colors">
              MoMo Lab Tracks
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/split"
              className="hidden sm:inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Split Bill
            </Link>
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="rounded-full bg-[#0D62FE] hover:bg-blue-700 text-white px-5 py-2.5 text-xs font-bold shadow-md shadow-blue-500/20 transition-all active:scale-95"
            >
              Test MoMo Rail
            </button>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* HERO SECTION (EXACT HERO DESIGN FROM REFERENCE)                           */}
        {/* ========================================================================= */}
        <section className="pt-10 sm:pt-14 pb-8 text-center px-4 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/80 px-3.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm">
            <span className="text-xs">✧</span>
            <span>MoMo Fintech Lab Competition Entry</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-black tracking-tight text-slate-950 font-display leading-[1.05] uppercase">
            MONEY MOVES <br />
            <span className="bg-gradient-to-r from-slate-950 via-[#0F3580] to-[#0D62FE] bg-clip-text text-transparent">
              BETTER TOGETHER
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed font-normal pt-1">
            Mova connects people, groups, communities, and businesses to MoMo — making it simple to request, split, collect, and raise money without spreadsheets, screenshots, and manual chasing.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-3 rounded-full bg-[#0D62FE] hover:bg-blue-700 text-white pl-2 pr-6 py-2 text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 transition-all active:scale-95 group"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0D62FE] shadow-sm transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5 stroke-[3]" />
              </span>
              <span>Try Live Demo</span>
            </button>
            <Link
              href="/split"
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Create a Group Split
            </Link>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* HERO GRAPHIC STAGE: VERTICAL FLUTED BLUE PILLARS & PHONE STAGE             */}
        {/* ========================================================================= */}
        <div className="relative mt-2 pt-10 pb-0 px-4 overflow-hidden flex flex-col items-center justify-end min-h-[460px] sm:min-h-[520px]">
          {/* Vertical Ribbed Backdrop */}
          <div className="absolute inset-x-0 bottom-0 top-12 flex justify-between pointer-events-none -z-10 opacity-90 px-2 sm:px-6">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="w-full mx-[2px] sm:mx-1 rounded-t-xl bg-gradient-to-t from-[#2563EB] via-[#60A5FA]/60 to-transparent transition-all"
                style={{
                  height: "100%",
                  opacity: 0.15 + (i % 2 === 0 ? 0.25 : 0.45),
                  background: `linear-gradient(to top, #1D4ED8 0%, #3B82F6 40%, rgba(147, 197, 253, 0.4) 75%, transparent 100%)`,
                }}
              />
            ))}
          </div>

          <div className="relative w-full max-w-[820px] flex items-end justify-center">
            {/* Trend icon */}
            <div className="absolute -top-6 sm:top-2 left-4 sm:left-14 z-20">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#0D62FE] text-white shadow-xl shadow-blue-600/40 border-[3px] border-white">
                <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8 stroke-[2.5]" />
              </div>
            </div>

            {/* Budget Scores Donut Card */}
            <div className="absolute bottom-10 sm:bottom-16 left-0 sm:left-4 z-20 w-[240px] sm:w-[280px] rounded-2xl bg-white/95 p-4 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.18)] border border-slate-100 backdrop-blur-md">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                <span className="font-bold text-slate-900">Budget Scores</span>
                <span className="text-[11px] text-slate-400 flex items-center gap-0.5">
                  Weekend Trip <ChevronDown className="h-3 w-3" />
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="relative h-16 w-16 shrink-0">
                  <svg viewBox="0 0 36 36" className="h-full w-full rotate-[-90deg]">
                    <circle cx="18" cy="18" r="14" fill="transparent" stroke="#E2E8F0" strokeWidth="6" />
                    <circle cx="18" cy="18" r="14" fill="transparent" stroke="#0D62FE" strokeWidth="6" strokeDasharray="45 100" strokeDashoffset="0" />
                    <circle cx="18" cy="18" r="14" fill="transparent" stroke="#06B6D4" strokeWidth="6" strokeDasharray="25 100" strokeDashoffset="-45" />
                    <circle cx="18" cy="18" r="14" fill="transparent" stroke="#3B82F6" strokeWidth="6" strokeDasharray="15 100" strokeDashoffset="-70" />
                    <circle cx="18" cy="18" r="14" fill="transparent" stroke="#93C5FD" strokeWidth="6" strokeDasharray="15 100" strokeDashoffset="-85" />
                  </svg>
                </div>
                <div className="flex-1 space-y-1 text-[10px] font-medium text-slate-600">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#0D62FE]" /> Food & BBQ</span>
                    <span className="font-bold text-slate-900 font-mono">52.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" /> Villa Stay</span>
                    <span className="font-bold text-slate-900 font-mono">22.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" /> Transport</span>
                    <span className="font-bold text-slate-900 font-mono">13.9%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Phone */}
            <div className="relative z-10 w-[240px] sm:w-[280px] rounded-t-[44px] bg-slate-950 p-2 sm:p-2.5 pb-0 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.4)] border-4 border-b-0 border-slate-800">
              <div className="rounded-t-[36px] bg-white overflow-hidden p-3.5 sm:p-4 pb-10 space-y-3.5 text-slate-900 min-h-[360px] sm:min-h-[420px]">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-1">
                  <span>9:41</span>
                  <div className="h-3.5 w-16 rounded-full bg-slate-950" />
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-slate-400" />
                    <div className="h-2 w-3 rounded-sm bg-slate-400" />
                  </div>
                </div>

                <div className="text-center pt-1">
                  <span className="text-xs font-bold text-slate-800 font-display">Mova Social Rail</span>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#0D62FE] via-[#1E40AF] to-[#0A2563] p-4 text-white shadow-md space-y-3 relative overflow-hidden">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-white/70">MTN MoMo Balance</span>
                    <div className="text-xl font-black font-display tracking-tight">
                      GHS 10,000
                    </div>
                  </div>
                  <div className="pt-2 flex justify-between items-end text-[10px] font-mono text-white/80">
                    <span className="font-bold tracking-widest text-xs">MoMo</span>
                    <span>@gabriel</span>
                  </div>
                </div>

                <div className="pt-1 text-center space-y-1">
                  <div className="text-2xl font-black font-display text-slate-900 tracking-tight">
                    GHS 600.00
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block">
                    Weekend Trip Collected (75%)
                  </span>
                  <div className="pt-2 h-10 w-full flex items-end justify-center">
                    <svg viewBox="0 0 100 25" className="w-full h-full text-blue-600 overflow-visible">
                      <path d="M0 20 Q 25 5, 50 15 T 100 5 L 100 25 L 0 25 Z" fill="rgba(13, 98, 254, 0.12)" />
                      <path d="M0 20 Q 25 5, 50 15 T 100 5" fill="none" stroke="#0D62FE" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Received / Spent Pills */}
            <div className="absolute top-4 sm:top-8 right-0 sm:right-6 z-20 flex flex-col gap-2">
              <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-2.5 shadow-[0_12px_30px_-5px_rgba(15,23,42,0.15)] border border-slate-100 backdrop-blur-md">
                <span className="text-[11px] font-semibold text-slate-500">Collected</span>
                <span className="text-xs font-black text-emerald-600 font-mono flex items-center gap-0.5">
                  ↑ GHS 600
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-2.5 shadow-[0_12px_30px_-5px_rgba(15,23,42,0.15)] border border-slate-100 backdrop-blur-md">
                <span className="text-[11px] font-semibold text-slate-500">Awaiting PIN</span>
                <span className="text-xs font-black text-amber-500 font-mono flex items-center gap-0.5">
                  ⏳ GHS 200
                </span>
              </div>
            </div>

            {/* Amount Saved / Target */}
            <div className="absolute bottom-10 sm:bottom-16 right-0 sm:right-6 z-20 w-[200px] sm:w-[220px] rounded-2xl bg-white/95 p-4 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.18)] border border-slate-100 backdrop-blur-md space-y-1">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                Target Budget
              </span>
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-slate-900 font-display">
                  GHS 800.00
                </span>
                <span className="rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold">
                  75% Settled
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 1: THE PROBLEM SECTION (DOCUMENT SECTION 2 COMPLIANCE)               */}
        {/* ========================================================================= */}
        <section id="problem" className="py-20 px-6 sm:px-12 bg-slate-50/60 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-flex rounded-full bg-rose-50 border border-rose-100 px-3.5 py-1 text-xs font-bold text-rose-600">
              The Everyday Struggle
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
              Payments made moving money easy. <br />
              <span className="text-rose-600">Managing money together is still chaotic.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              When people organize a birthday, wedding, funeral, trip, or campus project, they still rely on fragmented WhatsApp threads, repeated MoMo numbers, and screenshot chasing.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Disconnected WhatsApp Way */}
            <div className="rounded-3xl border border-rose-200/80 bg-rose-50/30 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-rose-500" />
                  <h4 className="text-base font-bold text-slate-900 font-display">The WhatsApp Chaos</h4>
                </div>
                <span className="text-[11px] font-bold uppercase text-rose-600 bg-rose-100/60 px-2.5 py-0.5 rounded-full">
                  Before Mova
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-2xl bg-white border border-rose-100 space-y-1 text-slate-600">
                  <span className="text-[10px] text-slate-400 block font-sans">Kofi (10:14 AM)</span>
                  <p>Guys, send your GHS 200 for Ada to my number: 0244123456</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-rose-100 space-y-1 text-slate-600">
                  <span className="text-[10px] text-slate-400 block font-sans">Abena (11:02 AM)</span>
                  <p>Sent! Here is the screenshot 📸 [IMG_2026.png]</p>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-rose-100 space-y-1 text-slate-600">
                  <span className="text-[10px] text-slate-400 block font-sans">Kofi (3:45 PM)</span>
                  <p>Who sent the GHS 200 with ref "payment"? I can't reconcile my balance 😩</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-rose-900 font-medium">
                <div className="flex items-center gap-2"><XCircle className="h-4 w-4 text-rose-500 shrink-0" /> Shared spreadsheets that get out of date</div>
                <div className="flex items-center gap-2"><XCircle className="h-4 w-4 text-rose-500 shrink-0" /> One stressed organizer chasing everyone's money</div>
                <div className="flex items-center gap-2"><XCircle className="h-4 w-4 text-rose-500 shrink-0" /> Fraudulent and duplicate payment screenshots</div>
              </div>
            </div>

            {/* The Connected Mova Way */}
            <div className="rounded-3xl border border-blue-200/80 bg-blue-50/30 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <h4 className="text-base font-bold text-slate-900 font-display">The Mova Connected Rail</h4>
                </div>
                <span className="text-[11px] font-bold uppercase text-blue-600 bg-blue-100/60 px-2.5 py-0.5 rounded-full">
                  With Mova
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-sm space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">Weekend Trip to Ada</span>
                    <span className="text-[10px] text-slate-500">4 members • GHS 200/person</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    GHS 600 / 800
                  </span>
                </div>

                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[75%]" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                  <div className="flex items-center gap-1 text-emerald-600"><Check className="h-3 w-3" /> @gabriel: GHS 200 (Paid)</div>
                  <div className="flex items-center gap-1 text-emerald-600"><Check className="h-3 w-3" /> @sadick: GHS 200 (Paid)</div>
                  <div className="flex items-center gap-1 text-emerald-600"><Check className="h-3 w-3" /> @abena_m: GHS 200 (Paid)</div>
                  <div className="flex items-center gap-1 text-amber-600">⏳ @kofi_tech: GHS 200 (PIN sent)</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-blue-950 font-medium">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" /> Zero manual calculations or repeated MoMo numbers</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" /> Instant USSD push prompt directly to each phone</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" /> Real-time automatic tracking: who paid and who hasn't</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PART 2: THE THREE CORE PRODUCTS (SECTION 5 COMPLIANCE)                    */}
        {/* ========================================================================= */}
        <section id="products" className="py-20 px-6 sm:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-flex rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-bold text-blue-600">
              Core Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
              Three Powerful Products. <br />
              <span className="text-blue-600">One Unified MoMo Rail.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
              Whether requesting money individually, splitting bills in a group, or crowdfunding a community goal — Mova coordinates the social layer around MoMo.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 1. Mova Pay */}
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md">
                  <Send className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Direct Requests</span>
                  <h3 className="text-xl font-bold text-slate-900 font-display">Mova Pay</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Request money from another person without exchanging MoMo numbers.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-3.5 space-y-2 text-xs font-mono">
                  <div className="text-[10px] text-slate-400 font-sans">Example Flow:</div>
                  <div className="text-slate-900 font-bold">@Kofi → Requests GHS 150 from @Gabriel</div>
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 text-[11px] font-sans flex items-center justify-between">
                    <span>"Kofi requested GHS 150"</span>
                    <span className="font-bold underline cursor-pointer">Pay MoMo</span>
                  </div>
                </div>
              </div>

              <Link href="/pay" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700">
                <span>Explore Mova Pay</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* 2. Mova Split */}
            <div className="rounded-3xl border-2 border-blue-500 bg-white p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative">
              <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                Most Popular
              </div>

              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md">
                  <Receipt className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Group Bills</span>
                  <h3 className="text-xl font-bold text-slate-900 font-display">Mova Split</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Split bills, collect contributions, and automatically track who has paid.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 space-y-2 text-xs">
                  <div className="text-[10px] text-slate-400">Perfect for:</div>
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Weekend Trips</span>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Birthdays</span>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Weddings</span>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">School Projects</span>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Rent & Utilities</span>
                  </div>
                </div>
              </div>

              <Link href="/split" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700">
                <span>Start Group Split</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* 3. Mova Fund */}
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
                  <PiggyBank className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Fundraising</span>
                  <h3 className="text-xl font-bold text-slate-900 font-display">Mova Fund</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Create a financial goal, invite contributors, and raise funds transparently through MoMo.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-3.5 space-y-2 text-xs">
                  <div className="text-[10px] text-slate-400">Live Campaign Example:</div>
                  <div className="font-bold text-slate-900">Sarah's Artisan Bakery</div>
                  <div className="text-emerald-600 font-bold font-mono">GHS 12,500 of GHS 15,000 (127 backers)</div>
                </div>
              </div>

              <Link href="/fund" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700">
                <span>Explore Campaigns</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* HOW MOVA WORKS: 3-STEP FLOW (DOCUMENT SECTION 3)                          */}
          {/* ========================================================================= */}
          <div className="mt-20 pt-16 border-t border-slate-100 max-w-5xl mx-auto">
            <div className="text-center space-y-2 pb-10">
              <span className="inline-flex rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-bold text-blue-600">
                Simple 3-Step Flow
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display">
                How Mova Turns Chaos into 1-Click Payments
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
                From organizing a wedding to raising money for a project, moving money together has never been this seamless.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 space-y-4 relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white font-extrabold text-xs">
                    01
                  </span>
                  <span className="text-[10px] uppercase font-bold text-blue-600">Step 1</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display">Create a Goal</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Name your event and set your target budget. Choose from common goals:
                </p>
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 flex justify-between">
                    <span>Ama's Wedding</span>
                    <strong className="text-blue-600">GHS 10,000</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 flex justify-between">
                    <span>Class 2020 Reunion</span>
                    <strong className="text-blue-600">GHS 5,000</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 flex justify-between">
                    <span>Help Kofi Start Business</span>
                    <strong className="text-blue-600">GHS 20,000</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 flex justify-between">
                    <span>Weekend Trip to Ada</span>
                    <strong className="text-blue-600">GHS 3,000</strong>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 space-y-4 relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500 text-white font-extrabold text-xs">
                    02
                  </span>
                  <span className="text-[10px] uppercase font-bold text-amber-600">Step 2</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display">Invite People</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Share a smart link via WhatsApp, SMS, or social media. Each participant receives their personalized contribution request.
                </p>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between items-center font-bold text-slate-900">
                    <span>Gabriel Okello</span>
                    <span className="text-blue-600 font-mono">GHS 200</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    No copying numbers. No manual calculations.
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-[11px] transition-colors"
                  >
                    Pay with MoMo
                  </button>
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 space-y-4 relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white font-extrabold text-xs">
                    03
                  </span>
                  <span className="text-[10px] uppercase font-bold text-emerald-600">Step 3</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display">Everyone Pays via MoMo</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Mova reconciles each incoming transaction in real-time. The organizer sees automated clarity:
                </p>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-slate-900">Live Progress</span>
                    <span className="text-emerald-600 font-mono font-bold">72% funded</span>
                  </div>
                  <div className="text-slate-700 font-mono text-[11px] font-bold">
                    GHS 3,600 / GHS 5,000
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-[72%]" />
                  </div>
                  <div className="text-[10px] text-slate-400 pt-1">
                    ✓ Shows who paid • Who hasn't • Total collected • Remaining amount
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PART 3: DIGITAL FINANCIAL IDENTITY (SECTION 6 COMPLIANCE)                 */}
        {/* ========================================================================= */}
        <section id="identity" className="py-20 px-6 sm:px-12 bg-slate-50/80 border-t border-slate-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="inline-flex rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-bold text-blue-600">
                Digital Financial Identity
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-[1.15]">
                Say goodbye to <br />
                <span className="line-through text-slate-400 font-light">024 XXX XXXX</span>. <br />
                Say hello to <span className="text-blue-600 font-display">@handles</span>.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instead of copying phone numbers into WhatsApp groups and risking sending funds to the wrong SIM, Mova provides verified digital handles. Users verify who they are paying before typing their PIN.
              </p>

              <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-blue-600" /> <strong>@gabriel</strong> — Personal MoMo Tier 2 Verified</div>
                <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-blue-600" /> <strong>@amakitchen</strong> — Verified Campus Food Merchant</div>
                <div className="flex items-center gap-2.5"><CheckCircle2 className="h-4 w-4 text-blue-600" /> <strong>@htucsa</strong> — Student Association & Project Treasury</div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                      AK
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-slate-900 text-sm">Ama Kitchen & Grill</span>
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 fill-blue-50" />
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono">@amakitchen • Verified Till #910-234</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Active Merchant
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2 text-xs">
                  <span className="text-[10px] text-blue-600 uppercase font-bold tracking-wider">Payment Request Prompt</span>
                  <p className="font-semibold text-slate-900 text-sm">
                    "@amakitchen is requesting GHS 25 for Friday Lunch Pack."
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Recipient identity verified against MTN MoMo Telecom Registry.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
                >
                  Simulate Verified MoMo Payment (GHS 25)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PART 4: MERCHANT & CAMPUS GROWTH ENGINE (SECTION 7 COMPLIANCE)            */}
        {/* ========================================================================= */}
        <section id="merchants" className="py-20 px-6 sm:px-12 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-600">
              Merchant Opportunity
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
              Empowering Small Merchants & Campus Vendors
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
              Connecting merchant payments to group purchasing, countertop QR codes, and automated customer order history.
            </p>
          </div>

          <div className="mt-14 max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase font-mono">Case Study: @amakitchen</span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Batch Order: Friday Lunch Pack (20 Meals × GHS 25 = GHS 500)
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  18/20 Paid • GHS 450 Collected
                </span>
                <Link href="/merchant">
                  <button className="text-xs font-bold text-blue-600 underline">Open Merchant Portal ↗</button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                <QrCode className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-slate-900 block">Table QR Standees</span>
                <p className="text-[11px] text-slate-500">Scan-to-pay countertop displays for instant walk-up sales.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-slate-900 block">Group Lunch Ordering</span>
                <p className="text-[11px] text-slate-500">Students & offices join one link and settle individually.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                <Receipt className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-slate-900 block">Digital Micro-Receipts</span>
                <p className="text-[11px] text-slate-500">1-tap shareable WhatsApp order confirmation tickets.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-slate-900 block">Zero Surcharge</span>
                <p className="text-[11px] text-slate-500">Direct telecom wallet credit with automated reconciliations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PART 5: MOMO FINTECH LAB TRACK ALIGNMENT (SECTION 8 & 11 COMPLIANCE)      */}
        {/* ========================================================================= */}
        <section id="competition" className="py-20 px-6 sm:px-12 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-flex rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-bold text-blue-400">
              Fintech Lab Alignment
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight">
              Aligned with MTN MoMo Tracks
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              How Mova maps across the four competition categories to create a connected financial interaction layer.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-xs">
            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-[10px] uppercase font-bold text-brand">Primary Track</span>
              <h4 className="text-base font-bold text-white font-display">Everyday Payments</h4>
              <p className="text-slate-400 leading-relaxed">
                Bill splitting, payment requests, and effortless group contributions for daily life.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-[10px] uppercase font-bold text-blue-400">Secondary Track</span>
              <h4 className="text-base font-bold text-white font-display">Merchant Growth</h4>
              <p className="text-slate-400 leading-relaxed">
                Payment links, bulk lunch pre-orders, digital receipts, and customer loyalty tools.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-[10px] uppercase font-bold text-emerald-400">Secondary Track</span>
              <h4 className="text-base font-bold text-white font-display">Trust & Identity</h4>
              <p className="text-slate-400 leading-relaxed">
                Verified digital @handles, recipient verification shields, and fraud elimination.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-[10px] uppercase font-bold text-purple-400">Secondary Track</span>
              <h4 className="text-base font-bold text-white font-display">Future Finance</h4>
              <p className="text-slate-400 leading-relaxed">
                Community crowdfunding, savings milestones, and interconnected social ecosystems.
              </p>
            </div>
          </div>

          {/* MVP Architecture Visualizer */}
          <div className="mt-16 max-w-4xl mx-auto rounded-3xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand">System Architecture</span>
              <h4 className="text-xl font-bold font-display text-white">How Mova Interacts with the MoMo Rail</h4>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs text-center space-y-4">
              <div className="inline-block px-6 py-2.5 rounded-2xl bg-blue-600 text-white font-bold tracking-wider shadow-lg shadow-blue-500/20">
                MOVA INTERACTION LAYER
              </div>
              
              <div className="flex justify-center text-slate-500 text-base">│</div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white space-y-1">
                  <div className="text-blue-400 font-bold">MOVA PAY</div>
                  <div className="text-[10px] text-slate-400">P2P Payment Requests</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white space-y-1">
                  <div className="text-amber-400 font-bold">MOVA SPLIT</div>
                  <div className="text-[10px] text-slate-400">Group Goals & Bill Splits</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white space-y-1">
                  <div className="text-emerald-400 font-bold">MOVA FUND</div>
                  <div className="text-[10px] text-slate-400">Crowdfunding & Backing</div>
                </div>
              </div>

              <div className="flex justify-center text-slate-500 text-base">│</div>

              <div className="max-w-md mx-auto p-3 rounded-xl bg-slate-800/70 border border-blue-500/30 text-white text-[11px] space-y-0.5">
                <div className="font-bold text-blue-300">MOVA IDENTITY & TRUST REGISTRY</div>
                <div className="text-[10px] text-slate-400">Verified @handles • Recipient Validation • Real-time Tracking</div>
              </div>

              <div className="flex justify-center text-brand text-lg font-bold">▼</div>

              <div className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black tracking-wide shadow-md">
                MTN MoMo RAIL (Underlying Settlement & Liquidity Engine)
              </div>
            </div>

            {/* Technical API Inspector */}
            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  MTN MoMo API Integration Contract (Sandbox Ready)
                </span>
                <span className="text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-800">
                  POST /collection/v1_0/requesttopay
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto text-left leading-relaxed">
                <span className="text-slate-500">// Header Parameters</span><br />
                <span className="text-purple-400">X-Reference-Id</span>: <span className="text-emerald-400">"c7e2b6a9-4d81-4ef3-bf72-89b31d04ec92"</span><br />
                <span className="text-purple-400">X-Target-Environment</span>: <span className="text-emerald-400">"sandbox"</span><br />
                <span className="text-purple-400">Ocp-Apim-Subscription-Key</span>: <span className="text-emerald-400">"8f2a...momo_key"</span><br />
                <br />
                <span className="text-slate-500">// Payload Dispatched by Mova Group Engine</span><br />
                &#123;<br />
                &nbsp;&nbsp;<span className="text-blue-400">"amount"</span>: <span className="text-amber-300">"200.00"</span>,<br />
                &nbsp;&nbsp;<span className="text-blue-400">"currency"</span>: <span className="text-emerald-400">"GHS"</span>,<br />
                &nbsp;&nbsp;<span className="text-blue-400">"externalId"</span>: <span className="text-emerald-400">"MOVA-SPLIT-WEEKEND-ADA-04"</span>,<br />
                &nbsp;&nbsp;<span className="text-blue-400">"payer"</span>: &#123; <span className="text-blue-400">"partyIdType"</span>: <span className="text-emerald-400">"MSISDN"</span>, <span className="text-blue-400">"partyId"</span>: <span className="text-emerald-400">"233244123456"</span> &#125;,<br />
                &nbsp;&nbsp;<span className="text-blue-400">"payerMessage"</span>: <span className="text-emerald-400">"Weekend Trip Contribution via Mova"</span>,<br />
                &nbsp;&nbsp;<span className="text-blue-400">"payeeNote"</span>: <span className="text-emerald-400">"Settled to @sadick Group Treasury"</span><br />
                &#125;
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* FUTURE EXPANSION ROADMAP (DOCUMENT SECTION 12 COMPLIANCE)                 */}
          {/* ========================================================================= */}
          <div className="mt-20 pt-16 border-t border-slate-800 max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[10px] uppercase font-bold text-blue-400 tracking-widest">
                Strategic Horizon
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Beyond the MVP: Future Ecosystem Expansion
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                Once the core payment and collection layer is established, Mova unlocks deep financial integrations across the MoMo ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2 hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Verified Merchant IDs</span>
                  <span className="text-[9px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">Ready</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Cryptographically verified campus vendor badges linked to telecom national ID registries.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2 hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Automated Micro-Receipts</span>
                  <span className="text-[9px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">Ready</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Instant shareable WhatsApp proof-of-purchase eliminating dispute resolution headaches.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2 hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Community Susu & Savings</span>
                  <span className="text-[9px] uppercase font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-800">Phase 2</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Rotating informal savings groups (Susu/Chama) with automated MoMo direct debit schedules.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2 hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Fraud & Sim-Box Shield</span>
                  <span className="text-[9px] uppercase font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-800">Phase 2</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Heuristic velocity limits and biometric device binding to block impersonation scams.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2 hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Campus Loyalty & Cashback</span>
                  <span className="text-[9px] uppercase font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-800">Phase 2</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Automated points and student cashback discounts on every 5th meal ordered through Mova.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2 hover:border-slate-600 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Alternative Credit Scoring</span>
                  <span className="text-[9px] uppercase font-bold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-800">Ecosystem</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Transaction velocity and group settlement punctuality score unlocking MoMo micro-loans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PART 6: VALUE PROPOSITION, FAQ & EXECUTIVE FOOTER                         */}
        {/* ========================================================================= */}
        <section className="py-20 px-6 sm:px-12 bg-white">
          {/* Competition Pitch Card */}
          <div className="max-w-4xl mx-auto mb-20 rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50/40 to-white border border-blue-100 p-8 sm:p-12 shadow-sm space-y-6">
            <span className="inline-flex rounded-full bg-blue-600 text-white px-3 py-1 text-[11px] font-black uppercase tracking-wider">
              The MoMo Fintech Lab Pitch
            </span>
            <blockquote className="space-y-4 text-slate-800 font-medium leading-relaxed sm:text-lg">
              <p className="font-bold text-xl sm:text-2xl text-slate-950 font-display">
                "Someone owes you GHS 50. What do you send them? Their MoMo number."
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Now imagine you're organizing a birthday with five friends. Someone pays for the cake. Someone pays for food. Someone collects contributions. Suddenly, WhatsApp is full of MoMo numbers, screenshots, and messages asking, <em>"Have you paid?"</em>
              </p>
              <p className="text-sm sm:text-base font-semibold text-blue-700">
                MoMo made moving money easy. But managing money together is still surprisingly difficult. Mova changes that.
              </p>
            </blockquote>
          </div>

          {/* Value Proposition Comparison Table */}
          <div className="max-w-5xl mx-auto mb-20 space-y-8">
            <div className="text-center space-y-3">
              <span className="inline-flex rounded-full bg-emerald-50 border border-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-600">
                The Mova Advantage
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
                Why Mova Wins Over Traditional Workarounds
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
                Comparing manual WhatsApp chasing against Mova's automated social layer on top of MoMo.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-4 px-6">Capability</th>
                    <th className="py-4 px-6 text-rose-600">Traditional MoMo / WhatsApp</th>
                    <th className="py-4 px-6 text-blue-600 bg-blue-50/50">Mova Connected Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900">User Identification</td>
                    <td className="py-4 px-6 text-slate-500">Raw 10-digit SIM (error prone)</td>
                    <td className="py-4 px-6 text-blue-700 font-bold bg-blue-50/30">Verified @handles with recipient confirmation</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900">Group Contribution Tracking</td>
                    <td className="py-4 px-6 text-slate-500">Chasing screenshots & shared spreadsheets</td>
                    <td className="py-4 px-6 text-blue-700 font-bold bg-blue-50/30">Automated real-time ledger & settlement bar</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900">Payment Initiation</td>
                    <td className="py-4 px-6 text-slate-500">Manual dialing *170# & entering numbers</td>
                    <td className="py-4 px-6 text-blue-700 font-bold bg-blue-50/30">Direct USSD push prompt on participant's phone</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900">Community Crowdfunding</td>
                    <td className="py-4 px-6 text-slate-500">Foreign platforms requiring US/UK bank accounts</td>
                    <td className="py-4 px-6 text-blue-700 font-bold bg-blue-50/30">Local MoMo rails with instant wallet liquidity</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900">Micro-Merchant Orders</td>
                    <td className="py-4 px-6 text-slate-500">Verbal calls & unorganized WhatsApp DMs</td>
                    <td className="py-4 px-6 text-blue-700 font-bold bg-blue-50/30">Batch pre-orders, table QR standees & micro-receipts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="inline-flex rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-bold text-blue-600">
                Frequently Asked Questions
              </span>
              <h3 className="text-3xl font-extrabold text-slate-950 font-display">
                Everything You Need to Know About Mova
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              {[
                {
                  q: "Does Mova replace MTN Mobile Money?",
                  a: "No! Mova does not replace MoMo. MoMo remains the underlying payment and settlement infrastructure. Mova manages the social interaction and tracking layer around the payment.",
                },
                {
                  q: "How does bill splitting work on Mova?",
                  a: "The organizer creates a group (e.g. Weekend Trip to Ada for GHS 800), adds participants by @handle or phone number, and Mova automatically dispatches USSD prompts to everyone's phone while live-tracking who has settled.",
                },
                {
                  q: "Are there foreign bank requirements for Mova Fund?",
                  a: "None! Unlike overseas crowdfunding tools that require foreign bank accounts and take 14 days to disburse, Mova Fund is tied directly to local verified MoMo wallets with instant USSD push approval.",
                },
                {
                  q: "How do campus merchants use Mova?",
                  a: "Vendors like @amakitchen can create batch order links for student teams, generate physical countertop QR standees, and auto-issue verified WhatsApp micro-receipts.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 p-4 space-y-2 cursor-pointer transition-all hover:border-blue-300"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="flex justify-between items-center font-bold text-slate-900 text-sm">
                    <span>{item.q}</span>
                    <span>{openFaq === idx ? "−" : "+"}</span>
                  </div>
                  {openFaq === idx && (
                    <p className="text-slate-600 leading-relaxed pt-1 text-xs">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Footer */}
        <footer className="border-t border-slate-200 bg-slate-50 py-12 px-6 sm:px-12 text-xs text-slate-500">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-950 text-white font-black text-xs">
                  §
                </div>
                <span className="font-extrabold text-slate-900 text-sm">Mova</span>
                <span className="text-slate-400">| Money moves better together.</span>
              </div>
              <p className="text-[11px] text-slate-400">
                A connected payment and collective finance platform powered by MTN Mobile Money.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-slate-600">
              <Link href="/split" className="hover:text-blue-600">Mova Split</Link>
              <Link href="/fund" className="hover:text-blue-600">Mova Fund</Link>
              <Link href="/merchant" className="hover:text-blue-600">Merchant Hub</Link>
              <Link href="/pay" className="hover:text-blue-600">Mova Pay</Link>
              <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-[10px] text-slate-400 border-t border-slate-200/60 pt-4">
            Built for the MoMo Fintech Lab Hackathon & Competition • Proudly powered by MTN MoMo Rails
          </div>
        </footer>
      </div>

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
          purpose: "MoMo Fintech Lab Prototype Verification",
        }}
      />
    </div>
  );
}
