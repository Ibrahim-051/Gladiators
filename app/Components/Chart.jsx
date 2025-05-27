"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "January", Gym: 12, Pool: 18, Yoga: 30 },
  { month: "February", Gym: 20, Pool: 10, Yoga: 10 },
  { month: "March", Gym: 15, Pool: 25, Yoga: 70 },
  { month: "April", Gym: 25, Pool: 25, Yoga: 70 },
  { month: "May", Gym: 35, Pool: 35, Yoga: 70 },
];

export default function FitnessAreaChart() {
  return (
    <div className="w-full max-w-4xl aspect-[16/9] bg-black p-6 rounded-lg">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorGym" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFD700" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPool" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF8C00" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF8C00" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorYoga" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF4500" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF4500" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Area
            type="monotone"
            dataKey="Gym"
            stroke="#FFD700"
            fillOpacity={1}
            fill="url(#colorGym)"
          />
          <Area
            type="monotone"
            dataKey="Pool"
            stroke="#FF8C00"
            fillOpacity={1}
            fill="url(#colorPool)"
          />
          <Area
            type="monotone"
            dataKey="Yoga"
            stroke="#FF4500"
            fillOpacity={1}
            fill="url(#colorYoga)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
