"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Receipt,
  PiggyBank,
  Activity,
  Plus,
  Bell,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Store,
  User,
  ArrowUpRight,
  Send,
  Zap,
  Sparkles,
  ShieldCheck,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AvatarSingle } from "@/components/ui/avatar-group";
import { cn } from "@/lib/utils";

interface ShellProps {
  children: React.ReactNode;
}

type AccountType = "personal" | "merchant";

interface ProfileAccount {
  type: AccountType;
  name: string;
  handle: string;
  phone: string;
  avatarUrl?: string;
  badgeLabel: string;
}

const accounts: Record<AccountType, ProfileAccount> = {
  personal: {
    type: "personal",
    name: "Gabriel Okello",
    handle: "@gabriel",
    phone: "+256 772 120 488",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    badgeLabel: "MoMo Tier 2 Verified",
  },
  merchant: {
    type: "merchant",
    name: "Ama Kitchen & Grill",
    handle: "@amakitchen",
    phone: "+256 788 440 912",
    avatarUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=120&q=80",
    badgeLabel: "Registered Merchant",
  },
};

export function Shell({ children }: ShellProps) {
  const pathname = usePathname();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeAccount, setActiveAccount] = useState<AccountType>("personal");
  const [isQuickActionOpen, setIsQuickActionOpen] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);

  const profile = accounts[activeAccount];

  const navItems = [
    {
      label: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
      badge: undefined,
    },
    {
      label: "Split",
      href: "/split",
      icon: Receipt,
      badge: "2 Pending",
    },
    {
      label: "Fund",
      href: "/fund",
      icon: PiggyBank,
      badge: "Live",
    },
    {
      label: "Activity",
      href: "/pay",
      icon: Activity,
      badge: undefined,
    },
  ];

  const desktopQuickShortcuts = [
    {
      label: "Mova Pay (P2P)",
      href: "/pay",
      icon: Send,
      color: "text-blue-600",
    },
    {
      label: "Merchant Hub",
      href: "/merchant",
      icon: Store,
      color: "text-emerald-600",
    },
  ];

  const toggleAccount = () => {
    setActiveAccount((prev) => (prev === "personal" ? "merchant" : "personal"));
  };

  return (
    <div className="min-h-screen bg-[#FBFDFF] text-slate-900 flex flex-col font-sans selection:bg-brand selection:text-slate-950">
      {/* ========================================================================= */}
      {/* 1. TOP NAVIGATION & IDENTITY BAR (LIGHT SAAS CLEAN)                       */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 h-16 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="flex h-full items-center justify-between px-4 sm:px-6">
          {/* Left: Minimalist modern "Mova" logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2.5 transition-transform duration-150 hover:scale-[1.02]"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-brand via-[#FFE875] to-brand text-slate-950 font-black shadow-sm">
                <span className="font-extrabold text-base tracking-tighter font-display">
                  M
                </span>
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 font-display">
                  mova
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                  Social MoMo
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Live MoMo Rail Status Pill */}
          <div className="flex items-center">
            <div className="flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200/80 px-3 py-1 shadow-sm">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                <span className="hidden xs:inline">MTN MoMo:</span>
                <span className="text-emerald-600 font-bold">Connected</span>
              </span>
            </div>
          </div>

          {/* Right: Digital Identity & Notification Bell */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setHasUnreadNotifications(false)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm"
              aria-label="View notifications"
            >
              <Bell className="h-4 w-4" />
              {hasUnreadNotifications && (
                <span className="absolute top-2 right-2 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>
              )}
            </button>

            <button
              onClick={toggleAccount}
              title="Click to toggle Personal / Merchant account"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 pr-3 shadow-sm hover:border-blue-400 transition-all group"
            >
              <AvatarSingle
                name={profile.name}
                avatarUrl={profile.avatarUrl}
                size="sm"
                status={activeAccount === "merchant" ? "paid" : "online"}
              />

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors max-w-[70px] sm:max-w-[100px] truncate">
                    {profile.handle}
                  </span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 fill-blue-50 shrink-0" />
                </div>
                <span className="hidden sm:inline-block text-[10px] text-slate-500 leading-tight">
                  {profile.type === "personal" ? "Personal" : "Merchant"}
                </span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. MAIN LAYOUT (DESKTOP SIDEBAR + CONTENT AREA)                            */}
      {/* ========================================================================= */}
      <div className="flex flex-1 relative">
        {/* Desktop Sidebar Rail */}
        <aside
          className={cn(
            "hidden md:flex flex-col justify-between border-r border-slate-200/80 bg-white/80 backdrop-blur-md transition-all duration-300 z-30",
            isSidebarCollapsed ? "w-18" : "w-64"
          )}
        >
          {/* Top of Sidebar: Main Navigation Links */}
          <div className="p-3 space-y-5">
            {/* Sidebar toggle button */}
            <div className="flex justify-end px-1">
              <button
                type="button"
                onClick={() => setIsSidebarCollapsed((prev) => !prev)}
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors shadow-sm"
                title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {isSidebarCollapsed ? (
                  <ChevronRight className="h-3.5 w-3.5" />
                ) : (
                  <ChevronLeft className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            {/* Quick Action Button in Sidebar */}
            <div className="px-1">
              <Button
                variant="primary"
                size={isSidebarCollapsed ? "icon" : "default"}
                onClick={() => setIsQuickActionOpen(true)}
                className={cn(
                  "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-pill-glow",
                  isSidebarCollapsed ? "h-10 w-10 p-0 mx-auto" : ""
                )}
                title="New Request / Launch Goal"
              >
                <Plus className="h-4 w-4" />
                {!isSidebarCollapsed && <span className="ml-2 text-xs">New Request</span>}
              </Button>
            </div>

            {/* Primary Nav Menu */}
            <nav className="space-y-1 px-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href));

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold transition-all group",
                      isActive
                        ? "bg-blue-50 text-blue-700 border border-blue-100 shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent"
                    )}
                    title={isSidebarCollapsed ? item.label : undefined}
                  >
                    <Icon className={cn("h-4 w-4 shrink-0 transition-colors", isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600")} />
                    {!isSidebarCollapsed && (
                      <span className="flex-1 truncate">{item.label}</span>
                    )}
                    {!isSidebarCollapsed && item.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100/70 text-blue-700">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Shortcuts Divider */}
            {!isSidebarCollapsed && (
              <div className="pt-4 border-t border-slate-100 px-2 space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Connected Rails
                </span>
                {desktopQuickShortcuts.map((shortcut) => {
                  const Icon = shortcut.icon;
                  return (
                    <Link
                      key={shortcut.label}
                      href={shortcut.href}
                      className="flex items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className={cn("h-3.5 w-3.5", shortcut.color)} />
                        <span>{shortcut.label}</span>
                      </span>
                      <ArrowUpRight className="h-3 w-3 opacity-50" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Bottom Profile Card & 1-Click Account Switcher */}
          <div className="p-3 border-t border-slate-200/80 bg-slate-50/60">
            <div
              className={cn(
                "rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm transition-all hover:border-blue-300",
                isSidebarCollapsed ? "p-1.5 flex justify-center" : ""
              )}
            >
              {!isSidebarCollapsed ? (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <AvatarSingle
                        name={profile.name}
                        avatarUrl={profile.avatarUrl}
                        size="sm"
                        status="paid"
                      />
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-slate-900 truncate">
                            {profile.name}
                          </span>
                          <CheckCircle2 className="h-3 w-3 text-blue-600 shrink-0" />
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono truncate">
                          {profile.handle}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={toggleAccount}
                    className="w-full flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all"
                  >
                    <span className="flex items-center gap-1.5">
                      {activeAccount === "personal" ? (
                        <Store className="h-3 w-3 text-blue-600" />
                      ) : (
                        <User className="h-3 w-3 text-blue-600" />
                      )}
                      <span>
                        Switch to {activeAccount === "personal" ? "Merchant Hub" : "Personal"}
                      </span>
                    </span>
                    <span className="text-[10px] text-blue-600 font-mono font-bold">
                      {activeAccount === "personal" ? "@amakitchen" : "@gabriel"}
                    </span>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={toggleAccount}
                  title={`Switch to ${activeAccount === "personal" ? "Merchant" : "Personal"}`}
                  className="flex items-center justify-center p-1 rounded-lg hover:bg-slate-100 text-blue-600"
                >
                  <AvatarSingle
                    name={profile.name}
                    avatarUrl={profile.avatarUrl}
                    size="sm"
                    status="paid"
                  />
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* Content Viewport */}
        <main className="flex-1 min-w-0 pb-24 md:pb-8">
          {children}
        </main>
      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE BOTTOM TAB NAVIGATION & ELEVATED FAB                             */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-2 pb-safe shadow-lg">
        <div className="relative flex h-16 items-center justify-around">
          <Link
            href="/dashboard"
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 transition-colors",
              pathname === "/dashboard" ? "text-blue-600 font-bold" : "text-slate-400 hover:text-slate-600"
            )}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span className="text-[10px] font-medium mt-1">Overview</span>
          </Link>

          <Link
            href="/split"
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 transition-colors",
              pathname?.startsWith("/split") ? "text-blue-600 font-bold" : "text-slate-400 hover:text-slate-600"
            )}
          >
            <Receipt className="h-5 w-5" />
            <span className="text-[10px] font-medium mt-1">Split</span>
          </Link>

          {/* Center Floating Action Button (FAB) */}
          <div className="relative flex-1 flex justify-center -top-4">
            <button
              type="button"
              onClick={() => setIsQuickActionOpen(true)}
              className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-pill-glow border-4 border-white transition-transform active:scale-95"
              aria-label="New Request / Launch Goal"
            >
              <Plus className="h-6 w-6 stroke-[2.5]" />
            </button>
          </div>

          <Link
            href="/fund"
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 transition-colors",
              pathname?.startsWith("/fund") ? "text-blue-600 font-bold" : "text-slate-400 hover:text-slate-600"
            )}
          >
            <PiggyBank className="h-5 w-5" />
            <span className="text-[10px] font-medium mt-1">Fund</span>
          </Link>

          <Link
            href="/pay"
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 transition-colors",
              pathname?.startsWith("/pay") ? "text-blue-600 font-bold" : "text-slate-400 hover:text-slate-600"
            )}
          >
            <Activity className="h-5 w-5" />
            <span className="text-[10px] font-medium mt-1">Activity</span>
          </Link>
        </div>
      </div>

      {/* Quick Action Modal */}
      <AnimatePresence>
        {isQuickActionOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg rounded-t-2xl sm:rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      Launch MoMo Action
                    </h3>
                    <p className="text-xs text-slate-500">
                      Connected social payments for {profile.name}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsQuickActionOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="/pay"
                  onClick={() => setIsQuickActionOpen(false)}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-blue-400 hover:bg-blue-50/40 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:scale-105 transition-transform">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Mova Pay
                    </h4>
                    <p className="text-xs text-slate-500">
                      Instant P2P MoMo push to any number
                    </p>
                  </div>
                </Link>

                <Link
                  href="/split"
                  onClick={() => setIsQuickActionOpen(false)}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-blue-400 hover:bg-blue-50/40 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700 group-hover:scale-105 transition-transform">
                    <Receipt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Split Bill / Group
                    </h4>
                    <p className="text-xs text-slate-500">
                      Collect evenly or weighted with tracking
                    </p>
                  </div>
                </Link>

                <Link
                  href="/fund"
                  onClick={() => setIsQuickActionOpen(false)}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-blue-400 hover:bg-blue-50/40 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform">
                    <PiggyBank className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Start Crowdfund
                    </h4>
                    <p className="text-xs text-slate-500">
                      Community goals, emergencies & projects
                    </p>
                  </div>
                </Link>

                <Link
                  href="/merchant"
                  onClick={() => setIsQuickActionOpen(false)}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-blue-400 hover:bg-blue-50/40 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:scale-105 transition-transform">
                    <Store className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Merchant Checkout
                    </h4>
                    <p className="text-xs text-slate-500">
                      Collect table orders or vendor groups
                    </p>
                  </div>
                </Link>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Bank-grade MTN MoMo 256-bit encryption
                </span>
                <span className="font-mono text-[11px] text-slate-700">
                  Active: {profile.phone}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
