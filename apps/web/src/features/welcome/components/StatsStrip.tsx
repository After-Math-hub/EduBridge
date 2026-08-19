import { Users, School, Gauge, Headphones } from "lucide-react";

const STATS = [
  { icon: Users, value: "50K+", label: "Active Learners" },
  { icon: School, value: "2K+", label: "Schools" },
  { icon: Gauge, value: "98%", label: "Satisfaction" },
  { icon: Headphones, value: "24/7", label: "AI Support" },
];

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid grid-cols-2 gap-4 rounded-2xl border border-ink-900/5 bg-white p-6 shadow-sm shadow-ink-900/[0.03] dark:border-night-border dark:bg-night-800 sm:grid-cols-4">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-night-700 dark:text-brand-300">
              <Icon size={18} />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-ink-900 dark:text-white">{value}</p>
              <p className="text-xs text-ink-500 dark:text-ink-300">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
