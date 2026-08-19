import { WelcomeNav } from "./components/WelcomeNav";
import { HeroSection } from "./components/HeroSection";
import { StatsStrip } from "./components/StatsStrip";

export function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#fafafc] dark:bg-night-950">
      <WelcomeNav />
      <HeroSection />
      <StatsStrip />
    </div>
  );
}
