"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressGaugeProps {
  value: number; // Current value or collected amount
  max?: number; // Target / maximum value (default 100)
  variant?: "linear" | "circular";
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
  subLabel?: string;
  showPercent?: boolean;
  valuePrefix?: string;
  valueSuffix?: string;
  className?: string;
  animated?: boolean;
}

export function ProgressGauge({
  value,
  max = 100,
  variant = "linear",
  size = "md",
  label,
  subLabel,
  showPercent = true,
  valuePrefix,
  valueSuffix,
  className,
}: ProgressGaugeProps) {
  const percentage = Math.min(Math.max(Math.round((value / max) * 100), 0), 100);

  if (variant === "circular") {
    const sizeMap = {
      sm: { diameter: 72, strokeWidth: 6, textSize: "text-xs font-bold" },
      md: { diameter: 104, strokeWidth: 8, textSize: "text-base font-bold" },
      lg: { diameter: 140, strokeWidth: 10, textSize: "text-2xl font-extrabold" },
      xl: { diameter: 180, strokeWidth: 14, textSize: "text-3xl font-extrabold" },
    };

    const { diameter, strokeWidth, textSize } = sizeMap[size];
    const radius = (diameter - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className={cn("inline-flex flex-col items-center justify-center", className)}>
        <div className="relative inline-flex items-center justify-center" style={{ width: diameter, height: diameter }}>
          <svg width={diameter} height={diameter} className="rotate-[-90deg]">
            {/* Background track */}
            <circle
              cx={diameter / 2}
              cy={diameter / 2}
              r={radius}
              fill="transparent"
              stroke="#1F2937"
              strokeWidth={strokeWidth}
              className="opacity-70"
            />
            {/* Active yellow fill */}
            <circle
              cx={diameter / 2}
              cy={diameter / 2}
              r={radius}
              fill="transparent"
              stroke="#FFD200"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
              style={{
                filter: "drop-shadow(0 0 6px rgba(255, 210, 0, 0.4))",
              }}
            />
          </svg>
          {/* Central percentage / text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className={cn(textSize, "text-crisp tracking-tight font-display")}>
              {percentage}%
            </span>
            {subLabel && size !== "sm" && (
              <span className="text-[10px] text-muted-foreground uppercase font-medium tracking-wider">
                {subLabel}
              </span>
            )}
          </div>
        </div>

        {label && (
          <span className="mt-2 text-xs font-medium text-muted-foreground text-center">
            {label}
          </span>
        )}
      </div>
    );
  }

  // Linear Gauge
  const heightMap = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
    xl: "h-6",
  };

  return (
    <div className={cn("w-full space-y-2", className)}>
      {(label || showPercent || subLabel) && (
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {label && <span className="font-medium text-crisp/90">{label}</span>}
            {subLabel && <span className="text-muted-foreground text-[11px]">({subLabel})</span>}
          </div>
          <div className="flex items-center gap-1 font-semibold text-brand">
            {valuePrefix && <span>{valuePrefix}</span>}
            {showPercent ? <span>{percentage}%</span> : <span>{value.toLocaleString()}</span>}
            {valueSuffix && <span>{valueSuffix}</span>}
          </div>
        </div>
      )}

      {/* Progress Track */}
      <div className={cn("relative w-full overflow-hidden rounded-full bg-obsidian-700/80 border border-obsidian-border", heightMap[size])}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand via-[#FFE875] to-brand transition-all duration-700 ease-out relative"
          style={{
            width: `${percentage}%`,
            boxShadow: "0 0 14px rgba(255, 210, 0, 0.4)",
          }}
        >
          {/* Subtle animated highlight sheen */}
          <div className="absolute inset-0 bg-white/20 opacity-30 animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
