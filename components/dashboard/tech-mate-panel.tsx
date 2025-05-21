import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Share2, Trash2 } from "lucide-react";

interface File {
  id: string;
  name: string;
  status: "Active" | "Cancelled" | "Inactive";
}

interface TechMatePanelProps {
  question: string;
  files: File[];
  timeAgo: string;
  askCount: number;
  onTrain?: () => void;
  onDelete?: () => void;
}

export function TechMatePanel({
  question,
  files,
  timeAgo,
  askCount,
  onTrain,
  onDelete,
}: TechMatePanelProps) {
  return (
    <Card className="w-full border-none mb-2 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="p-3 pt-3 flex items-start gap-2 bg-white dark:bg-gray-800">
        <div className="p-1.5 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
          <MessageSquare size={16} className="text-red-400" />
        </div>
        <div className="font-medium text-sm leading-snug text-black dark:text-white line-clamp-2">
          {question}
        </div>
      </div>

      {/* Answer area */}
      <div className="p-3 pb-2 bg-[#F7F7FA] dark:bg-gray-700">
        <Textarea
          placeholder="Answer"
          className="min-h-[70px] rounded-lg text-xs px-3 py-2 mb-3 border-0 bg-white dark:bg-gray-600 shadow-sm dark:text-white dark:placeholder-gray-400 resize-none"
        />

        {/* Files */}
        <div className="flex flex-col gap-1.5">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between rounded-lg bg-white dark:bg-gray-600 px-2 py-1.5 border-none shadow-sm"
            >
              <span className="text-xs text-gray-400 dark:text-gray-300 font-normal truncate max-w-[65%]">
                {file.name}
              </span>
              <span
                className={`ml-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full 
                ${
                  file.status === "Active"
                    ? "text-[#21B573] bg-[#21B573]/10"
                    : file.status === "Cancelled"
                    ? "text-[#EA384C] bg-[#EA384C]/10"
                    : "text-gray-400 bg-gray-100 dark:bg-gray-700"
                }`}
              >
                {file.status}
              </span>
            </div>
          ))}
        </div>

        {/* Train Button */}
        <div className="flex justify-end my-2 mt-3">
          <Button
            onClick={onTrain}
            className="flex items-center gap-1 bg-tertiary hover:bg-tertiary/90 transition font-medium rounded-lg h-8 py-0 px-3 text-xs shadow-sm"
          >
            <Share2 size={14} strokeWidth={2} className="mr-1" />
            Train
          </Button>
        </div>
      </div>

      {/* Footer/Metadata */}
      <div className="px-3 py-2 flex items-center justify-between bg-white dark:bg-gray-800">
        <div className="text-[10px] text-[#717494] dark:text-gray-300 font-normal">
          {timeAgo} —{" "}
          <span className="text-[#EA384C] font-medium">
            Asked {askCount} times
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 h-7 w-7"
          onClick={onDelete}
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </Card>
  );
}
