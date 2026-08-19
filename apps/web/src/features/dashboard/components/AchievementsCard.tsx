import { Card } from "../../../components/common/Card";

interface AchievementsCardProps {
  badges: number;
}

export function AchievementsCard({ badges }: AchievementsCardProps) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-500 dark:text-ink-300">Achievements</p>
      <p className="font-display mt-1 text-4xl font-extrabold text-ink-900 dark:text-white">{badges}</p>
      <p className="mt-3 text-xs text-ink-500 dark:text-ink-400">Badges earned so far</p>
    </Card>
  );
}
