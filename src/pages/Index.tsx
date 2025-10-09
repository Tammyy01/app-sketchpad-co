import QRCode from "react-qr-code";
import { BottomNav } from "@/components/BottomNav";
import avatar1 from "@/assets/avatar1.png";

const Index = () => {
  // This would come from user profile data
  const userProfileUrl = "https://myapp.com/profile/user123";

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
