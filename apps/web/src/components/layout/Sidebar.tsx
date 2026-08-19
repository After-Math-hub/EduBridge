import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  BarChart3,
  CalendarDays,
  MessageSquare,
  Users,
  Library,
  Settings,
} from "lucide-react";
import { BridgeLogo } from "../common/BridgeLogo";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/my-learning", label: "My Learning", icon: BookOpen },
  { to: "/assessments", label: "Assessments", icon: ClipboardList },
  { to: "/reports", label: "Reports", icon: BarChart3 },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/messages", label: "Messages", icon: MessageSquare, badge: 3 },
  { to: "/community", label: "Community", icon: Users },
  { to: "/resources", label: "Resources", icon: Library },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-ink-900/5 bg-white px-4 py-6 dark:border-night-border dark:bg-night-800 lg:flex">
      <div className="px-2 pb-8">
        <BridgeLogo />
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map(({ to, label, icon: Icon, badge }) => (
          <Link
            key={to}
            to={to}
            className="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-600 transition-all hover:bg-ink-900/5 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Icon size={20} className="flex-shrink-0" />
            <span className="flex-1">{label}</span>
            {badge && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
                {badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
