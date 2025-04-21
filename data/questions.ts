import { QuestionCard } from "@/types/question";

export const questionCards: QuestionCard[] = [
  {
    id: 1,
    question: "Why my fridge is not working, its been a month?",
    timeAgo: "6 Minutes Ago",
    askedTimes: 12,
    files: [
      { id: "1", name: "File 1", status: "Active" },
      { id: "2", name: "File 2", status: "Cancelled" },
    ],
  },
  {
    id: 2,
    question: "Why my fridge is not working, its been a month? ",
    timeAgo: "2 days ago",
    askedTimes: 5,
    files: [
      { id: "3", name: "File 1", status: "Active" },
      { id: "4", name: "File 2", status: "Inactive" },
    ],
  },
];
