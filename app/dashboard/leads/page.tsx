"use client";

import { Search, Download, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function LeadsPage() {
  return (
    <div className="p-1">
      <h1 className="text-2xl font-semibold mb-2 dark:text-white">All Leads</h1>
      <p className="text-[#575757] dark:text-gray-300 mb-6">
        View all your leads.
      </p>

      <div className="flex justify-between mb-8">
        <div className="flex gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search Questions"
              className="pl-12 h-12 bg-white dark:bg-gray-700 border-none rounded-lg ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base dark:text-white dark:placeholder-gray-400"
            />
          </div>

          <Select defaultValue="name">
            <SelectTrigger className="w-[180px] rounded-lg py-6 text-gray-400 h-12 bg-white dark:bg-gray-700 border-none ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base dark:text-gray-400">
              <SelectValue placeholder="Choose Filter" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-700 border-none dark:border-gray-600">
              <SelectItem
                value="name"
                className="text-base focus:bg-gray-100 dark:focus:bg-gray-600 dark:text-white"
              >
                Name
              </SelectItem>
              <SelectItem
                value="date"
                className="text-base focus:bg-gray-100 dark:focus:bg-gray-600 dark:text-white"
              >
                Date
              </SelectItem>
              <SelectItem
                value="status"
                className="text-base focus:bg-gray-100 dark:focus:bg-gray-600 dark:text-white"
              >
                Status
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <button className="flex items-center gap-2 bg-[#4054b2] text-white px-4 py-2 rounded-md hover:bg-[#3648a5]">
          <Download className="w-5 h-5" />
          <span>Download</span>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-md border border-[#ececec] dark:border-gray-700">
        <div className="grid grid-cols-5 px-6 py-4 border-b border-[#ececec] dark:border-gray-700 font-medium dark:text-white">
          <div>Name</div>
          <div>Phone</div>
          <div>E-mail</div>
          <div>Date</div>
          <div>Check</div>
        </div>

        {Array(11)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-5 px-6 py-4 border-b border-[#ececec] dark:border-gray-700 items-center dark:text-gray-200"
            >
              <div className="text-[#333333] dark:text-gray-200">
                Maria Maria
              </div>
              <div>6949494949</div>
              <div>mail@mail.com</div>
              <div>20.04.24</div>
              <div className="flex justify-between items-center">
                <div
                  className={`w-6 h-6 rounded-full ${
                    index === 4
                      ? "bg-[#28b446]"
                      : "bg-[#d9d9d9] dark:bg-gray-600"
                  }`}
                ></div>
                <button className="text-[#d44242]">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
