import { useNavigate } from "react-router-dom";
import { User, DollarSign, BarChart3, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/BottomNav";
import avatar1 from "@/assets/avatar1.png";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here
    navigate("/login");
  };

  const menuItems = [
    {
      id: "profile",
      label: "Profile",
      icon: User,
      onClick: () => navigate("/home/edit-profile"),
      color: "#419A6B"
    },
    {
      id: "earnings",
      label: "Earnings",
      icon: DollarSign,
      onClick: () => navigate("/home/earnings"),
      color: "#419A6B"
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      onClick: () => navigate("/home/analytics"),
      color: "#419A6B"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] flex flex-col pb-20">
      {/* Header */}
      <div className="flex items-center justify-end px-5 pt-6 pb-4">
        <button onClick={() => navigate("/home/settings")}>
          <Settings className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-2 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl p-6 max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4">
              <img
                src={avatar1}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Maria Hughes
            </h2>
            <p className="text-sm text-gray-500 mt-1">maria.hughes@gmail.com</p>
          </div>
        </div>

        {/* Menu Card */}
        <div className="bg-white rounded-3xl p-6 max-w-md mx-auto">
          {/* Menu Items */}
          <div className="space-y-2 mb-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <span className="text-base font-medium text-gray-900">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start gap-4 p-4 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl h-auto"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-50">
              <LogOut className="w-5 h-5" />
            </div>
            <span className="text-base font-medium">Logout</span>
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
