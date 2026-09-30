"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shell } from "@/components/layout/Shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ProgressGauge } from "@/components/ui/progress-gauge";
import { AvatarSingle } from "@/components/ui/avatar-group";
import { formatCurrency, formatMoMoPhone } from "@/lib/utils";
import {
  Store,
  Users,
  AlertCircle,
  CheckCircle2,
  Clock,
  QrCode,
  Share2,
  Copy,
  Check,
  Send,
  Printer,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Utensils,
  Receipt,
  Download,
  Smartphone,
  Eye,
  X,
} from "lucide-react";

interface CustomerOrder {
  id: string;
  customerName: string;
  handle: string;
  phone: string;
  meal: string;
  pickupTime: string;
  amount: number;
  status: "PAID" | "AWAITING_PIN";
  txId?: string;
  orderNumber: string;
}

export default function MerchantPortalPage() {
  const [selectedReceiptOrder, setSelectedReceiptOrder] = useState<CustomerOrder | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [linkTitle, setLinkTitle] = useState("Daily Special: Jollof & Grilled Chicken");
  const [linkPrice, setLinkPrice] = useState<number>(30);
  const [linkType, setLinkType] = useState<"DYNAMIC" | "STATIC">("DYNAMIC");
  const [reminderSent, setReminderSent] = useState(false);

  // Initial orders for Ama Kitchen Friday Lunch Pack
  const [orders, setOrders] = useState<CustomerOrder[]>([
    {
      id: "ord-1",
      customerName: "Gabriel Okello",
      handle: "@gabriel",
      phone: "024 819 0312",
      meal: "Jollof Rice + Spicy Grilled Tilapia (Extra Shito)",
      pickupTime: "12:30 PM",
      amount: 25,
      status: "PAID",
      txId: "MOMO-918231-GH",
      orderNumber: "AMA-001",
    },
    {
      id: "ord-2",
      customerName: "Sadick Abubakar",
      handle: "@sadick",
      phone: "055 491 8832",
      meal: "Fried Rice + Crispy Chicken & Coleslaw",
      pickupTime: "12:45 PM",
      amount: 25,
      status: "PAID",
      txId: "MOMO-918232-GH",
      orderNumber: "AMA-002",
    },
    {
      id: "ord-3",
      customerName: "Abena Mensah",
      handle: "@abena_m",
      phone: "020 812 4040",
      meal: "Waakye + Shito, Wele & Boiled Egg",
      pickupTime: "1:00 PM",
      amount: 25,
      status: "PAID",
      txId: "MOMO-918233-GH",
      orderNumber: "AMA-003",
    },
    {
      id: "ord-4",
      customerName: "Kofi Owusu",
      handle: "@kofi_tech",
      phone: "027 910 1122",
      meal: "Jollof Rice + Grilled Beef Kebab",
      pickupTime: "12:30 PM",
      amount: 25,
      status: "PAID",
      txId: "MOMO-918234-GH",
      orderNumber: "AMA-004",
    },
    {
      id: "ord-5",
      customerName: "Sarah Nalwanga",
      handle: "@sarahbakes",
      phone: "024 819 0312",
      meal: "Special Jollof + Plantain & Kelewele",
      pickupTime: "1:15 PM",
      amount: 25,
      status: "PAID",
      txId: "MOMO-918235-GH",
      orderNumber: "AMA-005",
    },
    {
      id: "ord-6",
      customerName: "Michael Asante",
      handle: "@masante",
      phone: "054 311 9021",
      meal: "Assorted Fried Rice + Beef Strips",
      pickupTime: "12:45 PM",
      amount: 25,
      status: "AWAITING_PIN",
      orderNumber: "AMA-006",
    },
    {
      id: "ord-7",
      customerName: "Esi Boateng",
      handle: "@esiboat",
      phone: "024 455 1209",
      meal: "Waakye Special + Fish & Spaghetti",
      pickupTime: "1:00 PM",
      amount: 25,
      status: "AWAITING_PIN",
      orderNumber: "AMA-007",
    },
  ]);

  // Total batch math: 20 Meals @ GHS 25 = GHS 500
  const totalMeals = 20;
  const pricePerMeal = 25;
  const totalBudget = totalMeals * pricePerMeal; // GHS 500
  const paidOrdersCount = 18; // 18/20 paid
  const pendingOrdersCount = 2; // 2 awaiting authorization
  const collectedAmount = paidOrdersCount * pricePerMeal; // GHS 450
  const percentCollected = Math.round((collectedAmount / totalBudget) * 100); // 90%

  const activePaymentLink = `mova.me/m/amakitchen/${linkTitle
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(activePaymentLink);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSendMoMoReminders = () => {
    setReminderSent(true);
    setTimeout(() => {
      // Simulate Michael Asante completing payment
      setOrders((prev) =>
        prev.map((ord) =>
          ord.id === "ord-6"
            ? { ...ord, status: "PAID", txId: `MOMO-${Date.now().toString().slice(-6)}-GH` }
            : ord
        )
      );
      setReminderSent(false);
    }, 2000);
  };

  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 max-w-6xl space-y-10">
        {/* ========================================================================= */}
        {/* HEADER: MERCHANT DIGITAL IDENTITY & CREDENTIALS                           */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-obsidian-border pb-6">
          <div className="flex items-center gap-3.5">
            <div className="relative h-14 w-14 rounded-2xl overflow-hidden border-2 border-brand/60 shadow-brand-glow shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=160&q=80"
                alt="Ama Kitchen & Grill"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-crisp font-display">
                  Ama Kitchen & Grill
                </h1>
                <Badge variant="momo" size="sm">
                  Verified Merchant
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5 font-mono">
                <span>@amakitchen</span>
                <span>•</span>
                <span>Till No: 910-234</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">MoMo Auto-Settle</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              leftIcon={<Printer className="h-4 w-4 text-brand" />}
              onClick={() => window.print()}
            >
              Print Kitchen Sheet
            </Button>
            <Button
              size="sm"
              variant="primary"
              className="font-bold shadow-brand-glow text-xs"
              leftIcon={<QrCode className="h-4 w-4" />}
              onClick={() => {
                const el = document.getElementById("qr-generator-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Generate Counter QR
            </Button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. BATCH GROUP ORDER MANAGER                                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <Card className="lg:col-span-12 rounded-2xl border-2 border-brand/40 bg-obsidian-850 p-6 shadow-brand-glow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-obsidian-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="brand" size="sm">
                    <Utensils className="h-3 w-3 mr-1" />
                    Active Group Lunch Batch
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground">
                    Batch Ref: #LUNCH-FRI-09
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-crisp font-display">
                  Batch Order: Friday Lunch Pack (20 Meals @ GHS 25/meal = GHS 500)
                </h2>
                <p className="text-xs text-muted-foreground">
                  Pre-ordered catering for Engineering & Design teams at Accra Innovation Hub.
                </p>
              </div>

              {/* Instant Reminder Trigger */}
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  variant="primary"
                  className="font-bold text-xs shadow-brand-glow whitespace-nowrap"
                  leftIcon={<Smartphone className="h-4 w-4" />}
                  isLoading={reminderSent}
                  onClick={handleSendMoMoReminders}
                >
                  Send USSD Push to 2 Pending
                </Button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Collected Metric */}
              <div className="rounded-xl border border-obsidian-border bg-obsidian-900/90 p-4 space-y-1">
                <span className="text-[11px] uppercase font-bold text-muted-foreground">
                  Collected Revenue
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-brand font-display">
                    GHS {collectedAmount}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    of GHS {totalBudget} total
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold block">
                  {paidOrdersCount}/{totalMeals} Meals Settled in Wallet
                </span>
              </div>

              {/* Progress Percentage */}
              <div className="rounded-xl border border-obsidian-border bg-obsidian-900/90 p-4 space-y-2">
                <div className="flex justify-between items-center text-[11px] font-bold">
                  <span className="uppercase text-muted-foreground">Batch Completion</span>
                  <span className="text-brand font-display text-base">{percentCollected}%</span>
                </div>
                <ProgressGauge
                  value={collectedAmount}
                  max={totalBudget}
                  size="md"
                  showPercent={false}
                />
                <span className="text-[11px] text-muted-foreground block">
                  Catering threshold reached (Min 15 required)
                </span>
              </div>

              {/* Warning Indicator */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 space-y-1 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <AlertCircle className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>2 Orders Awaiting MoMo Authorization</span>
                </div>
                <p className="text-[11px] text-crisp/80 leading-relaxed">
                  USSD prompt waiting on handsets for Michael & Esi. Auto-drops at 11:45 AM if unpaid.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* ========================================================================= */}
        {/* 2. ORDER & CUSTOMER MATRIX                                               */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-crisp font-display">
                Order & Customer Matrix
              </h3>
              <p className="text-xs text-muted-foreground">
                Real-time kitchen ticket stream with verified MoMo settlement state.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> 18 Paid
              </span>
              <span className="inline-flex items-center gap-1 text-amber-300 font-semibold ml-2">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" /> 2 Awaiting PIN
              </span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-obsidian-border bg-obsidian-850 shadow-card-subtle">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-obsidian-border bg-obsidian-900/80 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Order #</th>
                  <th className="py-3.5 px-4 font-semibold">Customer</th>
                  <th className="py-3.5 px-4 font-semibold">Meal Specifications</th>
                  <th className="py-3.5 px-4 font-semibold">Pickup Time</th>
                  <th className="py-3.5 px-4 font-semibold">Amount</th>
                  <th className="py-3.5 px-4 font-semibold">MoMo Status</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-obsidian-border/60">
                {orders.map((ord) => (
                  <tr
                    key={ord.id}
                    className="hover:bg-obsidian-800/60 transition-colors group"
                  >
                    {/* Order # */}
                    <td className="py-3.5 px-4 font-mono font-bold text-brand">
                      {ord.orderNumber}
                    </td>

                    {/* Customer */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <AvatarSingle
                          name={ord.customerName}
                          size="sm"
                          status={ord.status === "PAID" ? "paid" : "pending"}
                        />
                        <div>
                          <span className="font-bold text-crisp block">{ord.customerName}</span>
                          <span className="text-[11px] text-muted-foreground font-mono">
                            {ord.handle} ({formatMoMoPhone(ord.phone)})
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Meal */}
                    <td className="py-3.5 px-4 font-medium text-crisp/90 max-w-xs">
                      {ord.meal}
                    </td>

                    {/* Pickup Time */}
                    <td className="py-3.5 px-4 font-mono text-crisp">
                      <span className="inline-flex items-center gap-1 rounded-md bg-obsidian-800 px-2 py-1 border border-obsidian-border">
                        <Clock className="h-3 w-3 text-brand" />
                        {ord.pickupTime}
                      </span>
                    </td>

                    {/* Amount */}
                    <td className="py-3.5 px-4 font-mono font-bold text-brand text-sm">
                      GHS {ord.amount}
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4">
                      {ord.status === "PAID" ? (
                        <Badge variant="momo" size="sm">
                          <CheckCircle2 className="h-3 w-3 mr-0.5" />
                          Settled
                        </Badge>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 text-[10px] font-semibold animate-pulse">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          Awaiting PIN
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      {ord.status === "PAID" ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs hover:text-brand"
                          leftIcon={<Eye className="h-3.5 w-3.5" />}
                          onClick={() => setSelectedReceiptOrder(ord)}
                        >
                          View Receipt
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs border-amber-500/40 text-amber-300 hover:bg-amber-500/10"
                          leftIcon={<Smartphone className="h-3.5 w-3.5 text-amber-400" />}
                          onClick={() => {
                            alert(`MoMo USSD Prompt redispatched to ${ord.phone}`);
                          }}
                        >
                          Ping USSD
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. INSTANT PAYMENT LINK & QR GENERATOR                                   */}
        {/* ========================================================================= */}
        <div id="qr-generator-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Payment Link Customizer (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            <Card className="glass-card border-obsidian-border p-6 space-y-5">
              <div className="flex items-center gap-2 border-b border-obsidian-border pb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand border border-brand/30">
                  <QrCode className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-crisp font-display">
                    Instant Payment Link Generator
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Create dynamic table links or static countertop QR standees.
                  </p>
                </div>
              </div>

              {/* Title & Price */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-crisp">
                    Item / Group Order Title
                  </label>
                  <input
                    type="text"
                    value={linkTitle}
                    onChange={(e) => setLinkTitle(e.target.value)}
                    className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 p-2.5 text-xs text-crisp placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-crisp">
                      Fixed Price per Unit (GHS)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-brand">
                        GHS
                      </span>
                      <input
                        type="number"
                        value={linkPrice}
                        onChange={(e) => setLinkPrice(parseFloat(e.target.value) || 0)}
                        className="w-full rounded-xl border border-obsidian-border bg-obsidian-800 py-2.5 pl-12 pr-4 text-xs font-mono font-bold text-crisp focus:border-brand focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-crisp">
                      Payment Link Format
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setLinkType("DYNAMIC")}
                        className={`rounded-xl border p-2 text-xs font-semibold transition-all ${
                          linkType === "DYNAMIC"
                            ? "border-brand bg-brand/15 text-brand shadow-momo-badge"
                            : "border-obsidian-border bg-obsidian-800 text-muted-foreground hover:text-crisp"
                        }`}
                      >
                        Dynamic Order
                      </button>
                      <button
                        type="button"
                        onClick={() => setLinkType("STATIC")}
                        className={`rounded-xl border p-2 text-xs font-semibold transition-all ${
                          linkType === "STATIC"
                            ? "border-brand bg-brand/15 text-brand shadow-momo-badge"
                            : "border-obsidian-border bg-obsidian-800 text-muted-foreground hover:text-crisp"
                        }`}
                      >
                        Static Standee
                      </button>
                    </div>
                  </div>
                </div>

                {/* Generated Link Display */}
                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-semibold text-muted-foreground">
                    Generated Mova Checkout Link
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 rounded-xl border border-obsidian-border bg-obsidian-900/90 px-3.5 py-2.5 text-xs font-mono text-brand truncate">
                      {activePaymentLink}
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
              </div>
            </Card>
          </div>

          {/* Right Column: Physical Counter QR Standee Card (5 Cols) */}
          <div className="lg:col-span-5">
            <Card className="rounded-2xl border-2 border-brand/50 bg-obsidian-850 p-6 text-center space-y-4 shadow-brand-glow">
              <div className="space-y-1">
                <Badge variant="momo" size="sm">
                  MTN MoMo Accepted Here
                </Badge>
                <h4 className="text-lg font-bold text-crisp font-display">
                  Table & Counter Standee
                </h4>
                <p className="text-xs text-muted-foreground">
                  Scan with any camera or MoMo app to pay without cash.
                </p>
              </div>

              {/* Realistic QR Code Graphic Mockup */}
              <div className="mx-auto w-56 h-56 rounded-2xl bg-white p-4 flex flex-col items-center justify-center shadow-lg relative border-4 border-brand">
                {/* QR Canvas Graphic */}
                <div className="relative w-full h-full flex flex-col items-center justify-between p-2">
                  <div className="grid grid-cols-7 grid-rows-7 gap-1.5 w-full h-full p-1">
                    {/* Corners */}
                    <div className="col-span-2 row-span-2 bg-obsidian-950 rounded-sm p-1">
                      <div className="w-full h-full border-2 border-white bg-obsidian-950" />
                    </div>
                    <div className="col-span-3 row-span-1 bg-obsidian-900 rounded-sm" />
                    <div className="col-span-2 row-span-2 bg-obsidian-950 rounded-sm p-1">
                      <div className="w-full h-full border-2 border-white bg-obsidian-950" />
                    </div>
                    <div className="col-span-2 row-span-3 bg-obsidian-900 rounded-sm" />
                    {/* Center MoMo M logo */}
                    <div className="col-span-3 row-span-3 bg-brand rounded-lg flex items-center justify-center font-black text-obsidian-950 text-sm shadow-md">
                      M
                    </div>
                    <div className="col-span-2 row-span-3 bg-obsidian-900 rounded-sm" />
                    <div className="col-span-2 row-span-2 bg-obsidian-950 rounded-sm p-1">
                      <div className="w-full h-full border-2 border-white bg-obsidian-950" />
                    </div>
                    <div className="col-span-3 row-span-1 bg-obsidian-900 rounded-sm" />
                    <div className="col-span-2 row-span-2 bg-obsidian-900 rounded-sm" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-crisp font-mono">
                  Till #910-234 • @amakitchen
                </span>
                <span className="text-[11px] text-brand block font-semibold">
                  GHS {linkPrice} / Meal
                </span>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                  onClick={() => alert("Downloading High-Resolution PDF Standee for printing...")}
                  leftIcon={<Download className="h-3.5 w-3.5 text-brand" />}
                >
                  Download Standee
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1 font-bold shadow-brand-glow text-xs"
                  onClick={handleCopyLink}
                >
                  Share Link
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. VERIFIED DIGITAL RECEIPT MODAL                                        */}
        {/* ========================================================================= */}
        {selectedReceiptOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/85 backdrop-blur-md">
            <div className="w-full max-w-md rounded-2xl border-2 border-brand/50 bg-obsidian-850 p-6 shadow-brand-glow-lg space-y-6 animate-in fade-in zoom-in-95 duration-200">
              {/* Receipt Header */}
              <div className="flex items-center justify-between pb-3 border-b border-obsidian-border">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand font-black text-obsidian-950 shadow-brand-glow text-xs">
                    M
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-crisp font-display">
                      Verified Micro-Receipt
                    </h3>
                    <p className="text-[11px] text-muted-foreground font-mono">
                      {selectedReceiptOrder.orderNumber}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedReceiptOrder(null)}
                  className="p-1 rounded-lg text-muted-foreground hover:bg-obsidian-800 hover:text-crisp"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Printable Micro-Receipt Visual Container */}
              <div className="rounded-2xl border border-brand/30 bg-obsidian-900/90 p-5 space-y-4 relative overflow-hidden">
                {/* Yellow Header Banner */}
                <div className="flex items-center justify-between pb-3 border-b border-obsidian-border">
                  <div>
                    <h4 className="text-sm font-black text-brand font-display uppercase tracking-wider">
                      Ama Kitchen & Grill
                    </h4>
                    <span className="text-[10px] text-muted-foreground">
                      Accra Innovation Hub, East Legon
                    </span>
                  </div>
                  <Badge variant="momo" size="sm">
                    Verified MoMo
                  </Badge>
                </div>

                {/* Line Items */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between pb-1 border-b border-obsidian-border/50">
                    <span className="text-muted-foreground">Customer:</span>
                    <span className="font-semibold text-crisp">
                      {selectedReceiptOrder.customerName} ({selectedReceiptOrder.handle})
                    </span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-obsidian-border/50">
                    <span className="text-muted-foreground">Handset:</span>
                    <span className="font-mono text-crisp">{formatMoMoPhone(selectedReceiptOrder.phone)}</span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-obsidian-border/50">
                    <span className="text-muted-foreground">Meal Item:</span>
                    <span className="font-medium text-crisp/90 text-right max-w-[200px]">
                      {selectedReceiptOrder.meal}
                    </span>
                  </div>
                  <div className="flex justify-between pb-1 border-b border-obsidian-border/50">
                    <span className="text-muted-foreground">Pickup Schedule:</span>
                    <span className="font-mono text-brand font-bold">
                      {selectedReceiptOrder.pickupTime}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold pt-1">
                    <span className="text-crisp">Total Amount:</span>
                    <span className="text-brand font-display text-base">
                      GHS {selectedReceiptOrder.amount}.00
                    </span>
                  </div>
                </div>

                {/* MoMo Carrier Verification Meta */}
                <div className="p-2.5 rounded-xl bg-obsidian-950 border border-obsidian-border/70 text-[10px] font-mono text-muted-foreground space-y-1">
                  <div className="flex justify-between">
                    <span>MoMo Tx ID:</span>
                    <span className="text-brand font-bold">{selectedReceiptOrder.txId || "MOMO-918231-GH"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network Rail:</span>
                    <span className="text-emerald-400">MTN Mobile Money Ghana</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Verification Hash:</span>
                    <span>sha256:7f9a8...3b1</span>
                  </div>
                </div>

                {/* Merchant Signature */}
                <div className="pt-2 flex justify-between items-center text-[10px] text-muted-foreground">
                  <span>Merchant Sig: <strong className="text-crisp font-serif italic text-xs">Ama Ofori</strong></span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" /> Anti-Fraud Certified
                  </span>
                </div>
              </div>

              {/* Actions: WhatsApp Share & Print */}
              <div className="space-y-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Verified Digital Receipt from Ama Kitchen!\n\nOrder #${selectedReceiptOrder.orderNumber}\nCustomer: ${selectedReceiptOrder.customerName}\nMeal: ${selectedReceiptOrder.meal}\nPickup: ${selectedReceiptOrder.pickupTime}\nPaid: GHS ${selectedReceiptOrder.amount} via MTN MoMo (${selectedReceiptOrder.txId})\n\nThank you for ordering with Mova!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 text-xs transition-colors shadow-lg shadow-emerald-950/50"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share Receipt to WhatsApp</span>
                </a>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                    leftIcon={<Printer className="h-3.5 w-3.5 text-brand" />}
                    onClick={() => window.print()}
                  >
                    Print Micro-Receipt
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1 font-bold shadow-brand-glow text-xs"
                    onClick={() => setSelectedReceiptOrder(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Shell>
  );
}
