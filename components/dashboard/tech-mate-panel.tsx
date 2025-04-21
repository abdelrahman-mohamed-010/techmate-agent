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
    <Card className="w-[420px] border-none mb-2 rounded-xl overflow-hidden mx-auto bg-white dark:bg-gray-800">
      {/* Header */}
      <div className="p-3 py-0 flex items-start justify-center gap-3 bg-white dark:bg-gray-800">
        <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
          <MessageSquare size={20} className="text-red-400" />
        </div>
        <div className="font-medium text-[18px] leading-snug text-black dark:text-white">
          {question}
        </div>
      </div>

      {/* Answer area */}
      <div className="p-4 pb-2 bg-[#F7F7FA] dark:bg-gray-700">
        <Textarea
          placeholder="Answer"
          className="min-h-[90px] rounded-lg text-base px-4 py-3 mb-4 border-0 bg-white dark:bg-gray-600 shadow-card dark:text-white dark:placeholder-gray-400"
          style={{
            boxShadow: "0px 2px 8px 0px #0FA0CE0A",
            fontWeight: 400,
            color: "#242424",
            marginBottom: "20px",
          }}
        />

        {/* Files */}
        <div className="flex flex-col gap-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between rounded-lg bg-white dark:bg-gray-600 px-3 py-[9px] border-none shadow-card"
              style={{
                boxShadow: "0px 2px 8px 0px #0FA0CE0A",
                minHeight: "42px",
              }}
            >
              <span className="text-[15px] text-gray-400 dark:text-gray-300 font-normal">
                {file.name}
              </span>
              <span
                className={`ml-3 text-sm font-medium 
                ${
                  file.status === "Active"
                    ? "text-[#21B573]"
                    : file.status === "Cancelled"
                    ? "text-[#EA384C]"
                    : "text-gray-400"
                }`}
              >
                {file.status}
              </span>
            </div>
          ))}
        </div>

        {/* Train Button */}
        <div className="flex justify-end my-3 mt-5">
          <Button
            onClick={onTrain}
            className="flex items-center gap-2 bg-tertiary hover:bg-tertiary/90 transition font-semibold rounded-lg w-[104px] h-[40px] py-4 text-base shadow-md"
            style={{ boxShadow: "0px 2px 12px 0px #3346FF26" }}
          >
            <Share2 size={21} strokeWidth={2.2} className="mr-2 -ml-0" />
            Train
          </Button>
        </div>
      </div>

      {/* Footer/Metadata */}
      <div className="p-3 py-0 flex items-center justify-between bg-white dark:bg-gray-800">
        <div className="text-[15px] text-[#717494] dark:text-gray-300 font-normal tracking-wide">
          {timeAgo} —{" "}
          <span className="text-[#EA384C] font-medium">
            Asked {askCount} times
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-red-400 hover:bg-white dark:hover:bg-gray-700"
          onClick={onDelete}
        >
          <Trash2 size={23} />
        </Button>
      </div>
    </Card>
  );
}
