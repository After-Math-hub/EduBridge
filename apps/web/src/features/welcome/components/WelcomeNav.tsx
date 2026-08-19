import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BridgeLogo } from "../../../components/common/BridgeLogo";
import { ThemeToggle } from "../../../components/common/ThemeToggle";
import { Button } from "../../../components/common/Button";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "For Learners", href: "#learners" },
  { label: "For Teachers", href: "#teachers" },
  { label: "For Parents", href: "#parents" },
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];

export function WelcomeNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-700 bg-brand-600 backdrop-blur dark:border-white/10 dark:bg-night-900/80">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <BridgeLogo />

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white dark:text-ink-400 dark:hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 dark:text-ink-300">
              Log in
            </Button>
            <Button size="sm" className="bg-white text-brand-600 hover:bg-white/90">Get Started</Button>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-700 dark:text-ink-300 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/20 py-4 dark:border-white/10 lg:hidden">
            <nav className="flex flex-col gap-4">
              {LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white dark:text-ink-400 dark:hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
