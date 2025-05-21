"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import manImg from "@/public/images/man.png";

const users = [
  {
    id: 1,
    name: "Christopher",
    email: "christopher@mail.com",
    contact: "+92 000 000 000",
    account: "321 453 782",
    subscription: "Yearly",
    status: "Active",
    joinDate: "20.04.24",
  },
  {
    id: 2,
    name: "Christopher",
    email: "christopher@mail.com",
    contact: "+92 000 000 000",
    account: "321 453 782",
    subscription: "Monthly",
    status: "Inactive",
    joinDate: "20.04.24",
  },
  {
    id: 3,
    name: "Christopher",
    email: "christopher@mail.com",
    contact: "+92 000 000 000",
    account: "321 453 782",
    subscription: "Monthly",
    status: "Active",
    joinDate: "20.04.24",
  },
  {
    id: 4,
    name: "Christopher",
    email: "christopher@mail.com",
    contact: "+92 000 000 000",
    account: "321 453 782",
    subscription: "Yearly",
    status: "Inactive",
    joinDate: "20.04.24",
  },
  {
    id: 5,
    name: "Christopher",
    email: "christopher@mail.com",
    contact: "+92 000 000 000",
    account: "321 453 782",
    subscription: "Monthly",
    status: "Active",
    joinDate: "20.04.24",
  },
  {
    id: 6,
    name: "Christopher",
    email: "christopher@mail.com",
    contact: "+92 000 000 000",
    account: "321 453 782",
    subscription: "Yearly",
    status: "Active",
    joinDate: "20.04.24",
  },
];

export function UsersTable() {
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "profile",
    "name",
    "email",
    "status",
    "subscription",
  ]);

  // Show different columns based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleColumns(["profile", "name", "status"]);
      } else if (window.innerWidth < 1024) {
        setVisibleColumns([
          "profile",
          "name",
          "email",
          "status",
          "subscription",
        ]);
      } else {
        setVisibleColumns([
          "profile",
          "name",
          "email",
          "contact",
          "account",
          "subscription",
          "status",
          "joinDate",
        ]);
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isColumnVisible = (columnName: string) =>
    visibleColumns.includes(columnName);

  return (
    <div className="overflow-x-auto pb-2 -mx-2 px-2">
      <div className="min-w-full md:min-w-[720px]">
        <table className="w-full table-auto">
          <thead>
            <tr className="relative after:absolute after:left-4 after:right-4 after:bottom-0 after:border-b after:border-gray-200 dark:after:border-gray-700 text-xs md:text-sm">
              {isColumnVisible("profile") && (
                <th className="text-left p-2 font-medium text-[#242424] dark:text-white whitespace-nowrap">
                  Profile
                </th>
              )}
              {isColumnVisible("name") && (
                <th className="text-left p-2 font-medium text-[#242424] dark:text-white whitespace-nowrap">
                  Name
                </th>
              )}
              {isColumnVisible("email") && (
                <th className="text-left p-2 font-medium text-[#242424] dark:text-white whitespace-nowrap hidden sm:table-cell">
                  Email
                </th>
              )}
              {isColumnVisible("contact") && (
                <th className="text-left p-2 font-medium text-[#242424] dark:text-white whitespace-nowrap hidden lg:table-cell">
                  Contact
                </th>
              )}
              {isColumnVisible("account") && (
                <th className="text-left p-2 font-medium text-[#242424] dark:text-white whitespace-nowrap hidden lg:table-cell">
                  Account No
                </th>
              )}
              {isColumnVisible("subscription") && (
                <th className="text-left p-2 font-medium text-[#242424] dark:text-white whitespace-nowrap hidden sm:table-cell">
                  Plan
                </th>
              )}
              {isColumnVisible("status") && (
                <th className="text-left p-2 font-medium text-[#242424] dark:text-white whitespace-nowrap">
                  Status
                </th>
              )}
              {isColumnVisible("joinDate") && (
                <th className="text-left p-2 font-medium text-[#242424] dark:text-white whitespace-nowrap hidden lg:table-cell">
                  Join Date
                </th>
              )}
            </tr>
          </thead>
          <tbody className="dark:text-gray-200 text-xs md:text-sm">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={
                  index === users.length - 1
                    ? ""
                    : "relative after:absolute after:left-4 after:right-4 after:bottom-0 after:border-b after:border-gray-200 dark:after:border-gray-700"
                }
              >
                {isColumnVisible("profile") && (
                  <td
                    className={`py-2 px-2 ${
                      index === users.length - 1 ? "pb-0" : ""
                    }`}
                  >
                    <Avatar className="h-8 w-8 md:h-10 md:w-10">
                      <Image
                        src={manImg}
                        alt={user.name}
                        width={40}
                        height={40}
                      />
                    </Avatar>
                  </td>
                )}
                {isColumnVisible("name") && (
                  <td
                    className={`py-2 px-2 ${
                      index === users.length - 1 ? "pb-0" : ""
                    }`}
                  >
                    {user.name}
                  </td>
                )}
                {isColumnVisible("email") && (
                  <td
                    className={`py-2 px-2 ${
                      index === users.length - 1 ? "pb-0" : ""
                    } hidden sm:table-cell`}
                  >
                    {user.email}
                  </td>
                )}
                {isColumnVisible("contact") && (
                  <td
                    className={`py-2 px-2 ${
                      index === users.length - 1 ? "pb-0" : ""
                    } hidden lg:table-cell`}
                  >
                    {user.contact}
                  </td>
                )}
                {isColumnVisible("account") && (
                  <td
                    className={`py-2 px-2 ${
                      index === users.length - 1 ? "pb-0" : ""
                    } hidden lg:table-cell`}
                  >
                    {user.account}
                  </td>
                )}
                {isColumnVisible("subscription") && (
                  <td
                    className={`py-2 px-2 ${
                      index === users.length - 1 ? "pb-0" : ""
                    } hidden sm:table-cell`}
                  >
                    {user.subscription}
                  </td>
                )}
                {isColumnVisible("status") && (
                  <td
                    className={`py-2 px-2 ${
                      index === users.length - 1 ? "pb-0" : ""
                    }`}
                  >
                    <Badge
                      className={`text-xs text-center py-1 px-2 md:px-3 rounded-xl font-medium ${
                        user.status === "Active"
                          ? "bg-tertiary text-white hover:bg-tertiary/90"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-200/90 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/90"
                      }`}
                    >
                      {user.status}
                    </Badge>
                  </td>
                )}
                {isColumnVisible("joinDate") && (
                  <td
                    className={`py-2 px-2 ${
                      index === users.length - 1 ? "pb-0" : ""
                    } hidden lg:table-cell`}
                  >
                    {user.joinDate}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
