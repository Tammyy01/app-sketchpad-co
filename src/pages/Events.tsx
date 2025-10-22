import { useState } from "react";
import { Bell } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin } from "lucide-react";

const Events = () => {
  const [activeTab, setActiveTab] = useState("find");

  const tabs = [
    { id: "find", label: "Find events" },
    { id: "going", label: "You're going" },
    { id: "past", label: "Past events" },
  ];

  const events = [
    {
      id: 1,
      title: "Tech Impact Expo",
      date: "04/Sep/2025",
      time: "4:00PM",
      description: "A comprehensive event on technology forecasting and its impact on our world",
      location: "1234 Venice Blvd, Los Angeles, CA 90291",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] px-[10px] pb-32">
      {/* Header */}
      <div className="pt-6 max-w-full mx-auto">
        <h1 className="text-xl font-semibold text-center mt-[40px]">Events</h1>
        
        <div className="flex items-center justify-between mt-[10px] mb-6">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <button className="w-10 h-10 flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </button>
        </div>

        {/* Stay Connected Section */}
        <div className="mb-6 flex flex-col gap-[5px]">
          <h2 className="text-2xl font-medium">Stay connected</h2>
          <p className="text-muted-foreground">
            Find the amazing tech events near you
          </p>
        </div>

        {/* Tabs */}
        <div className="w-[277px] flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-[86px] h-[27px] rounded-full text-xs font-normal transition-colors ${
                activeTab === tab.id
                  ? "bg-[#343434] text-white"
                  : "bg-white/90 text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Event Cards */}
      <div className="py-6">
        {events.map((event) => (
          <div key={event.id}>
            {/* Main Event Card with 10px padding */}
            <div className="w-[347px] h-[542px] bg-[#FFFFFF] rounded-[6px] p-[10px]">
              {/* Interest Notification Card */}
              <div className="w-[327px] h-[32px] bg-[#F6FEF9] rounded-[4px] flex items-center justify-center">
                <p className="text-sm text-center">You have shown interest to attend this event</p>
              </div>

              {/* Gap */}
              <div className="h-[15px]" />

              {/* Event Image */}
              <div className="w-[326px] h-[278px] rounded-[6px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="mt-5 space-y-4">
                {/* Title, Date and Time in one line */}
                <div className="flex items-center gap-3">
                  <h3 className="w-[144px] text-[18px] font-medium whitespace-nowrap" style={{ color: '#419A6B' }}>
                    {event.title}
                  </h3>
                  <div className="w-[144px] flex items-center gap-2 text-[10px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-[14px] h-[14px]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="h-[14px] w-px bg-border" />
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-[14px] h-[14px]" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {/* Location */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="brand" className="flex-1 rounded-full h-12 font-medium">
                    Yes, I'm going
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-full h-12 font-medium"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-brand-green" />
          <div className="w-2 h-2 rounded-full bg-muted" />
          <div className="w-2 h-2 rounded-full bg-muted" />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Events;
