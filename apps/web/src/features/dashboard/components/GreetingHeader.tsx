import { CalendarClock } from "lucide-react";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

interface GreetingHeaderProps {
  firstName: string;
  term: string;
}

export function GreetingHeader({ firstName, term }: GreetingHeaderProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
          {getGreeting()}, {firstName}! 👋
        </h1>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
          Let&rsquo;s continue your learning journey.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-ink-900/10 bg-white px-4 py-2.5 dark:border-night-border dark:bg-night-800">
        <CalendarClock size={16} className="text-brand-600 dark:text-brand-300" />
        <div className="leading-tight">
          <p className="text-[11px] text-ink-500 dark:text-ink-300">Current Term</p>
          <p className="text-sm font-semibold text-ink-900 dark:text-white">{term}</p>
        </div>
      </div>
    </div>
  );
}
