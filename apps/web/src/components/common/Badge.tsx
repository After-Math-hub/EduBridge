import type { ReactNode } from "react";

type Tone = "brand" | "accent" | "amber" | "neutral";

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const toneClasses: Record<Tone, string> = {
  brand: "bg-brand-100 text-brand-700 dark:bg-night-700 dark:text-brand-200",
  accent: "bg-accent-100 text-accent-700 dark:bg-night-700 dark:text-accent-300",
  amber: "bg-amber-glow/15 text-amber-700 dark:text-amber-glow",
  neutral: "bg-ink-900/5 text-ink-700 dark:bg-white/10 dark:text-ink-300",
};

export function Badge({ children, tone = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
