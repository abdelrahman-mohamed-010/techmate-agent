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
    <Card className="p-3 md:p-6 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <MdChevronLeft
          className="h-6 w-6 md:h-7 md:w-7 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer dark:text-gray-200 rounded-full"
          onClick={handlePrevMonth}
        />
        <h4 className="font-medium dark:text-white text-sm md:text-base">
          {formattedMonth}
        </h4>
        <MdChevronRight
          className="h-6 w-6 md:h-7 md:w-7 hover:bg-white dark:hover:bg-gray-700 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 dark:text-gray-200 rounded-full"
          onClick={handleNextMonth}
        />
      </div>
      <div className="flex justify-center my-2 md:my-4">
        <div className="w-full max-w-[200px] sm:max-w-[250px]">
          <DonutChart />
        </div>
      </div>
      <div className="mt-3 md:mt-4 space-y-2 md:space-y-3 lg:space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: "rgba(64, 84, 178, 1)" }}
              className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
            ></div>
            <span className="dark:text-gray-200 text-xs sm:text-sm md:text-base truncate pr-1">
              Yearly Subscriptions
            </span>
          </div>
          <span className="dark:text-white text-xs sm:text-sm md:text-base font-medium">
            60%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: "rgba(117, 138, 239, 1)" }}
              className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
            ></div>
            <span className="dark:text-gray-200 text-xs sm:text-sm md:text-base truncate pr-1">
              Monthly Subscriptions
            </span>
          </div>
          <span className="dark:text-white text-xs sm:text-sm md:text-base font-medium">
            20%
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: "rgba(165, 181, 255, 1)" }}
              className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full"
            ></div>
            <span className="dark:text-gray-200 text-xs sm:text-sm md:text-base truncate pr-1">
              Free Users
            </span>
          </div>
          <span className="dark:text-white text-xs sm:text-sm md:text-base font-medium">
            20%
          </span>
        </div>
      </div>
    </Card>
  );
}
