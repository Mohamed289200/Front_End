import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Hypertension", value: 456 },
  { name: "Coronary Artery Disease (CAD)", value: 326 },
  { name: "Other", value: 195 },
  { name: "Heart Failure", value: 195 },
  { name: "Atrial Fibrillation (AFib)", value: 130 },
];

const COLORS = ["#37568d", "#007eb1", "#00a5ba", "#00c8a6", "#8be585"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const innerRadiusLabel = innerRadius + (outerRadius - innerRadius) * 0.5;
  const innerX = cx + innerRadiusLabel * Math.cos(-midAngle * RADIAN);
  const innerY = cy + innerRadiusLabel * Math.sin(-midAngle * RADIAN);

  const outerRadiusLabel = outerRadius * 1.3;
  const outerX = cx + outerRadiusLabel * Math.cos(-midAngle * RADIAN);
  const outerY = cy + outerRadiusLabel * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text
        x={innerX}
        y={innerY}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <text
        x={outerX}
        y={outerY}
        fill="#000000"
        textAnchor={outerX > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="8"
        fontWeight="bold"
      >
        {name}
      </text>
    </>
  );
};

export const DiagnosisChart = () => {
  return (
    <div className="col-span-5 rounded-lg bg-white shadow-sm p-4 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-center mb-4">Average Diagnoses</h2>
      <div className="w-full flex justify-center">
        <PieChart width={window.innerWidth < 768 ? 300 : 475} height={window.innerWidth < 768 ? 250 : 300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label={renderCustomizedLabel}
            outerRadius={window.innerWidth < 768 ? 70 : 90}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};
