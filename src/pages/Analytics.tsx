import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Filter, Phone, Users, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const chartData = [
  { period: "1M", value: 12 },
  { period: "3M", value: 0 },
  { period: "6M", value: 0 },
  { period: "1Y", value: 0 },
  { period: "ALL", value: 0 },
];

const chartConfig = {
  value: {
    label: "Events",
    color: "#2B2B2B",
  },
};

const Analytics = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("events");

  const tabs = [
    { id: "events", label: "Events" },
    { id: "calls", label: "Calls" },
    { id: "rewards", label: "Rewards" },
  ];

  const stats = [
    {
      icon: "circle",
      label: "Events",
      value: "12",
      subtitle: "Attended",
      bgColor: "bg-gray-50",
      iconColor: "#2B2B2B",
    },
    {
      icon: "phone",
      label: "Calls",
      value: "8",
      subtitle: "Booked",
      bgColor: "bg-yellow-50",
      iconColor: "#EAB308",
    },
    {
      icon: "user",
      label: "Contacts",
      value: "26",
      subtitle: "Shared",
      bgColor: "bg-blue-50",
      iconColor: "#3B82F6",
    },
    {
      icon: "gift",
      label: "Total Rewards",
      value: "$3,500",
      subtitle: "Earned",
      bgColor: "bg-red-50",
      iconColor: "#EF4444",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center justify-center h-16 px-4 relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Analytics</h1>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Monthly Progress Chart */}
        <div>
          <h2 className="text-base font-medium text-gray-900 mb-4">
            Monthly progress chart
          </h2>

          {/* Tabs and Filter */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#2B2B2B] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Chart */}
          <Card className="bg-white border-0 shadow-sm p-6">
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis
                    dataKey="period"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#6B7280", fontSize: 12 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="value"
                    fill="#2B2B2B"
                    radius={[8, 8, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <p className="text-xs text-gray-500 mt-4">
              Your performance between Aug 01, 2025 and Aug 31, 2025
            </p>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="space-y-3">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`${stat.bgColor} border-0 shadow-sm p-4 flex items-center justify-between`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${stat.iconColor}20` }}
                >
                  {stat.icon === "circle" && (
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: stat.iconColor }}
                    />
                  )}
                  {stat.icon === "phone" && (
                    <Phone className="w-4 h-4" style={{ color: stat.iconColor }} />
                  )}
                  {stat.icon === "user" && (
                    <Users className="w-4 h-4" style={{ color: stat.iconColor }} />
                  )}
                  {stat.icon === "gift" && (
                    <Gift className="w-4 h-4" style={{ color: stat.iconColor }} />
                  )}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {stat.label}
                </span>
              </div>
              <div className="text-right">
                <div className="text-xl font-semibold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.subtitle}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
