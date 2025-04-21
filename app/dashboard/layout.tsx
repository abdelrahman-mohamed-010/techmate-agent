import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-auto dark:bg-gray-900">
        <DashboardHeader />
        <div className="p-6 flex-1 overflow-auto bg-gray-50 dark:bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
}
