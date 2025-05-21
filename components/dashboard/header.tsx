"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

interface DashboardHeaderProps {
  toggleSidebar?: () => void;
}

export function DashboardHeader({ toggleSidebar }: DashboardHeaderProps = {}) {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState<string>("");
  const [pageTitle, setPageTitle] = useState<string>("Dashboard");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      // Use different time formats for mobile and desktop
      if (window.innerWidth < 768) {
        const timeString = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const dateString = now.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        });
        setCurrentTime(`${timeString} | ${dateString}`);
      } else {
        const timeString = now.toLocaleTimeString();
        const dateString = now.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        setCurrentTime(`${timeString} ${dateString}`);
      }
    };

    // Initial update
    updateCurrentTime();

    // Update time when window is resized
    window.addEventListener("resize", updateCurrentTime);

    // Update every second
    const interval = setInterval(updateCurrentTime, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateCurrentTime);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/dashboard") setPageTitle("Dashboard");
    else if (pathname === "/dashboard/history") setPageTitle("History");
    else if (pathname === "/dashboard/docs") setPageTitle("Questions - Docs");
    else if (pathname === "/dashboard/leads") setPageTitle("Leads");
    else if (pathname === "/dashboard/settings") setPageTitle("Settings");
  }, [pathname]);

  return (
    <header className="flex justify-between items-center px-3 md:px-6 py-3 md:py-4 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 sticky top-0 z-30">
      <div className="flex items-center">
        {toggleSidebar && (
          <button
            onClick={toggleSidebar}
            className="mr-3 md:hidden text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
        )}
        <h1 className="text-lg md:text-xl font-medium dark:text-white">
          {pageTitle}
        </h1>
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-xs md:text-base truncate">
        {currentTime}
      </div>
    </header>
  );
}
