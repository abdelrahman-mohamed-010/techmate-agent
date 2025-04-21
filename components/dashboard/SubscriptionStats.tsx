"use client";

import { Card } from "@/components/ui/card";
import { DonutChart } from "@/components/dashboard/donut-chart";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";

export function SubscriptionStats() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + 1);
      return newDate;
    });
  };

  const formattedMonth = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <Card className="p-6 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between mb-4">
        <MdChevronLeft
          className="h-7 w-7 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer dark:text-gray-200"
          onClick={handlePrevMonth}
        />
        <h4 className="font-medium dark:text-white">{formattedMonth}</h4>
        <MdChevronRight
          className="h-7 w-7 hover:bg-white dark:hover:bg-gray-700 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200"
          onClick={handleNextMonth}
        />
      </div>
      <DonutChart />
      <div className="mt-4 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: "rgba(64, 84, 178, 1)" }}
              className="w-3 h-3 rounded-full"
            ></div>
            <span className="dark:text-gray-200">Yearly Subscriptions</span>
          </div>
          <span className="dark:text-white">60%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: "rgba(117, 138, 239, 1)" }}
              className="w-3 h-3 rounded-full"
            ></div>
            <span className="dark:text-gray-200">Monthly Subscriptions</span>
          </div>
          <span className="dark:text-white">20%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: "rgba(165, 181, 255, 1)" }}
              className="w-3 h-3 rounded-full"
            ></div>
            <span className="dark:text-gray-200">Free Users</span>
          </div>
          <span className="dark:text-white">20%</span>
        </div>
      </div>
    </Card>
  );
}
