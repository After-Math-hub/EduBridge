import { ArrowRight, BookOpen, BarChart3, Users, Shield, Zap } from "lucide-react";
import { Button } from "../../../components/common/Button";

const FEATURE_CARDS = [
  { icon: BookOpen, title: "Personalized Learning", desc: "AI adapts to your needs and learning style." },
  { icon: BarChart3, title: "Track Progress", desc: "Real-time insights for learners, teachers & parents." },
  { icon: Users, title: "Connected Community", desc: "Learn, share and grow together, safely." },
  { icon: Shield, title: "Safe & Secure", desc: "Enterprise-grade security to protect every learner." },
  { icon: Zap, title: "Future Ready", desc: "From school to career, we bridge the gap." },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 dark:bg-night-700">
              <div className="h-2 w-2 rounded-full bg-brand-600"></div>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">AI-POWERED LEARNING ECOSYSTEM</span>
            </div>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-ink-900 dark:text-white sm:text-6xl">
              Education<br />
              <span className="text-brand-600 dark:text-brand-300">Without Limits</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-600 dark:text-ink-300">
              EduBridge connects learners, teachers and parents in one intelligent platform. Learn smarter. Track progress. Achieve more. Shape your future.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" icon={<ArrowRight size={18} />}>
                Get Started Free
              </Button>
              <Button variant="outline" size="lg">
                Explore Features
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-600 ring-2 ring-white dark:bg-night-700 dark:text-brand-300 dark:ring-night-800"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-ink-900 dark:text-white">50K+ learners already growing with EduBridge</p>
                <p className="flex items-center gap-1 text-xs text-accent-600">
                  <span>★★★★★</span> 4.8/5
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bridge-cables absolute -inset-6 rounded-[2rem] opacity-40" aria-hidden="true" />
            <div className="relative rounded-2xl bg-gradient-to-br from-brand-100 to-accent-100 p-8 dark:from-night-700 dark:to-night-600">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-brand-600 to-accent-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {FEATURE_CARDS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-start gap-3 rounded-xl border border-ink-900/10 bg-white p-5 dark:border-night-border dark:bg-night-800"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-600 dark:bg-night-700 dark:text-brand-300">
                <Icon size={20} />
              </div>
              <div>
                <p className="font-semibold text-ink-900 dark:text-white">{title}</p>
                <p className="mt-1 text-xs text-ink-600 dark:text-ink-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
