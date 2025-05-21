import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart } from "@/components/dashboard/bar-chart";

export function EarningsCard() {
  return (
    <Card className="p-3 md:p-6 bg-white dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-4 gap-2 sm:gap-0">
        <div>
          <h3 className="text-base sm:text-lg font-medium dark:text-gray-200">
            Total Earnings
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white">
            $7860
          </p>
        </div>
        <div className="w-full sm:w-auto flex items-center gap-2">
          <Select defaultValue="2024">
            <SelectTrigger className="w-full sm:w-[120px] text-sm sm:text-base font-medium border-none shadow-none cursor-pointer dark:bg-gray-800 dark:text-white">
              <SelectValue placeholder="Year 2024" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-700">
              <SelectItem
                value="2024"
                className="cursor-pointer dark:text-white"
              >
                Year 2024
              </SelectItem>
              <SelectItem
                value="2023"
                className="cursor-pointer dark:text-white"
              >
                Year 2023
              </SelectItem>
              <SelectItem
                value="2022"
                className="cursor-pointer dark:text-white"
              >
                Year 2022
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2 md:gap-6 overflow-x-auto pb-2">
        <div className="flex-1 min-w-[280px] sm:min-w-[300px]">
          <BarChart />
        </div>
      </div>
    </Card>
  );
}
