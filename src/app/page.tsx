"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Users,
  Smartphone,
  CheckCircle2,
  TrendingUp,
  Receipt,
  Sparkles,
  PiggyBank,
  Store,
  CreditCard,
  Check,
  Send,
  ArrowRight,
  Clock,
  ChevronRight,
  Lock,
} from "lucide-react";
import { MoMoCheckoutModal } from "@/components/modules/MoMoCheckoutModal";
import { formatCurrency } from "@/lib/utils";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [splitAmount, setSplitAmount] = useState(600);
  const totalGoal = 800;

  return (
    <div className="relative min-h-screen bg-[#FBFDFF] text-slate-900 overflow-x-hidden selection:bg-brand selection:text-slate-950 font-sans">
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-subtle-glow pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* 1. FLOATING SLEEK TOP NAVIGATION (MATCHING REFERENCE DESIGN)              */}
      {/* ========================================================================= */}
      <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-4 sm:px-6 shadow-sm backdrop-blur-xl transition-all">
          {/* Left: Minimalist Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-brand via-[#FFE875] to-brand text-slate-950 font-black shadow-sm">
              <span className="text-base tracking-tighter">M</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900 font-display">
              mova
            </span>
          </Link>

          {/* Center: Rounded Pill Nav Menu */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-100 bg-slate-50/80 p-1 text-xs font-semibold text-slate-600">
            <Link
              href="/"
              className="rounded-full bg-white px-3.5 py-1 text-blue-600 shadow-sm transition-all"
            >
              • Home
            </Link>
            <Link
              href="/split"
              className="rounded-full px-3.5 py-1 hover:text-slate-900 transition-colors"
            >
              Split
            </Link>
            <Link
              href="/fund"
              className="rounded-full px-3.5 py-1 hover:text-slate-900 transition-colors"
            >
              Crowdfund
            </Link>
            <Link
              href="/merchant"
              className="rounded-full px-3.5 py-1 hover:text-slate-900 transition-colors"
            >
              Merchants
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full px-3.5 py-1 hover:text-slate-900 transition-colors"
            >
              Dashboard
            </Link>
          </nav>

          {/* Right: Pill CTA Button */}
          <div className="flex items-center gap-2.5">
            <Link href="/dashboard" className="hidden sm:inline-flex text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5">
              Sign In
            </Link>
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-bold shadow-pill-glow transition-all active:scale-95"
            >
              <span>Test MoMo Rail</span>
              <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION: 2-COLUMN LAYOUT WITH 3D PHONE MOCKUP (REFERENCE ACCURATE) */}
      {/* ========================================================================= */}
      <section className="relative mx-auto max-w-6xl px-4 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bold Headline & Call to Action */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.1]">
                Start Managing <br />
                Your Finance <br />
                <span className="text-slate-400 font-light">— With Our Tool</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed pt-2">
                Simplify your financial life. Our connected MoMo app makes managing group splits, campaign funding, and social payments effortless.
              </p>
            </div>

            {/* Circular Arrow Button */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/split"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white pl-5 pr-2 py-2 text-xs sm:text-sm font-bold shadow-pill-glow transition-all group"
              >
                <span>Get Started Free</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Trust Avatar Stack */}
            <div className="pt-4 flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="User"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="User"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                  alt="User"
                />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-slate-900 block font-display">
                  2.3M+
                </span>
                <span className="text-[11px] text-slate-500">
                  Trusted by users across 140 countries
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating 3D Angled Phone Mockup */}
          <div className="lg:col-span-6 relative flex justify-center py-6">
            {/* Phone Container with Realistic 3D Tilt */}
            <div
              className="relative w-[280px] sm:w-[320px] rounded-[44px] bg-slate-950 p-3 shadow-phone-3d transition-transform duration-500 hover:rotate-0"
              style={{
                transform: "perspective(1200px) rotateY(-8deg) rotateX(8deg) rotate(-2deg)",
              }}
            >
              {/* Outer Phone Shell */}
              <div className="relative rounded-[36px] bg-white overflow-hidden p-4 space-y-4 text-slate-900">
                {/* Dynamic Island / Speaker */}
                <div className="mx-auto h-4 w-24 rounded-full bg-slate-950" />

                {/* In-app Header */}
                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Welcome back</span>
                    <h4 className="font-bold text-slate-900">Gabriel Okello</h4>
                  </div>
                  <div className="h-7 w-7 rounded-full bg-brand flex items-center justify-center font-black text-slate-950 text-xs shadow-sm">
                    G
                  </div>
                </div>

                {/* In-app Card: Gradient Balance */}
                <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-4 text-white shadow-md space-y-3">
                  <div className="flex justify-between text-[11px] text-white/80">
                    <span>MTN MoMo Linked</span>
                    <span className="font-mono text-brand font-bold">● Active</span>
                  </div>
                  <div>
                    <span className="text-2xl font-black font-display tracking-tight">
                      GHS 4,850.15
                    </span>
                    <span className="text-[10px] text-white/70 block mt-0.5">
                      Available Social Liquidity
                    </span>
                  </div>
                </div>

                {/* In-app Quick Actions */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-slate-600">
                  <button
                    type="button"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100 flex flex-col items-center gap-1"
                  >
                    <Send className="h-3.5 w-3.5 text-blue-600" />
                    <span>Send</span>
                  </button>
                  <Link
                    href="/split"
                    className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100 flex flex-col items-center gap-1"
                  >
                    <Receipt className="h-3.5 w-3.5 text-brand" />
                    <span>Split</span>
                  </Link>
                  <Link
                    href="/fund"
                    className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100 flex flex-col items-center gap-1"
                  >
                    <PiggyBank className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Fund</span>
                  </Link>
                </div>

                {/* In-app Transactions List */}
                <div className="space-y-2 pt-1">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="font-bold text-slate-900">Recent Group Activity</span>
                    <span className="text-blue-600 text-[10px] font-semibold">View all</span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-brand/20 flex items-center justify-center text-slate-950 font-bold text-[10px]">
                          🏝️
                        </div>
                        <div className="text-left">
                          <span className="font-bold text-slate-800 text-[11px] block">Weekend Trip to Ada</span>
                          <span className="text-[9px] text-slate-400">4 members • Settled</span>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-slate-900 text-xs">
                        -GHS 200
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-[10px]">
                          🍲
                        </div>
                        <div className="text-left">
                          <span className="font-bold text-slate-800 text-[11px] block">Ama Kitchen Lunch</span>
                          <span className="text-[9px] text-slate-400">@amakitchen • Paid</span>
                        </div>
                      </div>
                      <span className="font-mono font-bold text-slate-900 text-xs">
                        -GHS 25
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* GRAPHIC BANNER CARD WITH WATERMARK BACKDROP (MATCHING REFERENCE DESIGN)    */}
        {/* ========================================================================= */}
        <div className="relative mt-8 overflow-hidden rounded-3xl bg-hero-blue-gradient p-8 sm:p-12 text-white shadow-xl text-center space-y-4">
          {/* Subtle Watermark Headline */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15 overflow-hidden">
            <span className="text-5xl sm:text-8xl font-black font-display tracking-widest uppercase whitespace-nowrap text-white">
              FINANCE MANAGEMENT • SOCIAL MOMO
            </span>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Partnering with top tier brands to revolutionize financial services.
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Direct API integrations and settlement rails across leading African mobile telecommunications networks.
            </p>

            {/* Partner Brand Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-90 text-xs font-bold font-mono">
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">MTN Mobile Money</span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">Telecel Cash</span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">AirtelTigo</span>
              <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">Bank-Grade 256bit</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CENTER MANIFESTO STATEMENT WITH FLOATING 3D ICONS                      */}
      {/* ========================================================================= */}
      <section className="relative mx-auto max-w-4xl px-4 py-20 text-center space-y-6">
        {/* Floating 3D Micro-Pill 1: Piggy Bank */}
        <div className="hidden sm:flex absolute left-8 top-12 items-center justify-center h-12 w-12 rounded-2xl bg-pink-50 border border-pink-100 shadow-sm text-2xl animate-bounce duration-1000">
          🐷
        </div>

        {/* Floating 3D Micro-Pill 2: Alarm Clock */}
        <div className="hidden sm:flex absolute right-12 top-20 items-center justify-center h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm text-2xl">
          ⏰
        </div>

        {/* Floating 3D Micro-Pill 3: Blue Coin */}
        <div className="hidden sm:flex absolute left-16 bottom-8 items-center justify-center h-12 w-12 rounded-2xl bg-blue-50 border border-blue-100 shadow-sm text-2xl">
          💳
        </div>

        {/* Floating 3D Micro-Pill 4: Gift Box */}
        <div className="hidden sm:flex absolute right-16 bottom-12 items-center justify-center h-12 w-12 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm text-2xl">
          🎁
        </div>

        {/* Main Central Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display leading-[1.2] max-w-2xl mx-auto">
          Our app is an <br />
          <span className="text-blue-600">all-in-one solution</span> for <br />
          managing your money <br />
          and financial goals.
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
          Experience the peace of mind that comes with having your group expenses and campaigns under complete, transparent control.
        </p>

        {/* CTA */}
        <div className="pt-2">
          <Link
            href="/fund"
            className="inline-flex items-center gap-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white pl-5 pr-2 py-2 text-xs sm:text-sm font-bold shadow-pill-glow transition-all group"
          >
            <span>Explore Community Goals</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 group-hover:bg-white group-hover:text-blue-600 transition-colors">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "EXPLORE OUR STANDOUT FEATURES" CARDS GRID (REFERENCE ACCURATE)        */}
      {/* ========================================================================= */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 space-y-10">
        <div className="text-center space-y-2">
          <span className="inline-flex rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-bold text-blue-600">
            Key Features
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-display">
            Explore Our Standout Features
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Everything you need to move money smoothly across friendships, teams, and campus commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Virtual Card & Expense Tracking */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-saas-card hover:shadow-saas-hover transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Graphic Mockup of Debit Card */}
              <div className="mx-auto w-full max-w-[280px] rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-900 p-5 text-white shadow-md space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold tracking-wider">Mova Card</span>
                  <div className="h-5 w-8 rounded-md bg-white/20 flex items-center justify-center text-[10px] font-mono">
                    MoMo
                  </div>
                </div>
                <div className="pt-2">
                  <span className="text-xl font-bold font-display tracking-tight">
                    GHS 2,736.15
                  </span>
                  <span className="text-[10px] text-white/70 font-mono block mt-1">
                    •••• 5318
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  Expense & Group Tracking
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Record and categorize group expenses, contributions, and settlements automatically with live telecom confirmation logs.
                </p>
              </div>
            </div>

            <Link href="/split" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700">
              <span>Try Split Engine</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Card 2: Smart Savings & Crowdfund Goal */}
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-saas-card hover:shadow-saas-hover transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Goal Mockup Pill */}
              <div className="mx-auto w-full max-w-[280px] rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🥖</span>
                    <div>
                      <span className="font-bold text-slate-900 text-xs block">Sarah's Bakery</span>
                      <span className="text-[10px] text-slate-400">Accra Community Goal</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-900 block font-mono">GHS 12,500</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">+GHS 1,500</span>
                  </div>
                </div>

                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand h-full rounded-full w-[83%]" />
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  Smart Savings & Crowdfunding Goals
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Set specific community goals and launch transparent crowdfunding without overseas banking delays or currency conversion losses.
                </p>
              </div>
            </div>

            <Link href="/fund/sarah-bakery" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700">
              <span>View Sarah's Goal</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FOOTER: CLEAN MINIMALIST SAAS FOOTER                                  */}
      {/* ========================================================================= */}
      <footer className="border-t border-slate-200/80 bg-white py-12 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand font-black text-slate-950 text-xs">
              M
            </div>
            <span className="font-bold text-slate-900">Mova</span>
            <span>— Money moves better together.</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <Link href="/split" className="hover:text-slate-900">Group Split</Link>
            <Link href="/fund" className="hover:text-slate-900">Crowdfund</Link>
            <Link href="/merchant" className="hover:text-slate-900">Merchant Hub</Link>
            <Link href="/dashboard" className="hover:text-slate-900">Dashboard</Link>
          </div>
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
          purpose: "Interactive MoMo Push Simulation",
        }}
      />
    </div>
  );
}
