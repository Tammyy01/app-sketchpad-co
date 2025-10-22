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
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] px-6 pb-32">
      {/* Header */}
      <div className="pt-6 max-w-full mx-auto">
        <h1 className="text-xl font-semibold text-center mt-[40px]">Events</h1>
        
        <div className="flex items-center justify-between mt-[104px] mb-6">
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
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
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
          <div
            key={event.id}
            className="bg-white/90 backdrop-blur border-0 shadow-sm rounded-3xl overflow-hidden"
          >
            {/* Event Image */}
            <div className="w-full h-[240px] relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Details */}
            <div className="p-5 space-y-4">
              {/* Title */}
              <h3 className="text-xl font-semibold">
                {event.title}
              </h3>

              {/* Date and Time */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
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
