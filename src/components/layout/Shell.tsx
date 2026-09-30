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
  Search,
  SlidersHorizontal,
  X,
  ShieldCheck,
  Building2,
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

  // Navigation Items for Desktop Sidebar and Mobile Bottom Bar
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
      color: "text-brand",
    },
    {
      label: "Merchant Hub",
      href: "/merchant",
      icon: Store,
      color: "text-emerald-400",
    },
  ];

  const toggleAccount = () => {
    setActiveAccount((prev) => (prev === "personal" ? "merchant" : "personal"));
  };

  return (
    <div className="min-h-screen bg-obsidian text-foreground flex flex-col selection:bg-brand selection:text-obsidian-950">
      {/* ========================================================================= */}
      {/* 1. TOP NAVIGATION & IDENTITY BAR                                         */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 h-16 w-full border-b border-obsidian-border bg-obsidian/85 backdrop-blur-xl transition-all">
        <div className="flex h-full items-center justify-between px-3.5 sm:px-6">
          {/* Left: Minimalist modern "Mova" logo with glowing yellow currency node */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2.5 transition-transform duration-150 hover:scale-[1.02]"
            >
              {/* Logo icon box with currency node */}
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-obsidian-800 border border-obsidian-border text-brand transition-all duration-200 group-hover:border-brand/40 group-hover:shadow-brand-glow">
                <span className="font-extrabold text-lg tracking-tighter text-brand font-display">
                  M
                </span>
                {/* Glowing yellow currency node */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand shadow-brand-glow" />
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-crisp font-display">
                    Mova
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest text-brand bg-brand/10 border border-brand/20 px-1.5 py-0.2 rounded-md">
                    Social MoMo
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Center: Live MoMo Rail Status Pill */}
          <div className="flex items-center">
            <div className="flex items-center gap-2 rounded-full bg-obsidian-850/90 border border-obsidian-border px-3 py-1 sm:px-3.5 sm:py-1.5 shadow-sm transition-all hover:border-brand/30">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-crisp/90 flex items-center gap-1">
                <span className="hidden xs:inline">MTN MoMo Rail:</span>
                <span className="font-semibold text-brand">Connected</span>
              </span>
            </div>
          </div>

          {/* Right: Digital Identity & Notification Bell */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Notification Bell */}
            <button
              type="button"
              onClick={() => setHasUnreadNotifications(false)}
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-obsidian-border bg-obsidian-800 text-crisp/80 transition-colors hover:border-brand/40 hover:text-crisp"
              aria-label="View notifications"
            >
              <Bell className="h-4 w-4" />
              {hasUnreadNotifications && (
                <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
              )}
            </button>

            {/* Identity Badge with Verified Handle @gabriel and Trust Checkmark */}
            <button
              onClick={toggleAccount}
              title="Click to toggle Personal / Merchant account"
              className="flex items-center gap-2 rounded-full border border-obsidian-border bg-obsidian-800/90 p-1 pr-2.5 sm:pr-3 transition-all duration-150 hover:border-brand/50 hover:bg-obsidian-700/80 group"
            >
              <AvatarSingle
                name={profile.name}
                avatarUrl={profile.avatarUrl}
                size="sm"
                status={activeAccount === "merchant" ? "paid" : "online"}
              />

              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-crisp group-hover:text-brand transition-colors max-w-[70px] sm:max-w-[100px] truncate">
                    {profile.handle}
                  </span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand fill-brand/20 shrink-0" />
                </div>
                <span className="hidden sm:inline-block text-[10px] text-muted-foreground leading-tight">
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
            "hidden md:flex flex-col justify-between border-r border-obsidian-border bg-obsidian-900/60 backdrop-blur-md transition-all duration-300 z-30",
            isSidebarCollapsed ? "w-18" : "w-64"
          )}
        >
          {/* Top of Sidebar: Main Navigation Links */}
          <div className="p-3 space-y-6">
            {/* Sidebar toggle button */}
            <div className="flex justify-end px-1">
              <button
                type="button"
                onClick={() => setIsSidebarCollapsed((prev) => !prev)}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-obsidian-border bg-obsidian-800 text-muted-foreground hover:text-crisp hover:border-brand/40 transition-colors"
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
                variant="default"
                size={isSidebarCollapsed ? "icon" : "default"}
                onClick={() => setIsQuickActionOpen(true)}
                className={cn(
                  "w-full shadow-brand-glow font-bold",
                  isSidebarCollapsed ? "h-11 w-11 p-0 mx-auto" : ""
                )}
                title="New Request / Launch Goal"
              >
                <Plus className="h-5 w-5" />
                {!isSidebarCollapsed && <span className="ml-2">New Request</span>}
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
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all group",
                      isActive
                        ? "bg-brand/15 text-brand border border-brand/30 shadow-momo-badge"
                        : "text-muted-foreground hover:bg-obsidian-800 hover:text-crisp hover:border-obsidian-borderElevated border border-transparent"
                    )}
                    title={isSidebarCollapsed ? item.label : undefined}
                  >
                    <Icon className={cn("h-4 w-4 shrink-0 transition-colors", isActive ? "text-brand" : "text-muted-foreground group-hover:text-crisp")} />
                    {!isSidebarCollapsed && (
                      <span className="flex-1 truncate">{item.label}</span>
                    )}
                    {!isSidebarCollapsed && item.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-brand/20 text-brand border border-brand/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Shortcuts Divider */}
            {!isSidebarCollapsed && (
              <div className="pt-4 border-t border-obsidian-border/70 px-2 space-y-1">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                  Connected Rails
                </span>
                {desktopQuickShortcuts.map((shortcut) => {
                  const Icon = shortcut.icon;
                  return (
                    <Link
                      key={shortcut.label}
                      href={shortcut.href}
                      className="flex items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium text-muted-foreground hover:text-crisp hover:bg-obsidian-800 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className={cn("h-3.5 w-3.5", shortcut.color)} />
                        <span>{shortcut.label}</span>
                      </span>
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Bottom Profile Card & 1-Click Account Switcher */}
          <div className="p-3 border-t border-obsidian-border bg-obsidian-850/80">
            <div
              className={cn(
                "rounded-xl border border-obsidian-border bg-obsidian-800/90 p-2.5 transition-all hover:border-brand/40",
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
                          <span className="text-xs font-bold text-crisp truncate">
                            {profile.name}
                          </span>
                          <CheckCircle2 className="h-3 w-3 text-brand shrink-0" />
                        </div>
                        <span className="text-[10px] text-muted-foreground font-mono truncate">
                          {profile.handle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 1-Click Toggle between Personal and Merchant */}
                  <button
                    type="button"
                    onClick={toggleAccount}
                    className="w-full flex items-center justify-between rounded-lg border border-obsidian-borderElevated bg-obsidian-900/90 px-2.5 py-1.5 text-[11px] font-semibold text-crisp transition-all hover:border-brand/50 hover:bg-obsidian-950"
                  >
                    <span className="flex items-center gap-1.5">
                      {activeAccount === "personal" ? (
                        <Store className="h-3 w-3 text-brand" />
                      ) : (
                        <User className="h-3 w-3 text-brand" />
                      )}
                      <span>
                        Switch to {activeAccount === "personal" ? "Merchant Hub" : "Personal"}
                      </span>
                    </span>
                    <span className="text-[10px] text-brand font-mono font-bold">
                      {activeAccount === "personal" ? "@amakitchen" : "@gabriel"}
                    </span>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={toggleAccount}
                  title={`Switch to ${activeAccount === "personal" ? "Merchant" : "Personal"}`}
                  className="flex items-center justify-center p-1 rounded-lg hover:bg-obsidian-700 text-brand"
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
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-obsidian-border bg-obsidian-900/95 backdrop-blur-xl px-2 pb-safe">
        <div className="relative flex h-16 items-center justify-around">
          {/* Left Tabs: Overview & Split */}
          <Link
            href="/dashboard"
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 transition-colors",
              pathname === "/dashboard" ? "text-brand" : "text-muted-foreground hover:text-crisp"
            )}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span className="text-[10px] font-medium mt-1">Overview</span>
          </Link>

          <Link
            href="/split"
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 transition-colors",
              pathname?.startsWith("/split") ? "text-brand" : "text-muted-foreground hover:text-crisp"
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
              className="relative flex h-13 w-13 items-center justify-center rounded-full bg-brand text-obsidian-950 shadow-brand-glow-lg border-4 border-obsidian transition-transform active:scale-95 active:shadow-brand-glow"
              aria-label="New Request / Launch Goal"
            >
              <Plus className="h-6 w-6 stroke-[2.5]" />
              <span className="sr-only">New Request / Launch Goal</span>
            </button>
          </div>

          {/* Right Tabs: Fund & Activity */}
          <Link
            href="/fund"
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 transition-colors",
              pathname?.startsWith("/fund") ? "text-brand" : "text-muted-foreground hover:text-crisp"
            )}
          >
            <PiggyBank className="h-5 w-5" />
            <span className="text-[10px] font-medium mt-1">Fund</span>
          </Link>

          <Link
            href="/pay"
            className={cn(
              "flex flex-1 flex-col items-center justify-center py-1 transition-colors",
              pathname?.startsWith("/pay") ? "text-brand" : "text-muted-foreground hover:text-crisp"
            )}
          >
            <Activity className="h-5 w-5" />
            <span className="text-[10px] font-medium mt-1">Activity</span>
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. QUICK ACTION MODAL (TRIGGERED BY FAB & SIDEBAR CTA)                    */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isQuickActionOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-obsidian-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg rounded-t-2xl sm:rounded-2xl border border-obsidian-border bg-obsidian-850 p-6 shadow-card-elevated"
            >
              <div className="flex items-center justify-between pb-4 border-b border-obsidian-border">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand border border-brand/30">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-crisp font-display">
                      Launch MoMo Action
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Connected social payments for {profile.name}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsQuickActionOpen(false)}
                  className="rounded-lg p-1.5 text-muted-foreground hover:text-crisp hover:bg-obsidian-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="/pay"
                  onClick={() => setIsQuickActionOpen(false)}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-obsidian-border bg-obsidian-800 hover:border-brand/40 hover:bg-obsidian-750 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-brand/15 text-brand group-hover:scale-105 transition-transform">
                    <Send className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-crisp group-hover:text-brand transition-colors">
                      Mova Pay
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Instant P2P MoMo push to any number
                    </p>
                  </div>
                </Link>

                <Link
                  href="/split"
                  onClick={() => setIsQuickActionOpen(false)}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-obsidian-border bg-obsidian-800 hover:border-brand/40 hover:bg-obsidian-750 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-brand/15 text-brand group-hover:scale-105 transition-transform">
                    <Receipt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-crisp group-hover:text-brand transition-colors">
                      Split Bill / Group
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Collect evenly or weighted with tracking
                    </p>
                  </div>
                </Link>

                <Link
                  href="/fund"
                  onClick={() => setIsQuickActionOpen(false)}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-obsidian-border bg-obsidian-800 hover:border-brand/40 hover:bg-obsidian-750 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-brand/15 text-brand group-hover:scale-105 transition-transform">
                    <PiggyBank className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-crisp group-hover:text-brand transition-colors">
                      Start Crowdfund
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Community goals, emergencies & projects
                    </p>
                  </div>
                </Link>

                <Link
                  href="/merchant"
                  onClick={() => setIsQuickActionOpen(false)}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-obsidian-border bg-obsidian-800 hover:border-brand/40 hover:bg-obsidian-750 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 group-hover:scale-105 transition-transform">
                    <Store className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-crisp group-hover:text-emerald-400 transition-colors">
                      Merchant Checkout
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Collect table orders or vendor groups
                    </p>
                  </div>
                </Link>
              </div>

              <div className="mt-4 pt-3 border-t border-obsidian-border flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-brand" />
                  Bank-grade MTN MoMo 256-bit encryption
                </span>
                <span className="font-mono text-[11px] text-crisp">
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
