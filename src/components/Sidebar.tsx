import { X, User, BarChart3, Wallet, Bell as BellIcon, LogOut } from "lucide-react";
import avatar1 from "@/assets/avatar1.png";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const menuItems = [
    { icon: User, label: "Profile", color: "#10B981" },
    { icon: BarChart3, label: "Analytics", color: "#10B981" },
    { icon: Wallet, label: "Reimbursement", color: "#10B981" },
    { icon: BellIcon, label: "Notification", color: "#10B981" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#E5E5E5] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with Profile */}
          <div className="pt-12 pb-6 px-6">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Profile Section */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white">
                <img
                  src={avatar1}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 pt-1">
                <h2 className="text-lg font-semibold text-gray-900">Maria Hughes</h2>
                <p className="text-sm text-gray-600">maria.hughes@example.com</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 px-6 py-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/50 transition-colors"
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                  <span className="text-base text-gray-900">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Logout Button */}
          <div className="p-6">
            <button className="flex items-center gap-3 text-red-500 hover:text-red-600 transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="text-base font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
