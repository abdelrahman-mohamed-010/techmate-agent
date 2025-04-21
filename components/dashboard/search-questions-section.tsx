"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { questionCards } from "@/data/questions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TechMatePanel } from "@/components/dashboard/tech-mate-panel";

export function SearchQuestionsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-md ">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search Questions"
            className="pl-12 h-12 bg-white dark:bg-gray-700 border-none rounded-lg ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base dark:text-white dark:placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[120px] rounded-lg text-gray-300 h-12 bg-white dark:bg-gray-700 border-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base dark:text-gray-300">
            <SelectValue placeholder="All (7)" />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-700 border-none dark:border-gray-600">
            <SelectItem
              value="all"
              className="text-base focus:bg-gray-100 dark:focus:bg-gray-600 dark:text-white"
            >
              All (7)
            </SelectItem>
            <SelectItem
              value="active"
              className="text-base focus:bg-gray-100 dark:focus:bg-gray-600 dark:text-white"
            >
              Active
            </SelectItem>
            <SelectItem
              value="inactive"
              className="text-base focus:bg-gray-100 dark:focus:bg-gray-600 dark:text-white"
            >
              Inactive
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questionCards.map((card) => (
          <TechMatePanel
            key={card.id}
            question={card.question}
            files={card.files}
            timeAgo={card.timeAgo}
            askCount={card.askedTimes}
            onTrain={() => console.log("Train clicked")}
            onDelete={() => console.log("Delete clicked")}
          />
        ))}
      </div>
    </>
  );
}
