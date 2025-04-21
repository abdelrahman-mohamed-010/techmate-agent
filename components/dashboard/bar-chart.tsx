"use client";

import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export function BarChart() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
  ];
  const values = [250, 550, 180, 220, 450, 850, 380, 220, 300];

  const data = months.map((month, index) => ({
    name: month,
    value: values[index],
  }));

  return (
    <div className="w-full h-full min-h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(117,133,210,0.38)" /> 
              <stop offset="100%" stopColor="rgba(87,104,187,1)" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tick={{ fill: "black", fontSize: 12, fontFamily: "Inter" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{
              fill: "black",
              fontSize: 12,
              fontFamily: "Inter",
              dx: -5,
            }}
            axisLine={false}
            tickLine={false}
            domain={[0, 1000]}
            ticks={[0, 250, 500, 750, 1000]}
            tickFormatter={(tick) => `$${tick}`}
            width={45}
          />
          <Tooltip cursor={false} formatter={(value) => `$${value}`} />
          <Bar dataKey="value" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
