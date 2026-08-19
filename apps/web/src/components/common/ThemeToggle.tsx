import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../theme/ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to night mode"}
      aria-pressed={isDark}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 text-ink-700 transition-colors hover:bg-ink-900/5 dark:border-white/10 dark:text-ink-300 dark:hover:bg-white/10 ${className}`}
    >
      {isDark ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
