import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Clock, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import heroImage from "@/assets/tech-expo-hero.png";

const EventRegistrationConfirm = () => {
  const navigate = useNavigate();

  const handleAddToCalendar = () => {
    // Handle adding to calendar
    console.log("Add to calendar clicked");
  };

  const handleCancelRegistration = () => {
    // Handle cancel registration
    console.log("Cancel registration clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))]">
      {/* Hero Section with Header */}
      <div className="relative h-[280px]">
        <img
          src={heroImage}
          alt="Tech Impact Expo"
          className="w-full h-full object-cover object-top"
        />
        
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 pt-safe px-4" style={{ paddingTop: 'max(env(safe-area-inset-top), 1.5rem)' }}>
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center mt-2"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 pb-8">
        {/* Event Title */}
        <h2 className="text-2xl font-semibold mt-6 mb-4">Tech Impact Expo</h2>

        {/* Date/Time Card */}
        <div className="bg-white rounded-lg p-4 mb-3 flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Calendar className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <p className="text-base font-medium text-gray-900">4th of September, 2025</p>
            <p className="text-sm text-gray-500">Tuesday, 4:00PM</p>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-white rounded-lg p-4 mb-6 flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <p className="text-base font-medium text-gray-900">1234 Venice Blvd</p>
            <p className="text-sm text-gray-500">Los Angeles, CA 90291</p>
          </div>
        </div>

        {/* About Event Card */}
        <div className="bg-white rounded-lg p-4 mb-6">
          <h3 className="text-xl font-semibold mb-3">About Event</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            A comprehensive event on technology forecasting and its impact on our world
          </p>
        </div>

        {/* Add to Calendar Button and Menu */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="flex-1 h-11 rounded-lg border-gray-300"
            onClick={handleAddToCalendar}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Add to Calendar
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-lg border-gray-300"
              >
                <MoreVertical className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem
                onClick={handleCancelRegistration}
                className="text-destructive focus:text-destructive cursor-pointer"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                Cancel Registration
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default EventRegistrationConfirm;
