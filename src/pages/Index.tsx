import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";
import avatar1 from "@/assets/avatar1.png";

const Index = () => {
  const navigate = useNavigate();
  const userProfileUrl = "https://myapp.com/profile/user123";
  
  // Check if ambassador application is complete
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  useEffect(() => {
    const videoCompleted = localStorage.getItem("videoCompleted") === "true";
    const phoneCompleted = localStorage.getItem("phoneCompleted") === "true";
    const emailCompleted = localStorage.getItem("emailCompleted") === "true";
    
    setIsProfileComplete(videoCompleted && phoneCompleted && emailCompleted);
  }, []);

  if (!isProfileComplete) {
    // Show "No QR Yet" state for ambassador applicants
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-transparent">
          <button className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 pb-24">
          <div className="w-full max-w-sm text-center space-y-6">
            {/* QR Illustration */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl bg-white/80 shadow-lg flex items-center justify-center transform -rotate-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl opacity-20"></div>
                </div>
                <div className="absolute -right-8 top-8 w-24 h-24 rounded-2xl bg-white/80 shadow-lg flex items-center justify-center transform rotate-12">
                  <div className="w-16 h-16 grid grid-cols-3 gap-1 p-2">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-gray-300 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-foreground">No QR Yet</h1>
              <p className="text-muted-foreground text-base leading-relaxed px-4">
                Complete your profile to generate your unique Punch QR code to share at events and connect founders instantly
              </p>
            </div>

            {/* Complete Profile Button */}
            <Button
              onClick={() => navigate("/apply")}
              className="w-full max-w-xs h-14 rounded-full bg-foreground text-background hover:bg-foreground/90 text-base font-medium mt-8"
            >
              Complete Profile
            </Button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>
    );
  }

  // Show QR code for completed profiles
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-24">
        <div className="w-full max-w-sm">
          {/* QR Code Container */}
          <div className="bg-white rounded-[32px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <div className="relative">
              {/* QR Code */}
              <QRCode
                value={userProfileUrl}
                size={346}
                className="w-full h-auto"
                level="H"
              />
              
              {/* Profile Photo Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={avatar1} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
