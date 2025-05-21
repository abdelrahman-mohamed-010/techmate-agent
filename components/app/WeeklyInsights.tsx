import { ThumbsDown, ThumbsUp, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function WeeklyInsights() {
  return (
    <div className="w-full mx-auto p-3 md:p-4 lg:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="mb-4 md:mb-6">
        <h1 className="text-base md:text-lg lg:text-xl font-medium text-gray-900 dark:text-white">
          Hi! It&apos;s Monday, don&apos;t forget to see your weekly insights!
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
          — Based on conversions, these suggestions are provided
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {[1, 2, 3].map((item) => (
          <InsightCard key={item} />
        ))}
      </div>
    </div>
  );
}

function InsightCard() {
  return (
    <Card className="p-3 md:p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-2 md:gap-3">
        <div className="rounded-full bg-gray-50 dark:bg-gray-700 p-1.5 md:p-2">
          <Lightbulb className="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-300" />
        </div>
        <div>
          <h3 className="font-medium text-sm md:text-base text-gray-900 dark:text-white">
            Don&apos;t forget to post!
          </h3>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5 md:mt-1">
            You have posted 2/5 posts for this week.
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-4 md:mt-6 gap-1 md:gap-2">
        <button
          className="p-1 md:p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Thumbs up"
        >
          <ThumbsUp className="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-300" />
        </button>
        <button
          className="p-1 md:p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Thumbs down"
        >
          <ThumbsDown className="h-4 w-4 md:h-5 md:w-5 text-gray-400 dark:text-gray-300" />
        </button>
      </div>
    </Card>
  );
}
