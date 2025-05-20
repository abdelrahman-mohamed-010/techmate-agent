import { Sidebar } from "@/components/app/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[rgba(249,250,252,1)] dark:bg-gray-900">
      <Sidebar />
      {children}
    </div>
  );
}
