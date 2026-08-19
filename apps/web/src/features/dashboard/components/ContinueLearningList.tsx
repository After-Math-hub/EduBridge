import { Card } from "../../../components/common/Card";
import { ProgressBar } from "../../../components/common/ProgressBar";
import { BookOpen, Zap, Award } from "lucide-react";

const ITEMS = [
  { icon: BookOpen, subject: "Mathematics", lesson: "Calculus Chapter 3", progress: 65, status: "In Progress" },
  { icon: Zap, subject: "Physics", lesson: "Quantum Mechanics Basics", progress: 42, status: "In Progress" },
  { icon: Award, subject: "History", lesson: "Medieval Europe", progress: 88, status: "Almost done" },
];

export function ContinueLearningList() {
  return (
    <Card padded={false}>
      <div className="border-b border-ink-900/5 px-5 py-4 dark:border-white/10">
        <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
          Continue Learning
        </h2>
      </div>
      <div className="divide-y divide-ink-900/5 dark:divide-white/10">
        {ITEMS.map(({ icon: Icon, subject, lesson, progress, status }, idx) => (
          <div key={idx} className="flex gap-4 px-5 py-4 hover:bg-ink-50 dark:hover:bg-night-700/50">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600 dark:bg-night-700 dark:text-brand-300">
              <Icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-ink-900 dark:text-white">{subject}</p>
              <p className="text-xs text-ink-500 dark:text-ink-400">{lesson}</p>
              <ProgressBar value={progress} className="mt-2" />
              <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{progress}% complete • {status}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
