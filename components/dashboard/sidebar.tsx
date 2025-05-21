"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Eye,
  History,
  HelpCircle,
  BarChart2,
  Settings,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  closeMobile?: () => void;
}

export function DashboardSidebar({ closeMobile }: DashboardSidebarProps = {}) {
  const pathname = usePathname();

  return (
    <div className="w-full md:w-[204px] h-full border-r border-gray-200 dark:border-gray-700 flex flex-col dark:bg-gray-900 overflow-y-auto bg-white">
      <div className="p-3 md:p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-10">
        <div className="flex items-center gap-2">
          <Eye className="text-primary" size={24} />
          <span className="font-medium text-base md:text-lg dark:text-white">
            Magnate
          </span>
        </div>
        {closeMobile && (
          <button
            onClick={closeMobile}
            className="md:hidden text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 p-1.5 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <div className="flex flex-col flex-1 py-3 md:py-4 gap-2 md:gap-3 px-2">
        <Link href="/dashboard" className="mx-2" onClick={closeMobile}>
          <Button
            variant={pathname === "/dashboard" ? "default" : "ghost"}
            className={
              "w-full justify-start py-2 text-sm md:text-base " +
              (pathname === "/dashboard"
                ? "bg-tertiary text-white hover:bg-tertiary/90"
                : "text-gray-700 dark:text-gray-300")
            }
          >
            <BarChart2 className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>

        <Link href="/dashboard/history" className="mx-2" onClick={closeMobile}>
          <Button
            variant={pathname === "/dashboard/history" ? "default" : "ghost"}
            className={
              "w-full justify-start py-2 text-sm md:text-base " +
              (pathname === "/dashboard/history"
                ? "bg-tertiary text-white hover:bg-tertiary/90"
                : "text-gray-700 dark:text-gray-300")
            }
          >
            <History className="mr-2 h-4 w-4" />
            History
          </Button>
        </Link>

        <Link href="/dashboard/docs" className="mx-2" onClick={closeMobile}>
          <Button
            variant={pathname === "/dashboard/docs" ? "default" : "ghost"}
            className={
              "w-full justify-start py-2 text-sm md:text-base " +
              (pathname === "/dashboard/docs"
                ? "bg-tertiary text-white hover:bg-tertiary/90"
                : "text-gray-700 dark:text-gray-300")
            }
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Questions - Docs
          </Button>
        </Link>

        <Link href="/dashboard/leads" className="mx-2" onClick={closeMobile}>
          <Button
            variant={pathname === "/dashboard/leads" ? "default" : "ghost"}
            className={
              "w-full justify-start py-2 text-sm md:text-base " +
              (pathname === "/dashboard/leads"
                ? "bg-tertiary text-white hover:bg-tertiary/90"
                : "text-gray-700 dark:text-gray-300")
            }
          >
            <Users className="mr-2 h-4 w-4" />
            Leads
          </Button>
        </Link>
      </div>

      <div className="mt-auto p-3 md:p-4">
        <Link
          href="/dashboard/settings"
          className="block mx-2"
          onClick={closeMobile}
        >
          <Button
            variant={pathname === "/dashboard/settings" ? "default" : "ghost"}
            className={
              "w-full justify-start py-2 text-sm md:text-base " +
              (pathname === "/dashboard/settings"
                ? "bg-tertiary text-white hover:bg-tertiary/90"
                : "text-gray-700 dark:text-gray-300")
            }
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700 my-3"></div>
        <div className="flex items-center mt-2 px-3">
          <div className="flex flex-col">
            <span className="text-sm font-medium dark:text-white">
              Jaffer Ali
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Free Trial
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
