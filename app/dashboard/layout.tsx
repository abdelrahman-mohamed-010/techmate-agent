"use client";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white dark:bg-gray-900">
      {/* Mobile sidebar - shown when toggled */}
      <div
        className={`md:hidden fixed inset-0 z-50 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
        <div className="absolute inset-y-0 left-0 w-[80%] max-w-[280px] z-10">
          <DashboardSidebar closeMobile={() => setIsSidebarOpen(false)} />
        </div>
      </div>

      {/* Desktop sidebar - always visible on md+ screens */}
      <div className="hidden md:block">
        <DashboardSidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-auto dark:bg-gray-900">
        <DashboardHeader
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <div className="p-3 md:p-6 flex-1 overflow-auto bg-gray-50 dark:bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
}
