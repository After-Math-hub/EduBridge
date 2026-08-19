import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

export function Card({ padded = true, className = "", children, ...rest }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-ink-900/5 bg-white shadow-sm shadow-ink-900/[0.03] dark:border-night-border dark:bg-night-800 ${
        padded ? "p-5" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
