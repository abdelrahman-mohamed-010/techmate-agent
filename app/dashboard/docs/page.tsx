"use client";

import { SearchQuestionsSection } from "@/components/dashboard/search-questions-section";
import QuestionSection from "./QuestionSection";

export default function DocsPage() {
  return (
    <div className="p-0 flex-1 overflow-auto">
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Train the Bot to give better answers to asked questions
      </p>
      <QuestionSection />
      <SearchQuestionsSection />
    </div>
  );
}
