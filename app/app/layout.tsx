"use client";

import { Sidebar } from "@/components/app/Sidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[rgba(249,250,252,1)] dark:bg-gray-900 relative">
      {/* Sidebar */}
      <div
        className={`md:relative fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden absolute top-3 right-3 z-50 p-1 rounded-full hover:bg-gray-200"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        <Sidebar />
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 relative">
        {/* Mobile menu button - moved into the content area */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-white text-gray-700 shadow-sm"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        {/* Mobile sidebar backdrop */}
        {isSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}{" "}
        {/* Content */}
        <div className="pt-14 md:pt-0 h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
}
