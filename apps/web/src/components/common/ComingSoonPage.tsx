import { DashboardLayout } from "../layout/DashboardLayout";
import { Card } from "./Card";

interface ComingSoonPageProps {
  title: string;
  description: string;
}

export function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  return (
    <DashboardLayout>
      <h1 className="font-display text-2xl font-bold text-ink-900 dark:text-white">{title}</h1>
      <Card className="mt-6 flex flex-col items-center justify-center py-16 text-center">
        <p className="font-display text-lg font-semibold text-ink-900 dark:text-white">
          {title} is on the way
        </p>
        <p className="mt-2 max-w-sm text-sm text-ink-500 dark:text-ink-300">{description}</p>
      </Card>
    </DashboardLayout>
  );
}
