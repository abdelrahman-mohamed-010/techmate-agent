"use client";

import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";

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
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isSmall: false,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 480,
        isSmall: window.innerWidth < 640,
      });
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const data = months.map((month, index) => ({
    name: month,
    value: values[index],
  }));

  const getMobileData = () => {
    if (screenSize.isMobile) {
      return data.filter((_, i) => i % 3 === 0); // Every third month for very small screens
    }
    if (screenSize.isSmall) {
      return data.filter((_, i) => i % 2 === 0); // Every second month for small screens
    }
    return data; // All months for larger screens
  };

  return (
    <div className="w-full h-full min-h-[180px] sm:min-h-[200px] md:min-h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={
            screenSize.isMobile || screenSize.isSmall ? getMobileData() : data
          }
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
            tick={{
              fill: "black",
              fontSize: screenSize.isMobile ? 9 : screenSize.isSmall ? 10 : 12,
              fontFamily: "Inter",
            }}
            axisLine={false}
            tickLine={false}
            interval={0} // Show all labels from filtered data
          />
          <YAxis
            tick={{
              fill: "black",
              fontSize: screenSize.isMobile ? 9 : screenSize.isSmall ? 10 : 12,
              fontFamily: "Inter",
              dx: -5,
            }}
            axisLine={false}
            tickLine={false}
            domain={[0, 1000]}
            ticks={
              screenSize.isMobile
                ? [0, 500, 1000]
                : screenSize.isSmall
                ? [0, 500, 1000]
                : [0, 250, 500, 750, 1000]
            }
            tickFormatter={(tick) => `$${tick}`}
            width={screenSize.isMobile ? 30 : screenSize.isSmall ? 35 : 45}
          />
          <Tooltip
            cursor={false}
            formatter={(value) => `$${value}`}
            contentStyle={{
              fontSize: screenSize.isMobile ? "10px" : "12px",
              padding: screenSize.isMobile ? "4px 8px" : "8px 10px",
            }}
          />
          <Bar
            dataKey="value"
            fill="url(#barGradient)"
            radius={[4, 4, 0, 0]}
            barSize={
              screenSize.isMobile ? 15 : screenSize.isSmall ? 20 : undefined
            }
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
