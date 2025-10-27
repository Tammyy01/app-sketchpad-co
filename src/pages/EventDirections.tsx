import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Car, Bike, Bus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EventDirections = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const eventLocation = location.state?.eventLocation || "Los Angeles, CA 90291";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with Location */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="flex items-start gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white shadow-md flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-gray-900" />
          </Button>
          
          <Card className="flex-1 bg-white border-0 shadow-md p-3 rounded-xl">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500">Your approximate location</p>
                <p className="text-sm font-medium text-gray-900 truncate">{eventLocation}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Transportation Options */}
        <div className="mt-3 flex gap-2 px-12">
          <Button className="h-9 px-3 rounded-full bg-[#419A6B] hover:bg-[#3a8a5e] text-white text-sm font-medium flex items-center gap-1.5">
            <Car className="w-4 h-4" />
            6 min
          </Button>
          <Button variant="outline" className="h-9 px-3 rounded-full bg-white border-gray-200 text-gray-700 text-sm font-medium flex items-center gap-1.5">
            <Bike className="w-4 h-4" />
            5 min
          </Button>
          <Button variant="outline" className="h-9 px-3 rounded-full bg-white border-gray-200 text-gray-700 text-sm font-medium flex items-center gap-1.5">
            <Bus className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="h-9 px-3 rounded-full bg-white border-gray-200 text-gray-700 text-sm font-medium flex items-center gap-1.5">
            <User className="w-4 h-4" />
            14 min
          </Button>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative bg-gray-200">
        {/* Placeholder for map - you can integrate Google Maps, Mapbox, etc. */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-100 to-green-50">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#419A6B]/20 flex items-center justify-center">
              <Car className="w-8 h-8 text-[#419A6B]" />
            </div>
            <p className="text-sm text-gray-600">Map Integration Ready</p>
          </div>
        </div>
      </div>

      {/* Bottom Info Card */}
      <div className="bg-white rounded-t-3xl shadow-2xl p-6 pb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-1">6 min (1.7 km)</h3>
        <p className="text-sm text-gray-600 mb-6">{eventLocation}</p>

        {/* App Prompt */}
        <div className="flex flex-col items-center mb-6 py-4">
          <div className="w-16 h-20 mb-3 relative">
            <div className="absolute inset-0 border-2 border-gray-300 rounded-lg" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 rounded-full bg-gray-300" />
              <div className="w-0.5 h-3 bg-gray-300 mx-auto mt-1" />
            </div>
          </div>
          <p className="text-xs text-center text-gray-600 max-w-[280px]">
            Switch to the app for live traffic and turn-by-turn directions
          </p>
        </div>

        {/* Start Button */}
        <Button
          className="w-full h-14 bg-[#419A6B] hover:bg-[#3a8a5e] text-white rounded-full text-base font-semibold flex items-center justify-center gap-2 shadow-lg"
        >
          <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
            <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
          </div>
          Start
        </Button>
      </div>
    </div>
  );
};

export default EventDirections;
