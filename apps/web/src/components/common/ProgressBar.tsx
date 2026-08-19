interface ProgressBarProps {
  value: number;
  max?: number;
  tone?: "brand" | "accent" | "onBrand";
  className?: string;
  label?: string;
}

const toneTrack: Record<NonNullable<ProgressBarProps["tone"]>, string> = {
  brand: "bg-brand-100 dark:bg-night-700",
  accent: "bg-accent-100 dark:bg-night-700",
  onBrand: "bg-white/25",
};

const toneFill: Record<NonNullable<ProgressBarProps["tone"]>, string> = {
  brand: "bg-brand-600",
  accent: "bg-accent-500",
  onBrand: "bg-white",
};

export function ProgressBar({ value, max = 100, tone = "brand", className = "", label }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={className}>
      <div
        className={`h-2 w-full overflow-hidden rounded-full ${toneTrack[tone]}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-500 ${toneFill[tone]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
