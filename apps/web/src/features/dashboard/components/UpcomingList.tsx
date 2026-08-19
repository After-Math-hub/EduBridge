import { Card } from "../../../components/common/Card";
import { Calendar, Clock, AlertCircle } from "lucide-react";

const EVENTS = [
  { date: "Mar 15, 2025", time: "2:00 PM", title: "Math Test: Chapter 3-5", icon: AlertCircle, color: "bg-accent-100 text-accent-600 dark:bg-night-700 dark:text-accent-300" },
  { date: "Mar 18, 2025", time: "10:00 AM", title: "Physics Assignment Due", icon: Calendar, color: "bg-brand-100 text-brand-600 dark:bg-night-700 dark:text-brand-300" },
  { date: "Mar 22, 2025", time: "3:30 PM", title: "History Group Project", icon: Clock, color: "bg-purple-100 text-purple-600 dark:bg-night-700 dark:text-purple-300" },
];

export function UpcomingList() {
  return (
    <Card padded={false}>
      <div className="border-b border-ink-900/5 px-5 py-4 dark:border-white/10">
        <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
          Upcoming Events
        </h2>
      </div>
      <div className="divide-y divide-ink-900/5 dark:divide-white/10">
        {EVENTS.map(({ date, time, title, icon: Icon, color }, idx) => (
          <div key={idx} className="flex gap-3 px-5 py-4 hover:bg-ink-50 dark:hover:bg-night-700/50">
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${color}`}>
              <Icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-ink-900 dark:text-white">{title}</p>
              <p className="text-xs text-ink-500 dark:text-ink-400">{date} • {time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
