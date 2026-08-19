import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
  userName?: string;
}

export function DashboardLayout({ children, userName = "Thabo Nkosi" }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#fafafc] dark:bg-night-950">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar userName={userName} />
        <main className="flex-1 overflow-y-auto px-6 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
