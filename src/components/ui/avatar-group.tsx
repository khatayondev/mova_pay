"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarItem {
  id: string;
  name: string;
  avatarUrl?: string;
  status?: "online" | "paid" | "pending";
  initials?: string;
}

interface AvatarGroupProps {
  avatars: AvatarItem[];
  maxVisible?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showStatusRings?: boolean;
}

export function AvatarGroup({
  avatars,
  maxVisible = 4,
  size = "md",
  className,
  showStatusRings = false,
}: AvatarGroupProps) {
  const visible = avatars.slice(0, maxVisible);
  const remaining = Math.max(avatars.length - maxVisible, 0);

  const sizeClasses = {
    sm: "h-7 w-7 text-[10px]",
    md: "h-9 w-9 text-xs",
    lg: "h-11 w-11 text-sm font-semibold",
  };

  const statusMap = {
    online: "bg-emerald-400 ring-obsidian-900",
    paid: "bg-brand ring-obsidian-900",
    pending: "bg-amber-400 ring-obsidian-900",
  };

  return (
    <div className={cn("inline-flex items-center -space-x-2.5 overflow-hidden p-1", className)}>
      {visible.map((item, idx) => {
        const initials =
          item.initials ||
          item.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();

        return (
          <div
            key={item.id || idx}
            title={item.name}
            className={cn(
              "relative inline-flex items-center justify-center rounded-full border-2 border-obsidian bg-obsidian-800 text-crisp ring-1 ring-white/10 transition-transform duration-150 hover:z-20 hover:scale-110",
              sizeClasses[size]
            )}
          >
            {item.avatarUrl ? (
              <Image
                src={item.avatarUrl}
                alt={item.name}
                width={44}
                height={44}
                className="h-full w-full rounded-full object-cover"
                unoptimized
              />
            ) : (
              <span className="font-semibold text-brand/90 tracking-tight">
                {initials}
              </span>
            )}

            {showStatusRings && item.status && (
              <span
                className={cn(
                  "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2",
                  statusMap[item.status]
                )}
              />
            )}
          </div>
        );
      })}

      {remaining > 0 && (
        <div
          title={`${remaining} more members`}
          className={cn(
            "relative inline-flex items-center justify-center rounded-full border-2 border-obsidian bg-obsidian-700/90 text-brand font-semibold ring-1 ring-white/10 transition-transform duration-150 hover:z-20 hover:scale-105",
            sizeClasses[size]
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
}

export function AvatarSingle({
  name,
  avatarUrl,
  size = "md",
  status,
  className,
}: {
  name: string;
  avatarUrl?: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: "online" | "paid" | "pending";
  className?: string;
}) {
  const sizeMap = {
    sm: "h-7 w-7 text-[10px]",
    md: "h-9 w-9 text-xs",
    lg: "h-11 w-11 text-sm",
    xl: "h-14 w-14 text-base",
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full border-2 border-obsidian bg-obsidian-800 text-crisp ring-1 ring-white/10",
        sizeMap[size],
        className
      )}
    >
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={name}
          width={56}
          height={56}
          className="h-full w-full rounded-full object-cover"
          unoptimized
        />
      ) : (
        <span className="font-bold text-brand">{initials}</span>
      )}

      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ring-2 ring-obsidian-900",
            status === "paid" ? "bg-brand" : status === "online" ? "bg-emerald-400" : "bg-amber-400"
          )}
        />
      )}
    </div>
  );
}
