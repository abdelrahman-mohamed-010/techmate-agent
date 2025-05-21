import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card className="p-3 md:p-6 bg-white dark:bg-gray-800">
      <div className="flex items-center gap-2 md:gap-4">
        <div className="min-w-[2.5rem] w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base truncate">
            {title}
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl font-bold dark:text-white">
            {value}
          </p>
        </div>
      </div>
    </Card>
  );
}
