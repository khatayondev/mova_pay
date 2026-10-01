"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Zap,
  CheckCircle2,
  Send,
  MessageSquare,
  Smartphone,
  Mail,
  Heart,
  Share2,
  Radio,
  Flame,
  ShieldCheck,
  ChevronRight,
  Bell,
  Coins,
  ArrowRight,
  Users,
  Eye,
  Check
} from "lucide-react";

export default function LiveIntegrationsPage() {
  // TikTok Live Interactive Simulation State
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("Kofi Mensah");
  const [tipComment, setTipComment] = useState("Keep inspiring us! 🚀🇬🇭");
  const [isProcessing, setIsProcessing] = useState(false);
  const [recentLiveAlerts, setRecentLiveAlerts] = useState<
    Array<{ id: number; name: string; amount: number; comment: string; time: string }>
  >([
    {
      id: 1,
      name: "Ama Serwaa",
      amount: 50,
      comment: "Big love from Kumasi! 🔥",
      time: "Just now",
    },
    {
      id: 2,
      name: "Kwame_Dev",
      amount: 20,
      comment: "Energy is unmatched today 👏",
      time: "2m ago",
    },
  ]);
  const [campaignProgress, setCampaignProgress] = useState(1450);
  const campaignGoal = 2500;

  // Active Channel Tab
  const [activeChannel, setActiveChannel] = useState<"tiktok" | "telegram" | "sms" | "email">("tiktok");

  // Waitlist Form State
  const [waitlistInput, setWaitlistInput] = useState("");
  const [selectedChannelInterest, setSelectedChannelInterest] = useState("TikTok Live");
  const [hasJoinedWaitlist, setHasJoinedWaitlist] = useState(false);

  const handleSimulateTip = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;
      const newAlert = {
        id: Date.now(),
        name: donorName || "Anonymous Fan",
        amount: finalAmount || 10,
        comment: tipComment || "Awesome stream!",
        time: "Just now",
      };

      setRecentLiveAlerts((prev) => [newAlert, ...prev]);
      setCampaignProgress((prev) => prev + (finalAmount || 10));
      setIsProcessing(false);
      setIsTipModalOpen(false);
      setTipComment("");
    }, 900);
  };

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistInput.trim()) return;
    setHasJoinedWaitlist(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-rose-500 selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className="h-4 w-px bg-slate-800" />
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display font-black text-lg tracking-tight text-white">MOVA</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30">
                OMNICHANNEL LABS
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-4 py-2 text-xs font-bold shadow-lg shadow-rose-500/20 transition-all active:scale-95"
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Get Early Access</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-14 pb-12 px-4 sm:px-8 max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-[1.08]">
          Contribute Directly from <br />
          <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            TikTok Live, Telegram & SMS
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          No switching apps. No copying phone numbers. Viewers, community members, and customers can contribute, tip, and split bills right where they already hang out — settled instantly to MTN MoMo.
        </p>

        {/* Channel Selector Pills */}
        <div className="pt-4 flex flex-wrap justify-center gap-2.5">
          <button
            type="button"
            onClick={() => setActiveChannel("tiktok")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeChannel === "tiktok"
                ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-105"
                : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>TikTok Live Pay</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-rose-200">Featured</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveChannel("telegram")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeChannel === "telegram"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram Bot</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveChannel("sms")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeChannel === "sms"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-105"
                : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Offline SMS Rails</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveChannel("email")}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeChannel === "email"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Invoicing</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Area */}
      <div className="py-8 px-4 sm:px-8 max-w-6xl mx-auto">
        {activeChannel === "tiktok" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Explainer & Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[11px] font-bold text-rose-400">
                <Radio className="w-3 h-3 text-rose-500 animate-pulse" />
                <span>IN-STREAM DIRECT CONTRIBUTIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                Live Creators Can Now Receive MoMo Tips in Real-Time
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                African content creators lose massive revenue to virtual coins, high platform commission fees, and complicated payout thresholds.
              </p>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Floating MoMo Button Inside TikTok Live</h4>
                    <p className="text-slate-400 mt-0.5">Viewers tap the Mova Pay button on screen without leaving the stream.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Instant On-Screen Broadcast Alert</h4>
                    <p className="text-slate-400 mt-0.5">Streamer and viewers see live animated notifications whenever someone contributes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-white text-sm">100% Direct MoMo Payout</h4>
                    <p className="text-slate-400 mt-0.5">Funds land straight into the creator's Ghanaian mobile money wallet in seconds.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsTipModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-6 py-3 text-xs sm:text-sm font-bold shadow-xl shadow-rose-500/25 transition-all active:scale-95"
                >
                  <Coins className="w-4 h-4" />
                  <span>Try the Interactive TikTok Pay Demo</span>
                </button>
              </div>
            </div>

            {/* Right: Interactive Phone Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[340px] rounded-[44px] border-4 border-slate-800 bg-slate-950 p-2.5 shadow-2xl shadow-rose-950/40">
                {/* Phone Speaker Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-28 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                  <div className="h-1.5 w-10 bg-slate-800 rounded-full" />
                </div>

                {/* TikTok Live Screen Content */}
                <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black h-[580px] flex flex-col justify-between p-4 text-white">
                  {/* Top Live Bar */}
                  <div className="pt-4 flex items-center justify-between text-xs z-10">
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-[10px] font-bold">
                        KC
                      </div>
                      <div>
                        <div className="font-bold text-[11px] leading-tight">@kofi_creatives</div>
                        <div className="text-[9px] text-slate-400 flex items-center gap-1">
                          <Eye className="w-2.5 h-2.5" /> 2.4k viewers
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-rose-600 text-[10px] font-black uppercase tracking-wider animate-pulse flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                        LIVE
                      </span>
                    </div>
                  </div>

                  {/* Goal Progress Banner */}
                  <div className="z-10 mt-3 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 space-y-1.5">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="font-bold flex items-center gap-1 text-amber-300">
                        <Flame className="w-3.5 h-3.5 text-amber-400" />
                        New Camera Goal
                      </span>
                      <span className="font-mono text-slate-300">
                        GHS {campaignProgress.toLocaleString()} / {campaignGoal.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-400 via-rose-500 to-pink-500 h-full rounded-full transition-all duration-700"
                        style={{ width: `${Math.min(100, (campaignProgress / campaignGoal) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Real-time Pop-up Alert Banner (When someone tips) */}
                  <div className="space-y-2 z-10 my-auto">
                    {recentLiveAlerts.slice(0, 2).map((alert) => (
                      <div
                        key={alert.id}
                        className="animate-in slide-in-from-bottom-3 duration-500 p-2.5 rounded-2xl bg-gradient-to-r from-rose-950/90 via-slate-900/90 to-amber-950/90 border border-rose-500/40 backdrop-blur-md shadow-lg flex items-center gap-2.5"
                      >
                        <div className="h-8 w-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-md">
                          ₵
                        </div>
                        <div className="text-[10px] flex-1 min-w-0">
                          <div className="font-bold text-white flex items-center gap-1">
                            <span>{alert.name}</span>
                            <span className="text-amber-400 font-extrabold">tipped GHS {alert.amount} via MoMo!</span>
                          </div>
                          <p className="text-slate-300 truncate italic">"{alert.comment}"</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Simulated Live Chat Stream */}
                  <div className="space-y-1.5 text-[11px] z-10 max-h-28 overflow-hidden">
                    <p className="text-slate-300">
                      <strong className="text-slate-400">@yaw_official:</strong> Bro that beat switch was crazy!! 🔥
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-slate-400">@selorm_k:</strong> Just tipped 50 cedis on MoMo, check notification!
                    </p>
                    <p className="text-slate-300">
                      <strong className="text-slate-400">@abena_gh:</strong> The camera goal is almost full wow 🙌
                    </p>
                  </div>

                  {/* Bottom Action Bar WITH THE MOVA PAY BUTTON */}
                  <div className="pt-2 flex items-center gap-2 z-10 border-t border-white/10">
                    <div className="flex-1 bg-white/10 rounded-full px-3 py-2 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Add a comment...</span>
                      <Heart className="w-3.5 h-3.5 text-rose-400" />
                    </div>

                    {/* THE PROMINENT TIKTOK MOVA PAY BUTTON */}
                    <button
                      type="button"
                      onClick={() => setIsTipModalOpen(true)}
                      className="relative group rounded-full bg-gradient-to-r from-rose-500 to-amber-500 p-2.5 text-white shadow-lg shadow-rose-500/50 hover:scale-110 active:scale-95 transition-all"
                      title="Contribute with MTN MoMo"
                    >
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                      </span>
                      <Coins className="w-5 h-5 text-white" />
                    </button>

                    <button
                      type="button"
                      className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Telegram Tab */}
        {activeChannel === "telegram" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-bold text-blue-400">
                <Send className="w-3 h-3 text-blue-400" />
                <span>IN-CHAT GROUP EXPENSE BOT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                Mova for Telegram: Split Bills Inside Your Group Chats
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Crypto clubs, university project groups, and social squads on Telegram can now split expenses with instant slash commands without opening another browser tab.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-1">
                  <div className="text-blue-400 font-bold">/split 300 Pizza & Drinks @Ama @Kofi @Kwame</div>
                  <div className="text-slate-500">Mova calculates GHS 75 each and serves inline 1-click MoMo buttons.</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 space-y-1">
                  <div className="text-emerald-400 font-bold">/pay @kofi 50 Lunch debt</div>
                  <div className="text-slate-500">Generates instant secure MoMo push prompt to Kofi.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-slate-800 p-5 space-y-4 shadow-xl">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Legon Room 402 Squad</h4>
                    <p className="text-[11px] text-slate-400">4 members • Mova Bot active</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-2xl bg-slate-800/80 max-w-[85%] space-y-1">
                    <span className="font-bold text-blue-400 text-[10px]">Kwame:</span>
                    <p className="text-white">Guys the generator fuel was GHS 200 today!</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-950/60 border border-blue-500/30 space-y-2">
                    <div className="flex items-center gap-1.5 text-blue-400 font-bold text-[11px]">
                      <Sparkles className="w-3.5 h-3.5" /> Mova Bot Split Prompt
                    </div>
                    <p className="text-white font-semibold">Fuel Contribution (GHS 50 each)</p>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => alert("Simulating Telegram 1-click MoMo payment!")}
                        className="py-1.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] text-center"
                      >
                        ⚡ Pay GHS 50 (MoMo)
                      </button>
                      <div className="py-1.5 px-3 rounded-xl bg-slate-800 text-slate-400 font-mono text-[10px] text-center">
                        2/4 Paid
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SMS Tab */}
        {activeChannel === "sms" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-bold text-emerald-400">
                <Smartphone className="w-3 h-3 text-emerald-400" />
                <span>OFFLINE & FEATURE PHONE READY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                SMS Direct Push: Universal Payments Without Data
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Not everyone has active 4G data or a smartphone. Mova's upcoming SMS bridge triggers direct USSD payment prompts on any mobile device in Ghana.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Works on basic "yam" button phones and smartphones alike.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant SMS receipt delivered immediately upon settlement.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interactive reminder texts with 1-click reply approval.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-800 p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-400 text-xs border-b border-slate-800 pb-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>SMS from MOVA-PAY</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-slate-200 space-y-2">
                  <p className="font-bold text-white">Payment Request: GHS 60</p>
                  <p className="text-slate-400 leading-relaxed">
                    Ama requested GHS 60 for Friday Dinner. Dial *170# or tap below to authorize via MTN MoMo.
                  </p>
                  <div className="pt-1">
                    <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
                      REF: MOV-84920
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Email Tab */}
        {activeChannel === "email" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[11px] font-bold text-purple-400">
                <Mail className="w-3 h-3 text-purple-400" />
                <span>PROFESSIONAL INVOICES & RECEIPTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                Automated Email Invoicing with 1-Click MoMo Settlement
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                For freelancers, campus graphic designers, event organizers, and consultants. Send clean PDF invoices with embedded Mova payment links that auto-reconcile when paid.
              </p>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-purple-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Automatic Payment Reconciliation
                </div>
                <p className="text-slate-400">
                  When a client taps the email button and confirms their MoMo PIN, the invoice automatically marks as PAID and issues a digital receipt.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md rounded-3xl bg-white text-slate-950 p-6 space-y-4 shadow-2xl">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <div className="font-bold text-sm">INVOICE #INV-2026-08</div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                    PENDING MOMO APPROVAL
                  </span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-slate-500">Billed to: <span className="text-slate-900 font-bold">TechHub Accra</span></div>
                  <div className="text-slate-500">Service: <span className="text-slate-900 font-bold">Brand Design Package</span></div>
                  <div className="text-xl font-black text-slate-950 pt-2">GHS 1,200.00</div>
                </div>
                <button
                  type="button"
                  onClick={() => alert("Simulating Email 1-click MoMo approval!")}
                  className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  Pay GHS 1,200 with MTN MoMo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Early Access / Waitlist Registration Section */}
      <div id="waitlist" className="py-20 px-4 sm:px-8 max-w-4xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center space-y-6 shadow-2xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
            Join the Early Access Creator & Vendor List
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Get instant beta access to the TikTok Live payment button and Telegram bot before the public rollout. Zero setup fees.
          </p>

          {hasJoinedWaitlist ? (
            <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 space-y-2 max-w-md mx-auto">
              <Check className="w-8 h-8 mx-auto text-emerald-400" />
              <h4 className="font-bold text-white text-base">You are on the VIP Early Access List!</h4>
              <p className="text-xs text-slate-300">
                We will notify you on <strong>{waitlistInput}</strong> the moment the {selectedChannelInterest} integration goes live.
              </p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  required
                  placeholder="Enter email or MoMo number"
                  value={waitlistInput}
                  onChange={(e) => setWaitlistInput(e.target.value)}
                  className="flex-1 rounded-full bg-slate-950 border border-slate-700 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-5 py-2.5 text-xs font-bold shadow-md shadow-rose-500/20 transition-all active:scale-95 shrink-0"
                >
                  Join Waitlist
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400 pt-1">
                <span>Interested in:</span>
                <select
                  value={selectedChannelInterest}
                  onChange={(e) => setSelectedChannelInterest(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-slate-200 text-[11px] focus:outline-none focus:border-rose-500"
                >
                  <option value="TikTok Live">TikTok Live Pay Button</option>
                  <option value="Telegram Bot">Telegram Bot (/split & /pay)</option>
                  <option value="SMS Rails">Offline SMS USSD Prompts</option>
                  <option value="Email Invoicing">Email Invoicing & Receipts</option>
                </select>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Interactive TikTok Live Modal Simulation */}
      {isTipModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-800 p-6 space-y-5 text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-rose-500 flex items-center justify-center text-xs font-bold">
                  ₵
                </div>
                <div>
                  <h4 className="font-bold text-sm">Contribute to @kofi_creatives</h4>
                  <p className="text-[10px] text-slate-400">Direct MTN MoMo Tipping</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsTipModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs font-bold p-1 rounded-full hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSimulateTip} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1.5">
                  Select Contribution Amount (GHS)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[10, 25, 50, 100].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount("");
                      }}
                      className={`py-2 rounded-xl font-bold transition-all text-center ${
                        selectedAmount === amt && !customAmount
                          ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      ₵{amt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Or Custom Amount (GHS)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 150"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Your Name / Handle
                </label>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Live Shoutout Message (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Keep it up! 🔥"
                  value={tipComment}
                  onChange={(e) => setTipComment(e.target.value)}
                  className="w-full rounded-xl bg-slate-950 border border-slate-700 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Payment Rail:</span>
                <span className="font-bold text-amber-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> MTN MoMo USSD Prompt
                </span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 font-bold text-white shadow-lg shadow-rose-500/25 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Triggering MoMo USSD Prompt...</span>
                  </>
                ) : (
                  <>
                    <Coins className="w-4 h-4" />
                    <span>Contribute GHS {customAmount || selectedAmount} via MoMo</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
