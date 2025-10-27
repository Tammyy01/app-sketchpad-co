import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Filter, Phone, Users, Gift, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [mainTab, setMainTab] = useState("analytics");
  const [activeTab, setActiveTab] = useState("events");
  const [reimbursementFilter, setReimbursementFilter] = useState("all");

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
      bgColor: "bg-[#F7FFFB]",
      iconColor: "#343434",
    },
    {
      icon: "phone",
      label: "Calls",
      value: "8",
      subtitle: "Booked",
      bgColor: "bg-[#FFFDF4]",
      iconColor: "#F59E0B",
    },
    {
      icon: "user",
      label: "Contacts",
      value: "26",
      subtitle: "Shared",
      bgColor: "bg-[#F2F5FF]",
      iconColor: "#3B82F6",
    },
    {
      icon: "gift",
      label: "Total Rewards",
      value: "$3,500",
      subtitle: "Earned",
      bgColor: "bg-[#FFF2F2]",
      iconColor: "#EF4444",
    },
  ];

  const reimbursementData = [
    {
      id: 1,
      event: "Silicon Beach Innovation Hub",
      date: "12 August, 2025",
      expenseType: "Ticket",
      amount: "$50",
      status: "Pending",
    },
    {
      id: 2,
      event: "Silicon Beach Innovation Hub",
      date: "12 August, 2025",
      expenseType: "Ticket",
      amount: "$50",
      status: "Paid",
    },
    {
      id: 3,
      event: "Silicon Beach Innovation Hub",
      date: "12 August, 2025",
      expenseType: "Ticket",
      amount: "$50",
      status: "Approved",
    },
  ];

  const filteredReimbursements = reimbursementData.filter((item) => {
    if (reimbursementFilter === "all") return true;
    return item.status.toLowerCase() === reimbursementFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-purple-600";
      case "Paid":
        return "text-[#419A6B]";
      case "Approved":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] px-6 pb-10">
      {/* Header */}
      <div className="pt-16 max-w-full mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="w-[37px] h-[37px] rounded-[10px] mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-300">
          <button
            onClick={() => setMainTab("analytics")}
            className={`flex-1 pb-2 text-base font-semibold text-center ${
              mainTab === "analytics"
                ? "text-[#419A6B] border-b-2 border-[#419A6B]"
                : "text-gray-500 border-b-2 border-gray-300"
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setMainTab("reimbursement")}
            className={`flex-1 pb-2 text-base font-medium text-center ${
              mainTab === "reimbursement"
                ? "text-[#419A6B] border-b-2 border-[#419A6B]"
                : "text-gray-500 border-b-2 border-gray-300"
            }`}
          >
            Reimbursement
          </button>
        </div>
      </div>

      {mainTab === "analytics" ? (
        <div className="max-w-full mx-auto mt-6 space-y-5">
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
                      ? "bg-[#419A6B] text-white"
                      : "bg-white/90 text-gray-600"
                  }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <button className="flex items-center justify-center">
                <Filter className="w-5 h-5" style={{ color: "#717171" }} />
              </button>
            </div>

            {/* Chart Card */}
            <Card className="bg-white/90 backdrop-blur border-0 shadow-sm p-6 rounded-3xl">
              <ChartContainer config={chartConfig} className="h-[240px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
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
                      fill="#419A6B"
                      radius={[8, 8, 0, 0]}
                      maxBarSize={45}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </Card>

            <p className="w-[302px] text-[14px] text-gray-400 mt-4">
              Your performance between Aug 01, 2025 and Aug 31, 2025
            </p>
          </div>

          {/* Stats Cards */}
          <div className="space-y-3 flex flex-col items-center">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`${stat.bgColor} backdrop-blur border-0 w-[348px] h-[50px] flex items-center justify-between rounded-2xl px-4`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
                    {stat.icon === "circle" && (
                      <MapPin className="w-5 h-5" style={{ color: stat.iconColor }} />
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
                <div className="flex items-baseline gap-1">
                  <span className="text-[18px] font-bold text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-[14px] text-gray-400">{stat.subtitle}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-full mx-auto mt-6 space-y-5 pb-20 animate-fade-in">
          {/* Summary Card */}
          <Card className="bg-[#419A6B] border-0 rounded-3xl p-6 text-white animate-scale-in">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-90">Total Submitted:</span>
                <span className="text-2xl font-bold">$300</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium opacity-90">Total Approved:</div>
                  <div className="text-2xl font-bold">$250</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium opacity-90">Paid Out:</div>
                  <div className="text-2xl font-bold">$200</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Filter Tabs */}
          <div className="flex gap-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {["all", "pending", "approved", "paid"].map((filter, index) => (
              <button
                key={filter}
                onClick={() => setReimbursementFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200 hover:scale-105 ${
                  reimbursementFilter === filter
                    ? "bg-[#419A6B] text-white"
                    : "bg-white/90 text-gray-600"
                }`}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Reimbursement List */}
          <div className="space-y-4">
            {filteredReimbursements.map((item, index) => (
              <Card 
                key={item.id} 
                onClick={() => navigate('/home/reimbursement-details', { state: item })}
                className="bg-white/90 backdrop-blur border-0 rounded-2xl p-5 cursor-pointer animate-fade-in hover:scale-[1.02] transition-transform duration-200"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Event:</span>
                    <span className="text-sm font-medium text-gray-900 text-right max-w-[200px]">
                      {item.event}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Date:</span>
                    <span className="text-sm text-gray-900">{item.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Expense Type:</span>
                    <span className="text-sm text-gray-900">{item.expenseType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Amount:</span>
                    <span className="text-sm font-semibold text-gray-900">{item.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Status:</span>
                    <span className={`text-sm font-semibold ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Floating Add Button */}
          <button 
            onClick={() => navigate('/home/request-reimbursement')}
            className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-[#419A6B] text-white flex items-center justify-center shadow-lg z-50 animate-scale-in hover:scale-110 transition-transform duration-200" 
            style={{ animationDelay: '0.4s' }}
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Analytics;
