"use client";

import {
  ArrowLeft,
  ChevronDown,
  Edit,
  MessageSquare,
  Plus,
  Search,
  ThumbsDown,
  ThumbsUp,
  Send,
  Copy,
  FileText,
  History,
  Settings,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function TechMateChat() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen w-full bg-white relative">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-white text-gray-700 shadow-sm"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>{" "}
      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed md:relative inset-y-0 left-0 z-50 w-[250px] md:w-[200px] border-r border-gray-200 flex flex-col bg-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden absolute top-3 right-3 z-50 p-1 rounded-full hover:bg-gray-200"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        <div className="p-4 pb-2 flex items-center gap-2 border-b border-gray-200">
          <ArrowLeft className="h-5 w-5 text-gray-500" />
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white text-sm font-medium">
              T
            </div>
            <div>
              <div className="text-sm font-medium">TechMate</div>
              <div className="text-xs text-gray-500">by Techai</div>
            </div>
          </div>
        </div>

        <div className="px-3 pb-3 mt-3">
          <button className="w-full bg-[#3b5bdb] hover:bg-[#364fc7] text-white rounded-md py-2 px-3 text-sm font-medium flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New chat
          </button>
        </div>

        <div className="px-3 pb-3">
          <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-2">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-sm w-full text-gray-700"
            />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="px-3 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
            <FileText className="h-5 w-5 text-gray-500" />
            <span className="text-sm">Documents</span>
            <span className="text-xs text-gray-500 ml-auto">04</span>
          </div>

          <div className="px-3 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
            <History className="h-5 w-5 text-gray-500" />
            <span className="text-sm">History</span>
            <ChevronDown className="h-4 w-4 text-gray-500 ml-auto" />
          </div>
        </div>

        <div className="mt-auto border-t border-gray-200">
          <div className="px-3 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
            <Settings className="h-5 w-5 text-gray-500" />
            <span className="text-sm">Settings</span>
          </div>

          <div className="px-3 py-2 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
            <HelpCircle className="h-5 w-5 text-gray-500" />
            <span className="text-sm">Help</span>
          </div>

          <div className="p-3 border-t border-gray-200 flex items-center">
            <div className="text-sm">
              <div className="font-medium">Jaffer Ali</div>
              <div className="text-xs text-gray-500">Free trial</div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Main Chat Area */}{" "}
      <div className="flex-1 flex flex-col pt-12 md:pt-0">
        <div className="p-3 md:p-4 border-b border-gray-200 flex items-center relative">
          <h1 className="text-lg md:text-xl font-medium">Chat</h1>
        </div>
        <div className="flex-1 overflow-auto bg-gray-100 p-3 md:p-4 space-y-4 md:space-y-6">
          {" "}
          {/* User Message 1 */}
          <div className="space-y-1 md:space-y-2">
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600">
              <span className="font-medium">You</span>
              <span>•</span>
              <span>15 min</span>
              <button className="ml-auto">
                <Edit className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
              </button>
            </div>
            <div className="text-sm md:text-base text-gray-800">
              Hey Natasha.AI, my microwave suddenly stopped heating up food.
              What could be the possible reasons behind this issue, and how can
              I troubleshoot it?~
            </div>
          </div>
          {/* AI Response 1 */}
          <div className="space-y-1 md:space-y-2">
            <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
                <div className="h-5 w-5 md:h-6 md:w-6 rounded-md bg-blue-100 flex items-center justify-center">
                  <MessageSquare className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
                </div>
                <span className="font-medium">Natasha</span>
                <span>•</span>
                <span>15 min</span>
                <div className="ml-auto flex items-center gap-1">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ThumbsUp className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ThumbsDown className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="text-sm md:text-base text-gray-800">
                Hello! There could be several reasons why your microwave
                isn&apos;t heating food. It could be a problem with the
                magnetron, the high voltage diode, or the capacitor. First,
                ensure that the microwave is plugged in securely and that the
                circuit breaker hasn&apos;t tripped. If everything seems fine,
                it&apos;s best to consult a professional technician to diagnose
                and repair the issue, as working with high-voltage components
                can be dangerous.
              </div>
            </div>
          </div>
          {/* User Message 2 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">You</span>
              <span>•</span>
              <span>15 min</span>
              <button className="ml-auto">
                <Edit className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <div className="text-gray-800">
              Natasha.AI, my dishwasher isn&apos;t draining properly. What could
              be causing this issue, and how can I troubleshoot it?
            </div>
          </div>
          {/* AI Response 2 */}
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <div className="h-6 w-6 rounded-md bg-blue-100 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                </div>
                <span className="font-medium">Natasha</span>
                <span>•</span>
                <span>15 min</span>
                <div className="ml-auto flex items-center gap-1">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ThumbsUp className="h-4 w-4 text-gray-400" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ThumbsDown className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="text-gray-800">
                Your dishwasher&apos;s drain hose might be clogged or kinked.
                Try cleaning it or straightening it out. Also, check the
                dishwasher&apos;s filter for any debris. If the problem
                persists, consider calling a professional technician for further
                assistance.
              </div>
            </div>
          </div>
          {/* User Message 3 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">You</span>
              <span>•</span>
              <span>15 min</span>
              <button className="ml-auto">
                <Edit className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <div className="text-gray-800">
              Hey Natasha.AI, fridge trouble. Need help!
            </div>
            <div className="flex justify-end">
              <button className="flex items-center gap-1 text-sm text-gray-600 bg-white rounded px-2 py-1 shadow-sm">
                <Copy className="h-4 w-4" />
                Copy
              </button>
            </div>
          </div>
        </div>{" "}
        {/* Chat Input */}
        <div className="p-3 md:p-4 bg-gray-100">
          <div className="bg-white rounded-lg border border-gray-300 p-2 md:p-4 flex items-center">
            <button className="text-blue-600 text-sm md:text-base font-medium">
              Continue chat
            </button>
            <button className="ml-auto bg-blue-600 text-white p-1 md:p-2 rounded-md">
              <Send className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
          <div className="text-[10px] md:text-xs text-gray-500 mt-1 md:mt-2 text-center">
            Complimentary Sneak Peek of Research. ChatAI has the potential to
            generate incorrect information.
          </div>
        </div>
      </div>
    </div>
  );
}
