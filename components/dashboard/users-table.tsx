"use client";

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
  return (
    <div className="overflow-x-auto max-h-[440px]">
      <table className="w-full">
        <thead>
          <tr className="relative after:absolute after:left-4 after:right-4 after:bottom-0 after:border-b after:border-gray-200 dark:after:border-gray-700">
            <th className="text-left p-4 font-medium text-[#242424] dark:text-white">
              Profile
            </th>
            <th className="text-left p-4 font-medium text-[#242424] dark:text-white">
              Name
            </th>
            <th className="text-left p-4 font-medium text-[#242424] dark:text-white">
              Email Address
            </th>
            <th className="text-left p-4 font-medium text-[#242424] dark:text-white">
              Contact No
            </th>
            <th className="text-left p-4 font-medium text-[#242424] dark:text-white">
              Account No
            </th>
            <th className="text-left p-4 font-medium text-[#242424] dark:text-white">
              Subscription
            </th>
            <th className="text-left p-4 font-medium text-[#242424] dark:text-white">
              Status
            </th>
            <th className="text-left p-4 font-medium text-[#242424] dark:text-white">
              Join Date
            </th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-200">
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={
                index === users.length - 1
                  ? ""
                  : "relative after:absolute after:left-4 after:right-4 after:bottom-0 after:border-b after:border-gray-200 dark:after:border-gray-700"
              }
            >
              <td
                className={`pt-4 pr-4 pl-4 ${
                  index === users.length - 1 ? "pb-0" : "pb-4"
                }`}
              >
                <Avatar>
                  <Image src={manImg} alt={user.name} width={60} height={60} />
                </Avatar>
              </td>
              <td
                className={`pt-4 pr-4 pl-4 ${
                  index === users.length - 1 ? "pb-0" : "pb-4"
                }`}
              >
                {user.name}
              </td>
              <td
                className={`pt-4 pr-4 pl-4 ${
                  index === users.length - 1 ? "pb-0" : "pb-4"
                }`}
              >
                {user.email}
              </td>
              <td
                className={`pt-4 pr-4 pl-4 ${
                  index === users.length - 1 ? "pb-0" : "pb-4"
                }`}
              >
                {user.contact}
              </td>
              <td
                className={`pt-4 pr-4 pl-4 ${
                  index === users.length - 1 ? "pb-0" : "pb-4"
                }`}
              >
                {user.account}
              </td>
              <td
                className={`pt-4 pr-4 pl-4 ${
                  index === users.length - 1 ? "pb-0" : "pb-4"
                }`}
              >
                {user.subscription}
              </td>
              <td
                className={`pt-4 pr-4 pl-4 ${
                  index === users.length - 1 ? "pb-0" : "pb-4"
                }`}
              >
                <Badge
                  className={`w-18 text-center py-1.5 rounded-xl font-medium ${
                    user.status === "Active"
                      ? "bg-tertiary text-white hover:bg-tertiary/90"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-200/90 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-700/90"
                  }`}
                >
                  {user.status}
                </Badge>
              </td>
              <td
                className={`pt-4 pr-4 pl-4 ${
                  index === users.length - 1 ? "pb-0" : "pb-4"
                }`}
              >
                {user.joinDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
