import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { BottomNav } from "@/components/BottomNav";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import earningsPattern from "@/assets/earnings-pattern.png";

const weeklyChartData = [
  { day: "M", value: 150 },
  { day: "T", value: 0 },
  { day: "W", value: 0 },
  { day: "T", value: 0 },
  { day: "F", value: 0 },
  { day: "S", value: 0 },
  { day: "S", value: 0 },
];

const chartConfig = {
  value: {
    label: "Earnings",
    color: "#343434",
  },
};

const earningHistory = [
  { name: "Micheal Smith", amount: 100, avatar: avatar1 },
  { name: "Steph Dave", amount: 150, avatar: avatar2 },
];

const Earnings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("week");

  const tabs = [
    { id: "day", label: "Day" },
    { id: "week", label: "Week" },
    { id: "month", label: "Month" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] px-6 pb-32">
      {/* Header */}
      <div className="pt-6 max-w-full mx-auto flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="w-[37px] h-[37px] rounded-[10px] bg-white/90 hover:bg-white mt-[40px]"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="flex-1 text-center text-xl font-semibold mt-[40px]">
          Earnings
        </h1>
        <div className="w-10" />
      </div>

      <div className="max-w-full mx-auto mt-6 space-y-5">
        {/* Main Card containing Total Earning, Tabs, and Chart */}
        <Card className="bg-white/90 backdrop-blur border-0 shadow-sm rounded-[15px] p-2 space-y-4">
          {/* Total Earning Card */}
          <div 
            className="bg-[#343434] border-0 rounded-3xl  relative overflow-hidden"
            style={{
              width: '329px',
              height: '93px',
            //   backgroundImage: `url(${earningsPattern})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#343434',
              borderRadius: '10px',
              padding: '16px 8px 16px 16px'
            }}
          >
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-gray-400 text-[14px]">Total Earning</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-white text-[30px] font-bold">$17,100</h2>
                  <Eye className="w-[13.33px] h-[10.67px] text-white" />
                </div>
              </div>
              <svg width="28.5" height="28.5" viewBox="0 0 28.5 28.5">
                <defs>
                  <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F07E00" />
                    <stop offset="100%" stopColor="#F7F4CF" />
                  </linearGradient>
                </defs>
                <polygon 
                  points="14.25,0 28.5,14.25 14.25,28.5 0,14.25" 
                  fill="url(#badgeGradient)" 
                />
              </svg>
            </div>
          </div>

          {/* Time Period Tabs and Amount */}
          <div className="flex items-center justify-between">
            <div 
              className="flex gap-2"
              style={{ width: '160px', height: '37px' }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#343434] text-white"
                      : "bg-white text-gray-600 border border-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-900">$150</div>
          </div>

          {/* Weekly Chart */}
          <ChartContainer config={chartConfig} className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyChartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 10 }}
              >
                <XAxis
                  dataKey="day"
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
        </Card>

        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Your progress</p>
              <p className="text-base font-semibold text-gray-900">
                55% to complete
              </p>
            </div>
            <button className="text-sm text-gray-500">Learn More..</button>
          </div>

          {/* Progress Bar with Emojis */}
          <div className="relative">
            <div className="bg-[#343434] rounded-full h-12 flex items-center px-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#343434] to-[#4A4A4A] rounded-full" />
              <div className="relative z-10 flex items-center justify-between w-full px-2">
                <span className="text-2xl">🏆</span>
                <span className="text-2xl">💎</span>
                <span className="text-2xl">💰</span>
              </div>
            </div>
            <div className="absolute right-4 -top-1 flex gap-2">
              <span className="text-3xl">😊</span>
              <span className="text-3xl">💜</span>
              <span className="text-3xl">❤️</span>
            </div>
          </div>
        </div>

        {/* Earning History */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-gray-900">
            Earning History
          </h3>

          {earningHistory.map((item, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur border-0 rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm font-medium text-gray-900">
                  {item.name}
                </span>
              </div>
              <span className="text-base font-bold text-gray-900">
                ${item.amount}
              </span>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Earnings;
