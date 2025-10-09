import { QrCode, Calendar, Users, DollarSign } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { id: "qr", label: "QR", icon: QrCode, path: "/home" },
  { id: "events", label: "Events", icon: Calendar, path: "/home/events" },
  { id: "contacts", label: "Contacts", icon: Users, path: "/home/contacts" },
  { id: "earnings", label: "Earnings", icon: DollarSign, path: "/home/earnings" },
];

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
      <div className="flex justify-around items-center h-20 max-w-md mx-auto px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;
          
          return (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center gap-1 min-w-[60px] py-2 transition-colors"
            >
              <Icon 
                className={`w-6 h-6 ${
                  isActive ? "text-primary" : "text-gray-400"
                }`}
                strokeWidth={2}
              />
              <span 
                className={`text-xs ${
                  isActive ? "text-primary font-medium" : "text-gray-400"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
