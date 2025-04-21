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
    <Card className="p-6 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-medium dark:text-gray-200">
            Total Earnings
          </h3>
          <p className="text-3xl font-bold dark:text-white">$7860</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="2024">
            <SelectTrigger className="w-[120px] font-medium border-none shadow-none cursor-pointer dark:bg-gray-800 dark:text-white">
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
      <div className="flex gap-6">
        <div className="flex-1">
          <BarChart />
        </div>
      </div>
    </Card>
  );
}
