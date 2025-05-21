import {
  Upload,
  Plus,
  Eye,
  ImageIcon,
  Users,
  Paperclip,
  Mic,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WeeklyInsights from "@/components/app/WeeklyInsights";

export default function TechMatePanel() {
  return (
    <div className="flex h-full overflow-auto flex-col md:flex-row">
      {/* Main Content */}
      <div className="flex-1 flex flex-col mt-8 md:mt-0">
        <div className="p-4 md:p-6 pb-0 flex-none">
          <div className="w-full md:w-[90%] mx-auto mb-6 md:mb-8">
            <WeeklyInsights />
          </div>
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
              Agent Name
            </h1>
            <p className="text-sm md:text-base text-muted-foreground dark:text-gray-400">
              Manage, create, and engage across platforms with ease
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto mb-6 md:mb-8 px-2 sm:px-0">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 md:p-4 flex items-center gap-2 md:gap-3 dark:bg-gray-800">
              <div className="bg-purple-100 dark:bg-purple-900/50 rounded-full p-2">
                <Upload className="h-4 w-4 md:h-5 md:w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="font-medium dark:text-white text-sm md:text-base">
                Upload Document
              </span>
              <Plus className="ml-auto h-4 w-4 md:h-5 md:w-5 text-muted-foreground dark:text-gray-400" />
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 md:p-4 flex items-center gap-2 md:gap-3 dark:bg-gray-800">
              <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-2">
                <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium dark:text-white text-sm md:text-base">
                Agents
              </span>
              <Plus className="ml-auto h-4 w-4 md:h-5 md:w-5 text-muted-foreground dark:text-gray-400" />
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 md:p-4 flex items-center gap-2 md:gap-3 dark:bg-gray-800">
              <div className="bg-blue-100 dark:bg-blue-900/50 rounded-full p-2">
                <Eye className="h-4 w-4 md:h-5 md:w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium dark:text-white text-sm md:text-base">
                Magnate
              </span>
              <Plus className="ml-auto h-4 w-4 md:h-5 md:w-5 text-muted-foreground dark:text-gray-400" />
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 md:p-4 flex items-center gap-2 md:gap-3 dark:bg-gray-800">
              <div className="bg-pink-100 dark:bg-pink-900/50 rounded-full p-2">
                <ImageIcon className="h-4 w-4 md:h-5 md:w-5 text-pink-600 dark:text-pink-400" />
              </div>
              <span className="font-medium dark:text-white text-sm md:text-base">
                Image Generation
              </span>
              <Plus className="ml-auto h-4 w-4 md:h-5 md:w-5 text-muted-foreground dark:text-gray-400" />
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 md:p-4 flex items-center gap-2 md:gap-3 dark:bg-gray-800">
              <div className="bg-green-100 dark:bg-green-900/50 rounded-full p-2">
                <svg
                  className="h-4 w-4 md:h-5 md:w-5 text-green-600 dark:text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 6l3 3-3 3M8 18l-3-3 3-3M3 12h18" />
                </svg>
              </div>
              <span className="font-medium dark:text-white text-sm md:text-base">
                AI in Vehicles
              </span>
              <Plus className="ml-auto h-4 w-4 md:h-5 md:w-5 text-muted-foreground dark:text-gray-400" />
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 md:p-4 flex items-center gap-2 md:gap-3 dark:bg-gray-800">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-2">
                <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="font-medium dark:text-white text-sm md:text-base">
                New AI Chat
              </span>
              <Plus className="ml-auto h-4 w-4 md:h-5 md:w-5 text-muted-foreground dark:text-gray-400" />
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {/* Chat messages will go here */}
        </div>

        {/* Message Input Area */}
        <div className="px-4 md:mx-12 mb-4 md:mb-6">
          <div className="border border-gray-200 rounded-lg p-3 md:p-4">
            <div className="flex justify-between items-center mb-3 md:mb-4">
              <div className="font-medium text-sm md:text-base">
                Summarize this Document
              </div>
              <Button size="sm" variant="ghost" className="text-purple-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 3L14 8L8 13V3Z" fill="currentColor" />
                </svg>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4">
              <Button
                variant="ghost"
                className="text-muted-foreground flex items-center gap-1 md:gap-2 text-xs md:text-sm py-1 h-auto"
              >
                <Paperclip size={14} />
                <span>Attachment</span>
              </Button>

              <Button
                variant="ghost"
                className="text-muted-foreground flex items-center gap-1 md:gap-2 text-xs md:text-sm py-1 h-auto"
              >
                <Mic size={14} />
                <span>Voice Message</span>
              </Button>

              <div className="ml-auto text-xs text-muted-foreground">
                0/1000
              </div>
            </div>

            <div className="text-xs text-muted-foreground mt-3 md:mt-4">
              Mr. Troy 1.4 may contain errors in people, places, or facts.
              Please note.
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Hidden on mobile, shown on md and up */}
      <div className="hidden md:block w-[280px] border-l border-gray-200 dark:border-gray-700">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex-none">
          <div className="font-medium dark:text-white">History</div>
        </div>

        <div className="p-4 overflow-y-auto flex-1">
          <div className="text-sm font-medium mb-2 dark:text-white">
            Today&apos;s
          </div>

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded text-xs"
            >
              <div className="font-medium dark:text-white">
                AI in autonomous vehicles...
              </div>
              <div className="text-muted-foreground dark:text-gray-400">
                AI in autonomous vehicles...
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
