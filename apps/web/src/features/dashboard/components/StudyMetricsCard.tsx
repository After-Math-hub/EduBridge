import { Card } from "../../../components/common/Card";

export function StudyMetricsCard() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = [40, 50, 60, 70, 65, 80, 75];
  const maxData = Math.max(...data);

  return (
    <Card padded={false}>
      <div className="border-b border-ink-900/5 px-5 py-4 dark:border-white/10">
        <p className="font-display text-lg font-semibold text-ink-900 dark:text-white">Study Time</p>
        <p className="mt-1 text-sm font-bold text-ink-900 dark:text-white">2h 15m</p>
        <p className="text-xs text-ink-500 dark:text-ink-400">Total study time</p>
      </div>
      
      <div className="px-5 py-6">
        <div className="flex items-end justify-between gap-1" style={{ height: "120px" }}>
          {data.map((value, idx) => (
            <div
              key={idx}
              className="flex w-full flex-col items-center gap-2"
            >
              <div className="w-full rounded-t-md bg-brand-600 transition-all hover:bg-brand-700 dark:bg-brand-500" 
                style={{ height: `${(value / maxData) * 100}px` }} 
              />
              <p className="text-xs font-medium text-ink-600 dark:text-ink-400">{days[idx]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-ink-900/5 px-5 py-4 dark:border-white/10">
        <button className="w-full rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 dark:hover:bg-brand-500">
          Chat with EduBridge AI
        </button>
      </div>
    </Card>
  );
}
