import { ProgressBar } from "../../../components/common/ProgressBar";

interface OverallProgressCardProps {
  percent: number;
}

export function OverallProgressCard({ percent }: OverallProgressCardProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-5 text-white shadow-sm shadow-brand-600/20">
      <p className="text-sm font-medium text-white/80">Overall Progress</p>
      <p className="font-display mt-1 text-4xl font-extrabold">{percent}%</p>
      <ProgressBar value={percent} tone="onBrand" className="mt-4" label="Overall progress" />
      <p className="mt-3 text-xs text-white/75">Keep going! You&rsquo;re doing great.</p>
    </div>
  );
}
