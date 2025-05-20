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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[204px] border-r  border-gray-200 dark:border-gray-700 flex flex-col dark:bg-gray-900">
      <div className="p-4 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
        <Eye className="text-primary" size={28} />
        <span className="font-medium text-lg dark:text-white">Magnate</span>
      </div>

      <div className="flex flex-col flex-1 py-4 gap-3">
        <Link href="/dashboard" className="mx-4">
          <Button
            variant={pathname === "/dashboard" ? "default" : "ghost"}
            className={
              "w-full justify-start " +
              (pathname === "/dashboard"
                ? "bg-tertiary text-white hover:bg-tertiary/90"
                : "text-gray-700 dark:text-gray-300")
            }
          >
            <BarChart2 className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>

        <Link href="/dashboard/history" className="mx-4">
          <Button
            variant={pathname === "/dashboard/history" ? "default" : "ghost"}
            className={
              "w-full justify-start " +
              (pathname === "/dashboard/history"
                ? "bg-tertiary text-white hover:bg-tertiary/90"
                : "text-gray-700 dark:text-gray-300")
            }
          >
            <History className="mr-2 h-4 w-4" />
            History
          </Button>
        </Link>

        <Link href="/dashboard/docs" className="mx-4">
          <Button
            variant={pathname === "/dashboard/docs" ? "default" : "ghost"}
            className={
              "w-full justify-start " +
              (pathname === "/dashboard/docs"
                ? "bg-tertiary text-white hover:bg-tertiary/90"
                : "text-gray-700 dark:text-gray-300")
            }
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Questions - Docs
          </Button>
        </Link>

        <Link href="/dashboard/leads" className="mx-4">
          <Button
            variant={pathname === "/dashboard/leads" ? "default" : "ghost"}
            className={
              "w-full justify-start " +
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

      <div className="mt-auto p-4">
        <Link href="/dashboard/settings" className="block">
          <Button
            variant={pathname === "/dashboard/settings" ? "default" : "ghost"}
            className={
              "w-full justify-start " +
              (pathname === "/dashboard/settings"
                ? "bg-tertiary text-white hover:bg-tertiary/90"
                : "text-gray-700 dark:text-gray-300")
            }
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700 my-1"></div>
        <div className="flex items-center mt-4 px-2">
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
