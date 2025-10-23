import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tech-expo-hero.png";

const EventDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))]">
      {/* Hero Section with Header */}
      <div className="relative h-[280px]">
        <img
          src={heroImage}
          alt="Tech Impact Expo"
          className="w-full h-full object-cover"
        />
        
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 right-0 pt-6 px-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <h1 className="flex-1 text-xl font-semibold text-center text-white mr-10">
              TECH IMPACT EXPO
            </h1>
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

        {/* About Event Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">About Event</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            A comprehensive event on technology forecasting and its impact on our world, A comprehensive event on technology forecasting and its impact on our worldforecasting and its impact on our world
          </p>
        </div>

        {/* Confirm Registration Button */}
        <Button 
          variant="brand" 
          className="w-full h-14 rounded-full text-base font-medium"
          onClick={() => {
            // Handle registration confirmation
            navigate(-1);
          }}
        >
          Confirm Registration
        </Button>
      </div>
    </div>
  );
};

export default EventDetails;
