import { Card } from "@/components/ui/card";
import { UsersTable } from "@/components/dashboard/users-table";
import { StatCardsHolder } from "../../components/dashboard/stat-cards-holder";
import { EarningsCard } from "../../components/dashboard/EarningsCard";
import { SubscriptionStats } from "../../components/dashboard/SubscriptionStats";

export default function DashboardPage() {
  return (
    <>
      <h2 className="text-base sm:text-lg md:text-xl mb-3 md:mb-4 dark:text-white font-medium">
        Hi Admin! Welcome to your Dashboard
      </h2>

      {/* Use order classes to reorder content on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-2 sm:gap-3 md:gap-4 mb-4">
        <div className="space-y-2 sm:space-y-3 md:space-y-4 order-2 lg:order-1">
          <StatCardsHolder />
          <EarningsCard />
        </div>
        <div className="order-1 lg:order-2 mb-2 sm:mb-3 lg:mb-0">
          <SubscriptionStats />
        </div>
      </div>

      <Card className="overflow-hidden gap-0 px-2 md:px-4 bg-white dark:bg-gray-800">
        <div className="px-2 py-2 sm:py-3">
          <h3 className="text-sm md:text-lg font-medium text-gray-700 dark:text-gray-200">
            Users Details
          </h3>
        </div>
        <UsersTable />
      </Card>
    </>
  );
}
