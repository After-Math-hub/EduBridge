import { Card } from "../../../components/common/Card";

interface MySubjectsCardProps {
  count: number;
}

export function MySubjectsCard({ count }: MySubjectsCardProps) {
  return (
    <Card>
      <p className="text-sm font-medium text-ink-500 dark:text-ink-300">My Subjects</p>
      <p className="font-display mt-1 text-4xl font-extrabold text-ink-900 dark:text-white">{count}</p>
      <p className="mt-3 text-xs text-ink-500 dark:text-ink-400">Active subjects enrolled</p>
    </Card>
  );
}
