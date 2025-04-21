"use client";

import { PieChart, Pie, Cell } from "recharts";

export function DonutChart() {
  const data = [
    { value: 60, color: "rgba(64, 84, 178, 1)" },
    { value: 20, color: "rgba(117, 138, 239, 1)" },
    { value: 20, color: "rgba(165, 181, 255, 1)" },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <PieChart width={240} height={240}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={57}
          outerRadius={97}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
