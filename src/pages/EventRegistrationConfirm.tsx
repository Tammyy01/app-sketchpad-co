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
      {/* Header */}
      <div className="pt-safe px-4" style={{ paddingTop: 'max(env(safe-area-inset-top), 1.5rem)' }}>
        <div className="flex items-center py-4">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Event Card */}
      <div className="px-4 pb-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* Event Poster */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Tech Impact Expo"
              className="w-full h-[280px] object-cover object-top"
            />
          </div>

          {/* Event Details */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-3">Tech Impact Expo</h2>

            {/* Date and Time */}
            <div className="flex items-center gap-2 mb-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">04/Sep/2025</span>
              <Clock className="w-4 h-4 ml-2" />
              <span className="text-sm">4:00PM</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              A comprehensive event on technology forecasting and its impact on our world
            </p>

            {/* Location */}
            <div className="flex items-start gap-2 mb-4 text-gray-600">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="text-sm">1234 Venice Blvd, Los Angeles, CA 90291</span>
            </div>

            {/* Add to Calendar Button and Menu */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="flex-1 h-11 rounded-lg border-gray-300"
                onClick={handleAddToCalendar}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Add to Calender
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
      </div>
    </div>
  );
};

export default EventRegistrationConfirm;
