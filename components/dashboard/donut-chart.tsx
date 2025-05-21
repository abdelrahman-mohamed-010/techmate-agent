"use client";

import { PieChart, Pie, Cell } from "recharts";
import { useEffect, useState } from "react";

export function DonutChart() {
  const data = [
    { value: 60, color: "rgba(64, 84, 178, 1)" },
    { value: 20, color: "rgba(117, 138, 239, 1)" },
    { value: 20, color: "rgba(165, 181, 255, 1)" },
  ];

  const [chartSize, setChartSize] = useState({ width: 240, height: 240 });
  const [innerRadius, setInnerRadius] = useState(57);
  const [outerRadius, setOuterRadius] = useState(97);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        // Very small screens
        setChartSize({ width: 170, height: 170 });
        setInnerRadius(40);
        setOuterRadius(70);
      } else if (window.innerWidth < 640) {
        // Small screens
        setChartSize({ width: 200, height: 200 });
        setInnerRadius(47);
        setOuterRadius(80);
      } else {
        // Medium and larger screens
        setChartSize({ width: 240, height: 240 });
        setInnerRadius(57);
        setOuterRadius(97);
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <PieChart width={chartSize.width} height={chartSize.height}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
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
