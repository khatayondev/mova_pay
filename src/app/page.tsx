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
} from "lucide-react";
import { MoMoCheckoutModal } from "@/components/modules/MoMoCheckoutModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#C7D9FE] via-[#E2EDFF] to-[#BED4FE] py-6 sm:py-10 px-3 sm:px-6 flex items-center justify-center font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* ========================================================================= */}
      {/* MAIN WHITE CANVAS CARD CONTAINER (MATCHING REFERENCE EXACTLY)             */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[1240px] rounded-[32px] sm:rounded-[40px] bg-white border border-white/60 shadow-[0_30px_90px_-20px_rgba(37,99,235,0.25)] overflow-hidden">
        
        {/* ========================================================================= */}
        {/* 1. TOP NAVBAR                                                            */}
        {/* ========================================================================= */}
        <header className="flex h-20 items-center justify-between px-6 sm:px-12 pt-2">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-white font-extrabold text-sm tracking-tighter">
              <span className="font-serif italic text-base">§</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
              Selfin
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-slate-600">
            <Link href="#features" className="hover:text-slate-950 transition-colors">
              Features
            </Link>
            <Link href="/split" className="hover:text-slate-950 transition-colors">
              Merchandise
            </Link>
            <Link href="/fund" className="hover:text-slate-950 transition-colors">
              Contact us
            </Link>
          </nav>

          {/* Right: Pill Button */}
          <button
            type="button"
            onClick={() => setIsDemoModalOpen(true)}
            className="rounded-full bg-[#0D62FE] hover:bg-blue-700 text-white px-6 py-2.5 text-xs font-bold shadow-md shadow-blue-500/20 transition-all active:scale-95"
          >
            Join Waitlist
          </button>
        </header>

        {/* ========================================================================= */}
        {/* 2. HERO HEADLINE & EYEBROW PILL                                          */}
        {/* ========================================================================= */}
        <div className="pt-8 sm:pt-12 pb-6 text-center px-4 max-w-3xl mx-auto space-y-4">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50/80 px-3.5 py-1 text-[11px] font-medium text-slate-700 shadow-sm">
            <span className="text-xs">✧</span>
            <span>The First AI Bank</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-black tracking-tight text-slate-950 font-display leading-[1.05] uppercase">
            DISCOVER THE <br />
            <span className="bg-gradient-to-r from-slate-950 via-[#0F3580] to-[#0D62FE] bg-clip-text text-transparent">
              FUTURE OF BANKING
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed font-normal pt-1">
            Selfin is building the first AI Bank. Manage all your financial products from one place while AI optimizes your finances automatically.
          </p>

          {/* Pill CTA Button With Enclosed Arrow */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-3 rounded-full bg-[#0D62FE] hover:bg-blue-700 text-white pl-2 pr-6 py-2 text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 transition-all active:scale-95 group"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0D62FE] shadow-sm transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5 stroke-[3]" />
              </span>
              <span>Join Waitlist</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. HERO GRAPHIC STAGE: VERTICAL FLUTED BLUE PILLARS & PHONE STAGE         */}
        {/* ========================================================================= */}
        <div className="relative mt-4 pt-12 pb-0 px-4 overflow-hidden flex flex-col items-center justify-end min-h-[460px] sm:min-h-[520px]">
          
          {/* Vertical Fluted Blue Backdrop Columns (Recreating the exact 3D ribbed effect) */}
          <div className="absolute inset-x-0 bottom-0 top-12 flex justify-between pointer-events-none -z-10 opacity-90 px-2 sm:px-6">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="w-full mx-[2px] sm:mx-1 rounded-t-xl bg-gradient-to-t from-[#2563EB] via-[#60A5FA]/60 to-transparent transition-all"
                style={{
                  height: "100%",
                  opacity: 0.15 + (i % 2 === 0 ? 0.25 : 0.45),
                  background: `linear-gradient(to top, #1D4ED8 0%, #3B82F6 40%, rgba(147, 197, 253, 0.4) 75%, transparent 100%)`,
                  boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>

          {/* Soft Bottom Floor Glow */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1D4ED8]/40 to-transparent pointer-events-none -z-10" />

          {/* Central Interactive Phone Stage */}
          <div className="relative w-full max-w-[820px] flex items-end justify-center">

            {/* ------------------------------------------------------------- */}
            {/* FLOATING ELEMENT 1 (TOP LEFT): Circular Trend Icon           */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute -top-6 sm:top-2 left-4 sm:left-14 z-20">
              <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#0D62FE] text-white shadow-xl shadow-blue-600/40 border-[3px] border-white">
                <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8 stroke-[2.5]" />
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* FLOATING ELEMENT 2 (BOTTOM LEFT): "Budget Scores" Donut Card */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute bottom-10 sm:bottom-16 left-0 sm:left-4 z-20 w-[240px] sm:w-[280px] rounded-2xl bg-white/95 p-4 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.18)] border border-slate-100 backdrop-blur-md">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                <span className="font-bold text-slate-900">Budget Scores</span>
                <span className="text-[11px] text-slate-400 flex items-center gap-0.5">
                  This Month <ChevronDown className="h-3 w-3" />
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                {/* Donut Chart SVG Mockup */}
                <div className="relative h-16 w-16 shrink-0">
                  <svg viewBox="0 0 36 36" className="h-full w-full rotate-[-90deg]">
                    <circle cx="18" cy="18" r="14" fill="transparent" stroke="#E2E8F0" strokeWidth="6" />
                    {/* Slices */}
                    <circle cx="18" cy="18" r="14" fill="transparent" stroke="#0D62FE" strokeWidth="6" strokeDasharray="45 100" strokeDashoffset="0" />
                    <circle cx="18" cy="18" r="14" fill="transparent" stroke="#06B6D4" strokeWidth="6" strokeDasharray="25 100" strokeDashoffset="-45" />
                    <circle cx="18" cy="18" r="14" fill="transparent" stroke="#3B82F6" strokeWidth="6" strokeDasharray="15 100" strokeDashoffset="-70" />
                    <circle cx="18" cy="18" r="14" fill="transparent" stroke="#93C5FD" strokeWidth="6" strokeDasharray="15 100" strokeDashoffset="-85" />
                  </svg>
                </div>

                {/* Legend */}
                <div className="flex-1 space-y-1 text-[10px] font-medium text-slate-600">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#0D62FE]" /> Needs</span>
                    <span className="font-bold text-slate-900 font-mono">52.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4]" /> Wants</span>
                    <span className="font-bold text-slate-900 font-mono">22.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" /> Nice to have</span>
                    <span className="font-bold text-slate-900 font-mono">13.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#93C5FD]" /> Trade Sales</span>
                    <span className="font-bold text-slate-900 font-mono">11.2%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* CENTRAL SMARTPHONE (HELD IN HAND RISING FROM BOTTOM)          */}
            {/* ------------------------------------------------------------- */}
            <div className="relative z-10 w-[240px] sm:w-[280px] rounded-t-[44px] bg-slate-950 p-2 sm:p-2.5 pb-0 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.4)] border-4 border-b-0 border-slate-800">
              {/* Phone Inner Screen */}
              <div className="rounded-t-[36px] bg-white overflow-hidden p-3.5 sm:p-4 pb-10 space-y-3.5 text-slate-900 min-h-[360px] sm:min-h-[420px]">
                {/* Speaker & Dynamic Island */}
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-1">
                  <span>9:41</span>
                  <div className="h-3.5 w-16 rounded-full bg-slate-950" />
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-slate-400" />
                    <div className="h-2 w-3 rounded-sm bg-slate-400" />
                  </div>
                </div>

                {/* Phone Header */}
                <div className="text-center pt-1">
                  <span className="text-xs font-bold text-slate-800 font-display">Translate</span>
                </div>

                {/* Blue Gradient Balance Card */}
                <div className="rounded-2xl bg-gradient-to-br from-[#0D62FE] via-[#1E40AF] to-[#0A2563] p-4 text-white shadow-md space-y-3 relative overflow-hidden">
                  {/* Decorative wavy wave */}
                  <div className="absolute right-0 bottom-0 w-28 h-28 rounded-full bg-white/10 blur-xl pointer-events-none" />

                  <div className="space-y-0.5">
                    <span className="text-[10px] text-white/70">Salary card</span>
                    <div className="text-xl font-black font-display tracking-tight">
                      10,000$
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-end text-[10px] font-mono text-white/80">
                    <span className="font-bold tracking-widest text-xs">VISA</span>
                    <span>•••• 1942</span>
                  </div>
                </div>

                {/* Sub Balance / Wave Metric */}
                <div className="pt-1 text-center space-y-1">
                  <div className="text-2xl font-black font-display text-slate-900 tracking-tight">
                    50.00
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block">
                    Available Fast Transfer
                  </span>

                  {/* Smooth wave line chart mockup */}
                  <div className="pt-2 h-10 w-full flex items-end justify-center">
                    <svg viewBox="0 0 100 25" className="w-full h-full text-blue-600 overflow-visible">
                      <path
                        d="M0 20 Q 25 5, 50 15 T 100 5 L 100 25 L 0 25 Z"
                        fill="rgba(13, 98, 254, 0.12)"
                      />
                      <path
                        d="M0 20 Q 25 5, 50 15 T 100 5"
                        fill="none"
                        stroke="#0D62FE"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* FLOATING ELEMENT 3 (TOP RIGHT): Dual Received / Spent Pills   */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute top-4 sm:top-8 right-0 sm:right-6 z-20 flex flex-col gap-2">
              {/* Amount Received Pill */}
              <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-2.5 shadow-[0_12px_30px_-5px_rgba(15,23,42,0.15)] border border-slate-100 backdrop-blur-md">
                <span className="text-[11px] font-semibold text-slate-500">Amount Received</span>
                <span className="text-xs font-black text-emerald-600 font-mono flex items-center gap-0.5">
                  ↑ $965
                </span>
              </div>

              {/* Amount Spent Pill */}
              <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-2.5 shadow-[0_12px_30px_-5px_rgba(15,23,42,0.15)] border border-slate-100 backdrop-blur-md">
                <span className="text-[11px] font-semibold text-slate-500">Amount Spent</span>
                <span className="text-xs font-black text-rose-500 font-mono flex items-center gap-0.5">
                  ↓ $950
                </span>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* FLOATING ELEMENT 4 (BOTTOM RIGHT): "Amount Saved" Card        */}
            {/* ------------------------------------------------------------- */}
            <div className="absolute bottom-10 sm:bottom-16 right-0 sm:right-6 z-20 w-[200px] sm:w-[220px] rounded-2xl bg-white/95 p-4 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.18)] border border-slate-100 backdrop-blur-md space-y-1">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                Amount Saved
              </span>
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-slate-900 font-display">
                  $734.50
                </span>
                <span className="rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold">
                  +4.2% ↗
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Attribution / WaveSpace Tag (as in reference image) */}
        <div className="py-4 text-center border-t border-slate-100 bg-white">
          <span className="text-xs font-bold tracking-tight text-slate-400 font-display">
            wavespace
          </span>
        </div>
      </div>

      {/* Interactive MoMo Modal */}
      <MoMoCheckoutModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        details={{
          recipientName: "Selfin / Mova Demo",
          recipientHandle: "@selfin_demo",
          amount: 50,
          currency: "USD",
          purpose: "Hero Section Verification",
        }}
      />
    </div>
  );
}
