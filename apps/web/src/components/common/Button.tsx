import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "brand" | "accent" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<Variant, string> = {
  brand:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-600/20 focus-visible:outline-brand-500",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-sm shadow-accent-500/20 focus-visible:outline-accent-600",
  outline:
    "border border-ink-300 dark:border-night-border text-ink-900 dark:text-white hover:bg-ink-900/5 dark:hover:bg-white/5",
  ghost:
    "text-ink-700 dark:text-ink-300 hover:bg-ink-900/5 dark:hover:bg-white/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-3.5 py-1.5 rounded-lg gap-1.5",
  md: "text-sm px-5 py-2.5 rounded-xl gap-2",
  lg: "text-base px-7 py-3.5 rounded-xl gap-2.5",
};

export function Button({
  variant = "brand",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
}
