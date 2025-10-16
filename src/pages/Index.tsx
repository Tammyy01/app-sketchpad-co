import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserCircle, Bell } from "lucide-react";
import QRCode from "react-qr-code";
import { BottomNav } from "@/components/BottomNav";
import { Sidebar } from "@/components/Sidebar";
import avatar1 from "@/assets/avatar1.png";
import image from "@/assets/image.png";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If we arrived here from the apply flow, show the empty state
  const showEmpty = Boolean((location.state as any)?.fromApply);

  const userProfileUrl = "https://myapp.com/profile/user123";

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
        {showEmpty ? (
          <>
            {/* Top icons */}
            <div className="flex items-center justify-between px-5 pt-6">
              <button onClick={() => setSidebarOpen(true)}>
                <UserCircle className="w-6 h-6 text-gray-400 mt-24" />
              </button>
              <Bell className="w-6 h-6 text-gray-400 mt-24" />
            </div>

            {/* Empty state */}
            <div className="flex-1 flex items-center justify-center px-6 pb-24">
              <div className="w-full max-w-sm text-center">
                {/* Illustration placeholder */}
                <div className="mx-auto mb-6 pt-14 w-40 h-40 overflow-hidden rounded-full bg-white/70 flex items-center justify-center">
                  <img src={image} alt="Profile" className="w-30 h-[130px] top-11" />
                </div>

                <h2 className="text-[24px] font-semibold text-gray-900">No QR Yet</h2>
                <p className="mt-2 text-gray-600">
                  Complete your profile to generate your unique Punch QR code to share at events and connect founders instantly
                </p>

                <button
                  onClick={() => navigate("/complete-profile")}
                  className="mt-6 inline-flex w-[246px] h-[54px] items-center justify-center rounded-full bg-[#2B2B2B] text-white font-medium"
                >
                  Complete Profile
                </button>
              </div>
            </div>

            <BottomNav />
          </>
        ) : (
          <>
            {/* Top Navigation */}
            <div className="flex items-center justify-between px-5 pt-6 absolute top-0 left-0 right-0 z-10">
              <button onClick={() => setSidebarOpen(true)}>
                <UserCircle className="w-6 h-6 text-gray-400" />
              </button>
              <Bell className="w-6 h-6 text-gray-400" />
            </div>

            {/* QR View (shown after normal login) */}
            <div className="flex-1 flex items-center justify-center px-6 pb-24">
              <div className="w-full max-w-sm">
                <div className="bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                  <div className="relative">
                    <QRCode value={userProfileUrl} size={346} className="w-full h-auto" level="H" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img src={avatar1} alt="Profile" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BottomNav />
          </>
        )}
      </div>
    </>
  );
};

export default Index;
