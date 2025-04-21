"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function DashboardHeader() {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState<string>("");
  const [pageTitle, setPageTitle] = useState<string>("Dashboard");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const dateString = now.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      setCurrentTime(`${timeString} ${dateString}`);
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (pathname === "/dashboard") setPageTitle("Dashboard");
    else if (pathname === "/dashboard/history") setPageTitle("History");
    else if (pathname === "/dashboard/docs") setPageTitle("Questions - Docs");
    else if (pathname === "/dashboard/leads") setPageTitle("Leads");
    else if (pathname === "/dashboard/settings") setPageTitle("Settings");
  }, [pathname]);

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <h1 className="text-xl font-medium dark:text-white">{pageTitle}</h1>
      <div className="text-gray-600 dark:text-gray-400">{currentTime}</div>
    </header>
  );
}
