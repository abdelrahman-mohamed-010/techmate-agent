interface FileStatusDropdownProps {
  status: string;
  onStatusChange: (newStatus: string) => void;
}

export function FileStatusDropdown({
  status,
  onStatusChange,
}: FileStatusDropdownProps) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1">
        <span
          className={`text-[15px] mr-2 font-semibold ${
            status === "Active" ? "text-green-600" : "text-red-700"
          }`}
        >
          {status}
        </span>
        <svg
          width="16"
          height="16"
          className={`inline-block mb-[2px] transform ${
            status === "Active" ? "" : "rotate-180"
          } transition-transform`}
        >
          <polygon
            points="3,6 8,11 13,6"
            fill={status === "Active" ? "#47bb69" : "#dc2626"}
          />
        </svg>
      </button>
      <div className="absolute hidden group-hover:block right-0 mt-1 bg-white shadow-lg rounded-md py-1 z-10">
        <button
          onClick={() => onStatusChange("Active")}
          className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-green-600"
        >
          Active
        </button>
        <button
          onClick={() => onStatusChange("Inactive")}
          className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-red-700"
        >
          Inactive
        </button>
      </div>
    </div>
  );
}
