"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "@/public/images/logoSidebar.png";
import plusIcon from "@/public/images/plusIcon.svg";
import magnateIcon from "@/public/images/magnateIcon.svg";
import filesIcon from "@/public/images/filesIcon.svg";
import historyIcon from "@/public/images/historyIcon.svg";
import settingsIcon from "@/public/images/settingsIcon.svg";
import helpIcon from "@/public/images/helpIcon.svg";
import { Search, Moon, Sun } from "lucide-react";

export function Sidebar() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-[240px] h-full border-r border-gray-200 flex flex-col bg-white dark:bg-gray-900 overflow-y-auto">
      <div className="pt-3">
        <div className="relative w-56 h-14 -translate-x-9">
          <Image
            src={logo}
            alt="TechMate Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="p-4 ">
        <div className="relative flex items-center h-9">
          <Search className="absolute left-2 text-gray-400 w-5" />
          <Input
            placeholder="Search"
            className="pl-8 border-gray-300 border-2 focus:border-accent focus:outline-none focus:ring-transparent rounded-xl h-full text-sm"
          />
        </div>
      </div>

      <div className="p-4">
        <Button
          variant="outline"
          className="w-full justify-start gap-2 bg-white border-gray-300 rounded-xl"
        >
          <Image src={plusIcon} alt="New chat" width={20} height={20} />
          <span>New AI Chat</span>
        </Button>
      </div>

      <div className="ml-2">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Image src={magnateIcon} alt="Magnate" width={20} height={20} />
            <span>Magnate</span>
          </div>
          <Badge
            variant="outline"
            className="bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5 h-5"
          >
            New
          </Badge>
        </div>
        <div className="px-4 py-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Image src={filesIcon} alt="Files" width={24} height={24} />
          <span>Files</span>
        </div>
        <div className="px-4 py-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Image src={historyIcon} alt="History" width={24} height={24} />
          <span>All History</span>
        </div>
        <div className="px-4 py-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Image src={settingsIcon} alt="Settings" width={24} height={24} />
          <span>Settings</span>
        </div>
        <div className="px-4 py-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Image src={helpIcon} alt="Help" width={24} height={24} />
          <span>Help</span>
        </div>
      </div>

      <div className="mt-auto">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between p-2 rounded-full">
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-full">
              <button
                onClick={() => setTheme("light")}
                className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                  theme === "light" ? "bg-white shadow-sm" : ""
                }`}
              >
                <Sun className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">Light</span>
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                  theme === "dark" ? "bg-white shadow-sm" : ""
                }`}
              >
                <Moon className="h-4 w-4" />
                <span className="text-sm text-muted-foreground">Dark</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-600">
            DA
          </div>
          <div className="text-sm">
            <div className="font-medium">Dariyah Abbas</div>
            <div className="text-xs text-muted-foreground">
              dariyah@email.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
