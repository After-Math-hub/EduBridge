import { BookOpen, BarChart3, BookMarked, Brain, Bot } from "lucide-react";
import { Card } from "../../../components/common/Card";

const ACTIONS = [
  { icon: BookOpen, label: "Take Quiz", color: "bg-brand-100 text-brand-600 dark:bg-night-700 dark:text-brand-300" },
  { icon: BarChart3, label: "Flashcards", color: "bg-accent-100 text-accent-600 dark:bg-night-700 dark:text-accent-300" },
  { icon: BookMarked, label: "Notes", color: "bg-amber-100 text-amber-600 dark:bg-night-700 dark:text-amber-300" },
  { icon: Brain, label: "Mind Map", color: "bg-purple-100 text-purple-600 dark:bg-night-700 dark:text-purple-300" },
  { icon: Bot, label: "AI Tutor", color: "bg-cyan-100 text-cyan-600 dark:bg-night-700 dark:text-cyan-300" },
];

export function QuickActionsSection() {
  return (
    <div className="mt-6">
      <h2 className="mb-3 font-display text-lg font-semibold text-ink-900 dark:text-white">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {ACTIONS.map(({ icon: Icon, label, color }) => (
          <Card key={label} className="flex cursor-pointer flex-col items-center justify-center py-6 text-center transition-transform hover:scale-105">
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
              <Icon size={24} />
            </div>
            <p className="mt-2 text-xs font-medium text-ink-700 dark:text-ink-300">{label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
