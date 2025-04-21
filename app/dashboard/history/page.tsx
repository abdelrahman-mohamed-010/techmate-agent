"use client";

import Image from "next/image";
import { Plus, Search } from "lucide-react";
import manImg from "@/public/images/man.png";
import { Input } from "@/components/ui/input";

export default function HistoryPage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-1">
        <p className="text-[#575757] dark:text-gray-300 mb-6 max-w-3xl">
          Explore, Learn, and Innovate with Nathsha AI&apos;s Robust Repository,
          Your Gateway to Informed Decision-Making and Continuous Growth
        </p>

        <div className="flex justify-between mb-8">
          <div className="relative w-full max-w-md ">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search Questions"
              className="pl-12 h-12 bg-white dark:bg-gray-700 border-none rounded-lg ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base dark:text-white dark:placeholder-gray-400"
            />
          </div>

          <button className="flex items-center gap-2 bg-[#4054b2] text-white px-4 py-2 rounded-md hover:bg-[#3648a5]">
            <Plus className="w-5 h-5" />
            <span>Add Knowledge</span>
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-md border border-[#ececec] dark:border-gray-700">
          <div className="grid grid-cols-4 px-6 py-4 border-b border-[#ececec] dark:border-gray-700 font-medium dark:text-white">
            <div>Details</div>
            <div>Theme</div>
            <div>Created On</div>
            <div>Tags</div>
          </div>

          {[
            {
              agent: "Abc def ghi",
              name: "Daniel Lee",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              agent: "Abc def ghi",
              name: "Mia Johnson",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              agent: "Abc def ghi",
              name: "Ryan Smith",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              agent: "Abc def ghi",
              name: "Christopher",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              agent: "Abc def ghi",
              name: "Liam Taylor",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              agent: "Abc def ghi",
              name: "Christopher",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              agent: "Abc def ghi",
              name: "Noah Wilson",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              agent: "Abc def ghi",
              name: "Ethan Brown",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              agent: "Abc def ghi",
              name: "Mia Johnson",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              agent: "Abc def ghi",
              name: "Daniel Lee",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
            {
              agent: "Abc def ghi",
              name: "Ryan Smith",
              date: "20.04.24",
              tags: "321 453 782",
              avatar: "/placeholder.svg?height=40&width=40",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 px-6 py-4 border-b border-[#ececec] dark:border-gray-700 items-center dark:text-gray-200"
            >
              <div className="text-[#333333] dark:text-gray-200">
                {item.agent}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                  <Image
                    src={manImg}
                    alt={item.name}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span>{item.name}</span>
              </div>
              <div>{item.date}</div>
              <div>{item.tags}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
