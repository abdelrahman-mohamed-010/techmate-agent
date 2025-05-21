"use client";
import React, { useState } from "react";
import { Upload, Download, Trash2 } from "lucide-react";
import { FileStatusDropdown } from "@/components/ui/FileStatusDropdown";

const mockFiles = [
  { id: 1, name: "File 2", status: "Active" },
  { id: 2, name: "File 1", status: "Active" },
];

const MAX_QUESTION_LENGTH = 100;
const MAX_ANSWER_LENGTH = 600;

const QuestionsCard: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [files, setFiles] = useState(mockFiles);

  const onQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= MAX_QUESTION_LENGTH)
      setQuestion(e.target.value);
  };

  const onAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_ANSWER_LENGTH) setAnswer(e.target.value);
  };

  const onClearAnswer = () => setAnswer("");
  const onPublish = () => {
    alert("Published!");
  };

  const handleStatusChange = (fileId: number, newStatus: string) => {
    setFiles(
      files.map((file) =>
        file.id === fileId ? { ...file, status: newStatus } : file
      )
    );
  };

  return (
    <div className="w-full mb-4 md:mb-6">
      <div className="rounded-2xl flex flex-col gap-3">
        <div className="flex items-start gap-2 md:gap-3 relative mb-1">
          <input
            type="text"
            className="flex-1 bg-white dark:bg-gray-700 text-base md:text-lg px-3 md:px-6 py-3 md:py-4 rounded-xl font-medium border-none outline-none shadow-none placeholder:text-[#b5b5b5] dark:placeholder:text-gray-400 dark:text-white"
            placeholder="New Question"
            value={question}
            onChange={onQuestionChange}
            maxLength={MAX_QUESTION_LENGTH}
          />
          <div className="flex flex-col items-center ml-1 md:ml-2">
            <button
              aria-label="Upload"
              className="bg-[#3f51b5] hover:bg-[#2f3e8c] p-2 md:p-3 rounded-xl"
            >
              <Upload color="#fff" size={24} />
            </button>
          </div>
          <span className="absolute right-[78px] md:right-[86px] top-1/2 transform -translate-y-1/2 text-[#dfdfdf] dark:text-gray-400 text-xs md:text-base font-medium pointer-events-none select-none">
            {question.length}/{MAX_QUESTION_LENGTH}
          </span>
        </div>
        {/* File rows */}
        {files.map((file, idx) => (
          <div
            key={file.id}
            className="w-full flex items-center rounded-xl h-10 md:h-12 px-3 md:px-5 mb-2 last:mb-0 bg-white dark:bg-gray-700"
            style={{ marginTop: idx === 0 ? 2 : 0 }}
          >
            <div className="flex-1 font-medium text-sm md:text-[16px] text-[#444] dark:text-gray-200">
              {file.name}
            </div>
            <div className="flex items-center gap-1">
              <FileStatusDropdown
                status={file.status}
                onStatusChange={(newStatus) =>
                  handleStatusChange(file.id, newStatus)
                }
              />
              <button
                aria-label="Download"
                className="hover:bg-[#ececec] dark:hover:bg-gray-600 rounded-md ml-2 md:ml-4 p-1 transition"
              >
                <Download
                  size={20}
                  className="text-gray-700 dark:text-gray-300"
                />
              </button>
            </div>
          </div>
        ))}

        {/* Answer Box */}
        <div className="relative mt-1 rounded-xl">
          <textarea
            placeholder="Answer"
            className="resize-none w-full text-base md:text-lg border-none outline-none py-3 md:py-4 px-3 md:px-6 min-h-[120px] md:min-h-[160px] bg-white dark:bg-gray-700 rounded-xl font-medium text-[#444] dark:text-white placeholder:text-[#b5b5b5] dark:placeholder:text-gray-400"
            value={answer}
            onChange={onAnswerChange}
            maxLength={MAX_ANSWER_LENGTH}
          ></textarea>
          <div className="absolute right-3 bottom-3 md:bottom-6 flex flex-col sm:flex-row items-end sm:items-center gap-2 md:gap-4">
            <span className="text-[#dfdfdf] dark:text-gray-400 text-xs md:text-base font-semibold">
              {answer.length}/{MAX_ANSWER_LENGTH}
            </span>
            <div className="flex items-center gap-2 md:gap-4">
              <button
                aria-label="Clear Answer"
                onClick={onClearAnswer}
                type="button"
              >
                <Trash2
                  size={20}
                  color="#c4c4c4"
                  className="hover:opacity-70 transition dark:text-gray-300"
                />
              </button>
              <button
                className="bg-[#3f51b5] hover:bg-[#2f3e8c] text-white rounded-xl px-4 md:px-7 py-1.5 md:py-2 text-sm md:text-lg font-semibold transition"
                onClick={onPublish}
                type="button"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsCard;
