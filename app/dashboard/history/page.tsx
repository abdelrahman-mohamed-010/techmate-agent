import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HistoryPage() {
  const items = [
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
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-1">
        <p className="text-xs sm:text-sm md:text-base text-[#575757] dark:text-gray-300 mb-4 sm:mb-6 max-w-3xl">
          Explore, Learn, and Innovate with Nathsha AI&apos;s Robust Repository,
          Your Gateway to Informed Decision-Making and Continuous Growth
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-between mb-6 sm:mb-8">
          <div className="relative w-full max-w-full sm:max-w-md">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
            <Input
              placeholder="Search Questions"
              className="pl-10 sm:pl-12 h-10 sm:h-12 bg-white dark:bg-gray-700 border-none rounded-lg ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base dark:text-white dark:placeholder-gray-400"
            />
          </div>

          <button className="flex items-center justify-center sm:justify-start gap-2 bg-[#4054b2] text-white px-4 py-2 rounded-md hover:bg-[#3648a5] text-sm sm:text-base h-10 sm:h-12 w-full sm:w-auto">
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Add Knowledge</span>
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-md border border-[#ececec] dark:border-gray-700 overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-4 px-4 sm:px-6 py-3 sm:py-4 border-b border-[#ececec] dark:border-gray-700 font-medium dark:text-white text-xs sm:text-sm md:text-base">
              <div>Details</div>
              <div>Theme</div>
              <div>Created On</div>
              <div>Tags</div>
            </div>

            {items.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-4 px-6 py-4 border-b border-[#ececec] dark:border-gray-700 items-center dark:text-gray-200"
              >
                <div className="text-[#333333] dark:text-gray-200">
                  {item.agent}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                    {/* <Image
                      src={item.avatar}
                      width={40}
                      height={40}
                      alt={item.name}
                      className="object-cover"
                    />
                   */}
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
    </div>
  );
}
