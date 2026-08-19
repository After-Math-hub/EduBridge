import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { GreetingHeader } from "./components/GreetingHeader";
import { OverallProgressCard } from "./components/OverallProgressCard";
import { MySubjectsCard } from "./components/MySubjectsCard";
import { AchievementsCard } from "./components/AchievementsCard";
import { ContinueLearningList } from "./components/ContinueLearningList";
import { UpcomingList } from "./components/UpcomingList";
import { QuickActionsSection } from "./components/QuickActionsSection";
import { StudyMetricsCard } from "./components/StudyMetricsCard";

export function DashboardPage() {
  return (
    <DashboardLayout userName="Thabo Nkosi">
      <GreetingHeader firstName="Thabo" term="Term 2, 2026" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <OverallProgressCard percent={72} />
        <MySubjectsCard count={8} />
        <AchievementsCard badges={12} />
        <div className="rounded-2xl bg-accent-50 p-5 dark:bg-night-700">
          <p className="text-sm font-medium text-ink-500 dark:text-ink-300">Study Streak</p>
          <p className="font-display mt-1 text-4xl font-extrabold text-ink-900 dark:text-white">14</p>
          <p className="mt-3 text-xs text-ink-500 dark:text-ink-400">Days in a row 🔥</p>
        </div>
      </div>

      <QuickActionsSection />

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <ContinueLearningList />
          <UpcomingList />
        </div>
        <StudyMetricsCard />
      </div>
    </DashboardLayout>
  );
}
