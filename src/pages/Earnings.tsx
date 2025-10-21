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
              <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2514_2996)">
                  <path d="M17.3781 27.4514C15.5128 28.8495 12.9871 28.8495 11.1219 27.4514L2.19408 20.7596C0.328862 19.3616 -0.451621 16.8834 0.260831 14.6213L3.67096 3.79369C4.38341 1.53157 6.42675 0 8.73229 0H19.7677C22.0733 0 24.1166 1.53157 24.829 3.7937L28.2392 14.6213C28.9516 16.8834 28.1711 19.3616 26.3059 20.7596L17.3781 27.4514Z" fill="url(#paint0_linear_2514_2996)"/>
                  <path d="M8.73242 1H19.7676C21.6194 1 23.2884 2.23177 23.875 4.09375L27.2852 14.9219C27.873 16.7887 27.2235 18.8214 25.7061 19.959L16.7783 26.6514C15.2686 27.783 13.2314 27.783 11.7217 26.6514L2.79395 19.959C1.27645 18.8214 0.62695 16.7887 1.21484 14.9219L4.625 4.09375C5.2116 2.23177 6.88059 1 8.73242 1Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
                </g>
                <defs>
                  <filter id="filter0_d_2514_2996" x="0" y="0" width="28.5" height="29.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.300741 0 0 0 0 0.171852 0 0 0 0 0.0192593 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2514_2996"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2514_2996" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear_2514_2996" x1="14.2504" y1="29.796" x2="14.2504" y2="-3.1457" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F07E00"/>
                    <stop offset="1" stopColor="#F7F4CF"/>
                  </linearGradient>
                </defs>
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
