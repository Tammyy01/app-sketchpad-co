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
              padding: '16px 16px 16px 16px'
            }}
          >
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-gray-400 text-[14px] font-[400]">Total Earning</p>
                <div className="flex items-center gap-2">
                  <h2 className="text-white text-[30px] font-[400]">$17,100</h2>
                  <Eye className="w-[13.33px] h-[10.67px] text-white" />
                </div>
              </div>
              <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[27px]">
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
              className="relative flex border-gray-200 rounded-full p-1"
              style={{ width: '160px', height: '37px', backgroundColor: '#F9F9F9' }}
            >
              {/* Sliding background indicator */}
              <div 
                className="absolute top-1 bottom-1 bg-[#343434] rounded-full transition-all duration-300 ease-in-out"
                style={{
                  width: 'calc(33.333% - 4px)',
                  left: `calc(${tabs.findIndex(t => t.id === activeTab) * 33.333}% + 4px)`,
                }}
              />
              
              {/* Tab buttons */}
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative z-10 flex-1 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="text-[20px] font-[500] text-gray-900">$150</div>
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
        <Card className="bg-white/90 backdrop-blur border-0 shadow-sm rounded-[15px] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Your progress</p>
              <p className="text-base font-semibold text-gray-900">
                55% to complete
              </p>
            </div>
            <button className="text-sm text-gray-500">Learn More..</button>
          </div>

          {/* Progress Bar with Badges */}
          <div className="flex justify-center">
            <div className="relative" style={{ width: '327px' }}>
              <Progress 
                value={50} 
                className="h-[25px]" 
                indicatorColor="#343434"
                backgroundColor="#E0E0E0"
              />
              
              {/* Badges positioned along the progress bar */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2">
                {/* Badge 1 */}
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_2494_4485)">
                    <mask id="path-1-inside-1_2494_4485" fill="white">
                      <path d="M1.05078 2.31519C1.05078 1.42325 1.77384 0.700195 2.66578 0.700195L11.3358 0.700196C12.2277 0.700196 12.9508 1.42326 12.9508 2.3152V7.6302C12.9508 10.7616 10.1741 13.3002 7.00078 13.3002C3.82745 13.3002 1.05078 10.7616 1.05078 7.6302V2.31519Z"/>
                    </mask>
                    <path d="M1.05078 2.31519C1.05078 1.42325 1.77384 0.700195 2.66578 0.700195L11.3358 0.700196C12.2277 0.700196 12.9508 1.42326 12.9508 2.3152V7.6302C12.9508 10.7616 10.1741 13.3002 7.00078 13.3002C3.82745 13.3002 1.05078 10.7616 1.05078 7.6302V2.31519Z" fill="url(#paint0_linear_2494_4485)"/>
                    <path d="M2.66578 0.700195V2.4002V0.700195ZM11.3358 0.700196V2.4002V0.700196ZM12.9508 2.3152H11.2508V7.6302H12.9508H14.6508V2.3152H12.9508ZM1.05078 7.6302H2.75078V2.31519H1.05078H-0.649219V7.6302H1.05078ZM7.00078 13.3002V11.6002C4.66681 11.6002 2.75078 9.72624 2.75078 7.6302H1.05078H-0.649219C-0.649219 11.7971 2.98809 15.0002 7.00078 15.0002V13.3002ZM12.9508 7.6302H11.2508C11.2508 9.72624 9.33476 11.6002 7.00078 11.6002V13.3002V15.0002C11.0135 15.0002 14.6508 11.7971 14.6508 7.6302H12.9508ZM2.66578 0.700195V2.4002L11.3358 2.4002V0.700196V-0.999804L2.66578 -0.999805L2.66578 0.700195ZM1.05078 2.31519H2.75078C2.75078 2.36214 2.71272 2.4002 2.66578 2.4002V0.700195L2.66578 -0.999805C0.834959 -0.999805 -0.649219 0.484369 -0.649219 2.31519H1.05078ZM12.9508 2.3152H14.6508C14.6508 0.484371 13.1666 -0.999804 11.3358 -0.999804V0.700196V2.4002C11.2888 2.4002 11.2508 2.36214 11.2508 2.3152H12.9508Z" fill="white" fillOpacity="0.4" mask="url(#path-1-inside-1_2494_4485)"/>
                  </g>
                  <path d="M6.24215 3.68161C6.34985 3.47267 6.64859 3.47267 6.75629 3.68161L7.44049 5.00907C7.46805 5.06253 7.51159 5.10608 7.56506 5.13363L8.89251 5.81784C9.10145 5.92553 9.10145 6.22428 8.89251 6.33197L7.56506 7.01617C7.51159 7.04373 7.46805 7.08727 7.44049 7.14074L6.75629 8.4682C6.64859 8.67714 6.34985 8.67714 6.24215 8.4682L5.55795 7.14074C5.53039 7.08727 5.48685 7.04373 5.43338 7.01617L4.10592 6.33197C3.89698 6.22428 3.89698 5.92553 4.10592 5.81784L5.43338 5.13363C5.48685 5.10608 5.53039 5.06253 5.55795 5.00906L6.24215 3.68161Z" fill="white"/>
                  <path d="M5.91992 3.396C6.2011 3.00126 6.79808 3.00108 7.0791 3.396L7.13379 3.48682L7.79883 4.77588L9.08691 5.43994C9.6029 5.7059 9.60291 6.44352 9.08691 6.70947L7.79785 7.37354L7.13379 8.6626C6.86784 9.17859 6.13021 9.17859 5.86426 8.6626L5.2002 7.37451L3.91113 6.70947C3.39532 6.44345 3.39521 5.70587 3.91113 5.43994L5.2002 4.77588L5.86426 3.48682L5.91992 3.396Z" stroke="black" strokeOpacity="0.16" strokeWidth="0.85"/>
                  <path d="M13.3359 0.823242C14.3853 0.823242 15.2363 1.67429 15.2363 2.72363V4.72949L5.06934 14.8955C3.54046 14.1353 2.31035 12.852 1.68555 11.292L12.1543 0.823242H13.3359Z" fill="white" fillOpacity="0.32"/>
                  <defs>
                    <filter id="filter0_d_2494_4485" x="1.05078" y="0.700195" width="11.9004" height="13.4076" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="0.8075"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.24 0 0 0 0 0.118652 0 0 0 0 0 0 0 0 1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2494_4485"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2494_4485" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_2494_4485" x1="7.00071" y1="15.8416" x2="7.00071" y2="0.857703" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8C4500"/>
                      <stop offset="1" stopColor="#D1A66E"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Badge 2 */}
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_2494_4491)">
                    <path d="M8.7983 13.2551C7.80513 14.2483 6.19487 14.2483 5.2017 13.2551L0.744882 8.7983C-0.248294 7.80513 -0.248294 6.19487 0.744882 5.2017L5.2017 0.744882C6.19487 -0.248294 7.80513 -0.248294 8.7983 0.744882L13.2551 5.2017C14.2483 6.19487 14.2483 7.80513 13.2551 8.7983L8.7983 13.2551Z" fill="url(#paint0_linear_2494_4491)"/>
                    <path d="M5.90918 1.45215C6.5118 0.849642 7.4882 0.849642 8.09082 1.45215L12.5479 5.90918C13.1504 6.5118 13.1504 7.4882 12.5479 8.09082L8.09082 12.5479C7.4882 13.1504 6.5118 13.1504 5.90918 12.5479L1.45215 8.09082C0.849642 7.4882 0.849642 6.5118 1.45215 5.90918L5.90918 1.45215Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
                  </g>
                  <path d="M6.69757 4.38456C6.82427 4.13874 7.17573 4.13874 7.30243 4.38456L8.10738 5.94627C8.1398 6.00917 8.19102 6.0604 8.25393 6.09282L9.81564 6.89776C10.0615 7.02446 10.0615 7.37593 9.81564 7.50263L8.25393 8.30757C8.19102 8.33999 8.1398 8.39122 8.10738 8.45412L7.30243 10.0158C7.17573 10.2616 6.82427 10.2616 6.69757 10.0158L5.89262 8.45412C5.8602 8.39122 5.80898 8.33999 5.74607 8.30757L4.18436 7.50263C3.93855 7.37593 3.93855 7.02446 4.18436 6.89776L5.74607 6.09282C5.80898 6.0604 5.8602 6.00917 5.89262 5.94627L6.69757 4.38456Z" fill="white"/>
                  <path d="M6.31836 4.04883C6.64906 3.58422 7.35094 3.58422 7.68164 4.04883L7.74707 4.15527L8.52832 5.6709L10.0449 6.45312C10.6519 6.76603 10.6519 7.63436 10.0449 7.94727L8.52832 8.72852L7.74707 10.2451C7.43416 10.8521 6.56584 10.8521 6.25293 10.2451L5.4707 8.72852L3.95508 7.94727C3.34814 7.63436 3.34814 6.76603 3.95508 6.45312L5.4707 5.6709L6.25293 4.15527L6.31836 4.04883Z" stroke="black" strokeOpacity="0.16"/>
                  <path d="M12.5117 4.4585L4.45801 12.5122L1.48828 9.5415L9.54102 1.48877L12.5117 4.4585Z" fill="url(#paint3_linear_2494_4491)" fillOpacity="0.32"/>
                  <defs>
                    <filter id="filter0_d_2494_4491" x="0" y="0" width="14" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="1"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.117138 0 0 0 0 0.176258 0 0 0 0 0.202862 0 0 0 1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2494_4491"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2494_4491" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_2494_4491" x1="6.99997" y1="15.0534" x2="6.99997" y2="-1.0534" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8AA8B5"/>
                      <stop offset="1" stopColor="#DCE5E8"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_2494_4491" x1="10.8924" y1="0.449406" x2="0.115427" y2="12.9976" gradientUnits="userSpaceOnUse">
                      <stop offset="0.125287" stopColor="white" stopOpacity="0"/>
                      <stop offset="0.195" stopColor="white"/>
                      <stop offset="0.375692" stopColor="white"/>
                      <stop offset="0.495" stopColor="white"/>
                      <stop offset="0.929467" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Badge 3 */}
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_2494_4497)">
                    <path d="M8.45938 13.1608C7.58894 13.8132 6.41028 13.8132 5.53984 13.1608L1.37352 10.0379C0.503078 9.38549 0.138853 8.22903 0.47133 7.17337L2.06273 2.12049C2.3952 1.06483 3.34876 0.350098 4.42468 0.350098H9.57454C10.6505 0.350098 11.604 1.06483 11.9365 2.12049L13.5279 7.17337C13.8604 8.22903 13.4961 9.38549 12.6257 10.0379L8.45938 13.1608Z" fill="url(#paint0_linear_2494_4497)"/>
                    <path d="M4.4248 1.3501H9.57422C10.1964 1.3501 10.7758 1.76498 10.9824 2.42041L12.5742 7.47412C12.782 8.13433 12.5489 8.84592 12.0264 9.23779L7.85938 12.3608C7.34447 12.7466 6.65452 12.7467 6.13965 12.3608L1.97363 9.23779C1.45089 8.84597 1.21703 8.13443 1.4248 7.47412L3.0166 2.42041C3.22325 1.76495 3.80262 1.3501 4.4248 1.3501Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
                  </g>
                  <path d="M6.69757 3.98416C6.82427 3.73835 7.17573 3.73835 7.30243 3.98416L8.10738 5.54588C8.1398 5.60878 8.19102 5.66001 8.25393 5.69243L9.81564 6.49737C10.0615 6.62407 10.0615 6.97554 9.81564 7.10224L8.25393 7.90718C8.19102 7.9396 8.1398 7.99083 8.10738 8.05373L7.30243 9.61544C7.17573 9.86126 6.82427 9.86126 6.69757 9.61544L5.89262 8.05373C5.8602 7.99083 5.80898 7.9396 5.74607 7.90718L4.18436 7.10224C3.93855 6.97554 3.93855 6.62407 4.18436 6.49737L5.74607 5.69243C5.80898 5.66001 5.8602 5.60878 5.89262 5.54588L6.69757 3.98416Z" fill="white"/>
                  <path d="M6.31836 3.64844C6.64906 3.18382 7.35094 3.18383 7.68164 3.64844L7.74707 3.75488L8.52832 5.27051L10.0449 6.05273C10.6519 6.36564 10.6519 7.23397 10.0449 7.54688L8.52832 8.32812L7.74707 9.84473C7.43416 10.4517 6.56584 10.4517 6.25293 9.84473L5.4707 8.32812L3.95508 7.54688C3.34814 7.23397 3.34814 6.36564 3.95508 6.05273L5.4707 5.27051L6.25293 3.75488L6.31836 3.64844Z" stroke="black" strokeOpacity="0.16"/>
                  <path d="M10.9043 0.75C11.3813 1.06206 11.7542 1.53845 11.9375 2.12012L12.7842 4.80859L4.90723 12.6855L1.51367 10.1406L10.9043 0.75Z" fill="white" fillOpacity="0.32"/>
                  <defs>
                    <filter id="filter0_d_2494_4497" x="0.349609" y="0.350098" width="13.3008" height="14.2998" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="1"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.300741 0 0 0 0 0.171852 0 0 0 0 0.0192593 0 0 0 1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2494_4497"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2494_4497" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_2494_4497" x1="6.99978" y1="14.2549" x2="6.99978" y2="-1.1179" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F07E00"/>
                      <stop offset="1" stopColor="#F7F4CF"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Badge 4 */}
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_2494_4503)">
                    <path d="M8.21165 13.6704C7.4614 14.1099 6.53704 14.1099 5.78678 13.6704L1.91165 11.4005C1.1614 10.961 0.699219 10.1488 0.699219 9.2699V4.7301C0.699219 3.85116 1.1614 3.03898 1.91165 2.59951L5.78678 0.329604C6.53704 -0.109868 7.4614 -0.109868 8.21165 0.329604L12.0868 2.59951C12.837 3.03898 13.2992 3.85116 13.2992 4.7301V9.2699C13.2992 10.1488 12.837 10.961 12.0868 11.4005L8.21165 13.6704Z" fill="url(#paint0_linear_2494_4503)"/>
                    <path d="M6.29199 1.19238C6.73005 0.935788 7.26798 0.935851 7.70605 1.19238L11.5811 3.46191C12.0209 3.71955 12.2988 4.20177 12.2988 4.73047V9.26953C12.2988 9.79823 12.0209 10.2805 11.5811 10.5381L7.70605 12.8076C7.26798 13.0641 6.73005 13.0642 6.29199 12.8076L2.41699 10.5381C1.97717 10.2805 1.69922 9.79823 1.69922 9.26953V4.73047C1.69922 4.20177 1.97717 3.71955 2.41699 3.46191L6.29199 1.19238Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
                  </g>
                  <path d="M6.69757 4.38456C6.82427 4.13874 7.17573 4.13874 7.30243 4.38456L8.10738 5.94627C8.1398 6.00917 8.19102 6.0604 8.25393 6.09282L9.81564 6.89776C10.0615 7.02446 10.0615 7.37593 9.81564 7.50263L8.25393 8.30757C8.19102 8.33999 8.1398 8.39122 8.10738 8.45412L7.30243 10.0158C7.17573 10.2616 6.82427 10.2616 6.69757 10.0158L5.89262 8.45412C5.8602 8.39122 5.80898 8.33999 5.74607 8.30757L4.18436 7.50263C3.93855 7.37593 3.93855 7.02446 4.18436 6.89776L5.74607 6.09282C5.80898 6.0604 5.8602 6.00917 5.89262 5.94627L6.69757 4.38456Z" fill="white"/>
                  <path d="M6.31836 4.04883C6.64906 3.58422 7.35094 3.58422 7.68164 4.04883L7.74707 4.15527L8.52832 5.6709L10.0449 6.45312C10.6519 6.76603 10.6519 7.63436 10.0449 7.94727L8.52832 8.72852L7.74707 10.2451C7.43416 10.8521 6.56584 10.8521 6.25293 10.2451L5.4707 8.72852L3.95508 7.94727C3.34814 7.63436 3.34814 6.76603 3.95508 6.45312L5.4707 5.6709L6.25293 4.15527L6.31836 4.04883Z" stroke="black" strokeOpacity="0.16"/>
                  <path d="M12.0879 2.59912C12.5728 2.88314 12.9356 3.32366 13.1328 3.83643L4.21875 12.7505L1.91309 11.3999C1.428 11.1158 1.06436 10.6757 0.867188 10.1626L9.78125 1.24951L12.0879 2.59912Z" fill="white" fillOpacity="0.32"/>
                  <defs>
                    <filter id="filter0_d_2494_4503" x="0.699219" y="0" width="12.5996" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="1"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0201802 0 0 0 0 0.16 0 0 0 0 0.29982 0 0 0 1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2494_4503"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2494_4503" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_2494_4503" x1="6.99938" y1="14.3806" x2="6.99938" y2="-0.380602" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0078F0"/>
                      <stop offset="1" stopColor="#CFE3F7"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Badge 5 */}
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_2494_4509)">
                    <path d="M5.37546 0.883715C5.97185 0.591791 6.27005 0.445829 6.58187 0.388313C6.85811 0.337359 7.14111 0.337359 7.41735 0.388313C7.72917 0.445829 8.02737 0.591791 8.62376 0.883715L10.8629 1.97972C11.4592 2.27164 11.7574 2.41761 11.9961 2.62954C12.2075 2.81729 12.384 3.04219 12.517 3.29348C12.6672 3.57714 12.7408 3.90511 12.8881 4.56106L13.4412 7.02376C13.5884 7.67971 13.6621 8.00768 13.6479 8.32947C13.6353 8.61455 13.5723 8.89499 13.462 9.15739C13.3374 9.45359 13.1311 9.7166 12.7183 10.2426L11.1688 12.2176C10.7561 12.7436 10.5498 13.0066 10.2934 13.1959C10.0662 13.3637 9.81126 13.4885 9.54062 13.5644C9.23513 13.6501 8.90416 13.6501 8.24222 13.6501H5.757C5.09506 13.6501 4.76409 13.6501 4.45859 13.5644C4.18796 13.4885 3.93298 13.3637 3.70585 13.1959C3.44946 13.0066 3.2431 12.7436 2.83039 12.2176L1.28088 10.2426C0.868168 9.7166 0.66181 9.45359 0.537255 9.15739C0.426913 8.89499 0.363938 8.61455 0.351343 8.32947C0.337124 8.00768 0.410772 7.67971 0.558068 7.02376L1.11108 4.56106C1.25838 3.90511 1.33203 3.57714 1.4822 3.29348C1.61524 3.04219 1.79169 2.81729 2.00312 2.62954C2.24178 2.41761 2.53997 2.27164 3.13636 1.97972L5.37546 0.883715Z" fill="url(#paint0_linear_2494_4509)"/>
                    <path d="M6.76367 1.37158C6.91986 1.34283 7.08015 1.34277 7.23633 1.37158C7.38138 1.39839 7.53772 1.46512 8.18457 1.78174L10.4229 2.87744C11.0693 3.19386 11.2191 3.27718 11.332 3.37744C11.4534 3.48527 11.5554 3.61514 11.6328 3.76123C11.7057 3.89883 11.7528 4.07027 11.9121 4.77979L12.4658 7.24268C12.6251 7.95202 12.6554 8.12823 12.6484 8.28564C12.641 8.45274 12.6044 8.61703 12.54 8.77002C12.4798 8.91326 12.378 9.05659 11.9316 9.62549L10.3818 11.6001C9.93462 12.1701 9.82089 12.3012 9.69922 12.3911C9.56913 12.4872 9.42391 12.559 9.27051 12.6021C9.12858 12.6418 8.96041 12.6499 8.24219 12.6499H5.75684C5.0385 12.6499 4.87047 12.6419 4.72852 12.6021C4.57513 12.559 4.42989 12.4872 4.2998 12.3911C4.17819 12.3012 4.06425 12.1699 3.61719 11.6001L2.06738 9.62549C1.62099 9.05653 1.51926 8.91328 1.45898 8.77002C1.39465 8.61702 1.35801 8.45274 1.35059 8.28564C1.34363 8.12823 1.37489 7.95202 1.53418 7.24268L2.08691 4.77979C2.24625 4.07024 2.29336 3.89883 2.36621 3.76123C2.44358 3.61515 2.5456 3.48527 2.66699 3.37744C2.77989 3.27718 2.92973 3.19386 3.57617 2.87744L5.81543 1.78174C6.4625 1.46501 6.61855 1.39835 6.76367 1.37158Z" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
                  </g>
                  <path d="M10.8633 1.97998C11.4593 2.27173 11.7575 2.41755 11.9961 2.62939C12.2075 2.8171 12.3836 3.04224 12.5166 3.29346C12.6334 3.5141 12.7039 3.76166 12.7988 4.16943L3.74609 13.2222C3.73306 13.2129 3.71891 13.2053 3.70605 13.1958C3.44967 13.0065 3.24279 12.7433 2.83008 12.2173L1.28125 10.2427C1.20166 10.1412 1.12959 10.0493 1.06445 9.96533L9.64551 1.38428L10.8633 1.97998Z" fill="white" fillOpacity="0.32"/>
                  <path d="M6.69757 4.18436C6.82427 3.93855 7.17573 3.93855 7.30243 4.18436L8.10738 5.74607C8.1398 5.80898 8.19102 5.8602 8.25393 5.89262L9.81564 6.69757C10.0615 6.82427 10.0615 7.17573 9.81564 7.30243L8.25393 8.10738C8.19102 8.1398 8.1398 8.19102 8.10738 8.25393L7.30243 9.81564C7.17573 10.0615 6.82427 10.0615 6.69757 9.81564L5.89262 8.25393C5.8602 8.19102 5.80898 8.1398 5.74607 8.10738L4.18436 7.30243C3.93855 7.17573 3.93855 6.82427 4.18436 6.69757L5.74607 5.89262C5.80898 5.8602 5.8602 5.80898 5.89262 5.74607L6.69757 4.18436Z" fill="white"/>
                  <path d="M6.31836 3.84863C6.64906 3.38402 7.35094 3.38402 7.68164 3.84863L7.74707 3.95508L8.52832 5.4707L10.0449 6.25293C10.6519 6.56584 10.6519 7.43416 10.0449 7.74707L8.52832 8.52832L7.74707 10.0449C7.43416 10.6519 6.56584 10.6519 6.25293 10.0449L5.4707 8.52832L3.95508 7.74707C3.34814 7.43416 3.34814 6.56584 3.95508 6.25293L5.4707 5.4707L6.25293 3.95508L6.31836 3.84863Z" stroke="black" strokeOpacity="0.16"/>
                  <defs>
                    <filter id="filter0_d_2494_4509" x="0.349609" y="0.350098" width="13.3008" height="14.2998" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="1"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.32 0 0 0 0 0 0 0 0 0 0.309533 0 0 0 1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2494_4509"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2494_4509" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_2494_4509" x1="6.99984" y1="0.0887002" x2="6.99984" y2="14.7642" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFC9FD"/>
                      <stop offset="1" stopColor="#FA28F3"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Badge 6 */}
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_2494_4515)">
                    <path d="M0.702562 7.58167C0.409763 5.42409 0.263363 4.34531 0.609119 3.65641C0.910709 3.05551 1.44022 2.61744 2.06615 2.45098C2.78375 2.26014 3.74491 2.66486 5.66724 3.4743L6.05378 3.63706C6.55414 3.84775 6.80432 3.95309 7.06262 3.9948C7.29167 4.03178 7.52474 4.03178 7.75378 3.9948C8.01209 3.95309 8.26227 3.84775 8.76263 3.63706L9.14917 3.4743C11.0715 2.66486 12.0327 2.26014 12.7503 2.45098C13.3762 2.61744 13.9057 3.05551 14.2073 3.65641C14.553 4.34531 14.4066 5.42409 14.1138 7.58167L13.7 10.6312C13.6212 11.2121 13.5817 11.5026 13.4823 11.7666C13.3941 12.0007 13.2715 12.2186 13.119 12.4126C12.9469 12.6313 12.7239 12.8073 12.2779 13.1595L9.59635 15.2766C8.81167 15.8961 8.41934 16.2058 7.98844 16.3252C7.6081 16.4306 7.20831 16.4306 6.82796 16.3252C6.39707 16.2058 6.00474 15.8961 5.22006 15.2766L2.53851 13.1595C2.09251 12.8073 1.86951 12.6313 1.69744 12.4126C1.54488 12.2186 1.42227 12.0007 1.33411 11.7666C1.23466 11.5026 1.19524 11.2121 1.1164 10.6312L0.702562 7.58167Z" fill="url(#paint0_linear_2494_4515)"/>
                    <path d="M12.4932 3.41699C12.8308 3.50678 13.1347 3.74926 13.3135 4.10547C13.3679 4.21421 13.429 4.44324 13.4014 5.02051C13.374 5.59209 13.272 6.34999 13.123 7.44727L12.709 10.4971C12.624 11.1229 12.5971 11.2808 12.5469 11.4141C12.4943 11.5536 12.4214 11.6816 12.333 11.7939C12.2511 11.8981 12.1409 11.9939 11.6582 12.375L8.97656 14.4922C8.57323 14.8106 8.31106 15.0162 8.09766 15.1611C7.89461 15.299 7.79111 15.342 7.72168 15.3613C7.51607 15.4183 7.30034 15.4183 7.09473 15.3613C7.0253 15.342 6.9218 15.299 6.71875 15.1611C6.50535 15.0162 6.24317 14.8106 5.83984 14.4922L3.1582 12.375C2.67555 11.9939 2.5653 11.8981 2.4834 11.7939C2.39504 11.6816 2.3221 11.5536 2.26953 11.4141C2.21934 11.2808 2.19236 11.1229 2.10742 10.4971L1.69336 7.44727C1.54445 6.34999 1.44244 5.59209 1.41504 5.02051C1.38737 4.44324 1.44848 4.2142 1.50293 4.10547C1.68171 3.74926 1.98564 3.50678 2.32324 3.41699C2.40204 3.39609 2.59714 3.37952 3.11621 3.54199C3.63008 3.70284 4.29919 3.98281 5.2793 4.39551L5.66602 4.55859C6.12155 4.75041 6.49924 4.91717 6.90332 4.98242C7.23785 5.03642 7.57856 5.03642 7.91309 4.98242C8.31717 4.91717 8.69485 4.75041 9.15039 4.55859L9.53711 4.39551C10.5172 3.98281 11.1863 3.70284 11.7002 3.54199C12.2193 3.37952 12.4144 3.39609 12.4932 3.41699Z" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeLinejoin="round"/>
                  </g>
                  <path d="M7.10577 6.58866C7.23247 6.34284 7.58394 6.34284 7.71063 6.58866L8.51558 8.15037C8.548 8.21327 8.59923 8.2645 8.66213 8.29692L10.2238 9.10187C10.4697 9.22856 10.4697 9.58003 10.2238 9.70673L8.66213 10.5117C8.59923 10.5441 8.548 10.5953 8.51558 10.6582L7.71063 12.2199C7.58394 12.4658 7.23247 12.4658 7.10577 12.2199L6.30083 10.6582C6.26841 10.5953 6.21718 10.5441 6.15428 10.5117L4.59256 9.70673C4.34675 9.58003 4.34675 9.22856 4.59256 9.10187L6.15428 8.29692C6.21718 8.2645 6.26841 8.21327 6.30083 8.15037L7.10577 6.58866Z" fill="white"/>
                  <path d="M6.72656 6.25293C7.05726 5.78832 7.75914 5.78832 8.08984 6.25293L8.15527 6.35938L8.93652 7.875L10.4531 8.65723C11.0601 8.97014 11.0601 9.83846 10.4531 10.1514L8.93652 10.9326L8.15527 12.4492C7.84236 13.0562 6.97404 13.0562 6.66113 12.4492L5.87891 10.9326L4.36328 10.1514C3.75634 9.83846 3.75634 8.97013 4.36328 8.65723L5.87891 7.875L6.66113 6.35938L6.72656 6.25293Z" stroke="black" strokeOpacity="0.16"/>
                  <path d="M16.8125 2.96973L3.30273 16.4775L0.798828 14.501C0.442758 14.2199 0.194145 14.018 0 13.8418L13.8418 0L16.8125 2.96973Z" fill="white" fillOpacity="0.32"/>
                  <defs>
                    <filter id="filter0_d_2494_4515" x="0.408203" y="2.4043" width="14" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="1"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.32 0 0 0 0 0.0326882 0 0 0 0 0 0 0 0 1 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2494_4515"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2494_4515" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_2494_4515" x1="7.40849" y1="0.677905" x2="7.40849" y2="18.6691" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF8D80"/>
                      <stop offset="1" stopColor="#FF2B14"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </Card>

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
