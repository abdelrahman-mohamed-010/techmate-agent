export type File = {
  id: string;
  name: string;
  status: "Active" | "Cancelled" | "Inactive";
};

export type QuestionCard = {
  id: number;
  question: string;
  timeAgo: string;
  askedTimes: number;
  files: File[];
};
