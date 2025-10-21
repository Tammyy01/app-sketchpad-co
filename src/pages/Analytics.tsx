import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Filter, Phone, Users, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

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
    color: "#343434",
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
      iconColor: "#343434",
    },
    {
      icon: "phone",
      label: "Calls",
      value: "8",
      subtitle: "Booked",
      bgColor: "bg-yellow-50",
      iconColor: "#F59E0B",
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
    <div className="min-h-screen bg-gradient-to-b from-[#E8E4F3] via-[#F5F3F8] to-[#FAF8E8]">
      {/* Header */}
      <div className="bg-white/40 backdrop-blur-md">
        <div className="flex items-center justify-center h-16 px-6 relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-6"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Analytics</h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Monthly Progress Chart */}
        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Monthly progress chart
          </h2>

          {/* Tabs and Filter */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#343434] text-white"
                      : "bg-white text-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Filter className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Chart */}
          <Card className="bg-white border-0 shadow-sm p-6 rounded-3xl">
            <ChartContainer config={chartConfig} className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 0, left: -30, bottom: 10 }}>
                  <XAxis
                    dataKey="period"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#9CA3AF", fontSize: 13 }}
                  />
                  <YAxis hide />
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Bar
                    dataKey="value"
                    fill="#343434"
                    radius={[8, 8, 0, 0]}
                    maxBarSize={45}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>

            <p className="text-xs text-gray-400 mt-4">
              Your performance between Aug 01, 2025 and Aug 31, 2025
            </p>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="space-y-3 pb-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`${stat.bgColor} border-0 p-5 flex items-center justify-between rounded-2xl`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white"
                >
                  {stat.icon === "circle" && (
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{ backgroundColor: stat.iconColor }}
                    />
                  )}
                  {stat.icon === "phone" && (
                    <Phone className="w-5 h-5" style={{ color: stat.iconColor }} />
                  )}
                  {stat.icon === "user" && (
                    <Users className="w-5 h-5" style={{ color: stat.iconColor }} />
                  )}
                  {stat.icon === "gift" && (
                    <Gift className="w-5 h-5" style={{ color: stat.iconColor }} />
                  )}
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {stat.label}
                </span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.subtitle}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
