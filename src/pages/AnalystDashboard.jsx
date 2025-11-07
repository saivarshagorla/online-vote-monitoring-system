import React from "react";
import "./AnalystDashboard.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function AnalystDashboard() {
  const regionData = [
    { name: "North", turnout: 72 },
    { name: "South", turnout: 64 },
    { name: "East", turnout: 78 },
    { name: "West", turnout: 69 },
    { name: "Central", turnout: 74 },
  ];

  const timeData = [
    { month: "Jan", voters: 15000 },
    { month: "Feb", voters: 20000 },
    { month: "Mar", voters: 25000 },
    { month: "Apr", voters: 27000 },
    { month: "May", voters: 30000 },
    { month: "Jun", voters: 35000 },
  ];

  const COLORS = ["#2563EB", "#16A34A", "#F59E0B", "#DC2626", "#7C3AED"];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Data Analyst Dashboard
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Regional Voter Turnout</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={regionData}
                dataKey="turnout"
                nameKey="name"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {regionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Monthly Voter Registration Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="voters"
                stroke="#2563EB"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-gray-500 mb-2">Total Registered Voters</h3>
          <p className="text-3xl font-bold text-blue-600">1.25 M</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-gray-500 mb-2">Average Turnout</h3>
          <p className="text-3xl font-bold text-green-600">71 %</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-gray-500 mb-2">Reports Analyzed</h3>
          <p className="text-3xl font-bold text-purple-600">320</p>
        </div>
      </div>
    </div>
  );
}
