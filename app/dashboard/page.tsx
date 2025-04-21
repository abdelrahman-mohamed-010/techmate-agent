import { Card } from "@/components/ui/card";
import { UsersTable } from "@/components/dashboard/users-table";
import { StatCardsHolder } from "../../components/dashboard/stat-cards-holder";
import { EarningsCard } from "../../components/dashboard/EarningsCard";
import { SubscriptionStats } from "../../components/dashboard/SubscriptionStats";

export default function DashboardPage() {
  return (
    <>
      <h2 className="text-xl mb-6 dark:text-white">
        Hi Admin! Welcome to your Dashboard
      </h2>
      <div className="grid grid-cols-[5fr_2fr] gap-6 mb-6">
        <div className="space-y-6">
          <StatCardsHolder />
          <EarningsCard />
        </div>
        <SubscriptionStats />
      </div>
      <Card className="overflow-hidden gap-0 px-4 bg-white dark:bg-gray-800">
        <div className="px-3">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Users Details
          </h3>
        </div>
        <UsersTable />
      </Card>
    </>
  );
}
