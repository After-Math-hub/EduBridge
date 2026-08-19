import { Search } from "lucide-react";
import { ThemeToggle } from "../common/ThemeToggle";
import { Avatar } from "../common/Avatar";

interface TopbarProps {
  userName: string;
}

export function Topbar({ userName }: TopbarProps) {
  return (
    <header className="flex items-center gap-4 border-b border-ink-900/5 bg-white/80 px-6 py-4 backdrop-blur dark:border-night-border dark:bg-night-900/80">
      <div className="relative flex-1 max-w-md">
        <Search
          size={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500"
        />
        <input
          type="search"
          placeholder="Search anything..."
          className="w-full rounded-xl border border-ink-900/10 bg-ink-900/[0.02] py-2.5 pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-500 focus:border-brand-400 focus:bg-white focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-night-800"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        <ThemeToggle />
        <Avatar name={userName} />
      </div>
    </header>
  );
}
