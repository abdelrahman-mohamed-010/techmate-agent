import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-gray-600 dark:text-gray-300 text-base">
            {title}
          </h3>
          <p className="text-2xl font-bold dark:text-white">{value}</p>
        </div>
      </div>
    </Card>
  );
}
