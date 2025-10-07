import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-blue-100 via-white to-orange-100 px-6 py-12">
      {/* Avatar circles section */}
      <div className="relative w-full h-64 flex items-center justify-center mt-8">
        <div className="absolute top-0 left-16 w-24 h-24 rounded-full bg-white shadow-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </div>
        <div className="absolute top-8 right-12 w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </div>
        <div className="relative z-10 w-40 h-40 rounded-full bg-white shadow-xl overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </div>
        <div className="absolute bottom-4 right-20 w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col items-center text-center space-y-8 flex-1 justify-center">
        <div className="space-y-4 max-w-sm">
          <h1 className="text-4xl font-bold text-foreground leading-tight">
            Do you like going to events?
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Represent Punch at tech events, connect with founders, and earn rewards as you grow your network.
          </p>
        </div>

        <div className="space-y-4 w-full max-w-sm">
          <Button 
            onClick={() => navigate("/login")}
            className="w-full h-14 text-lg bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
          >
            Login
          </Button>
          
          <button
            onClick={() => navigate("/apply")}
            className="flex items-center justify-center gap-2 w-full text-emerald-700 font-medium"
          >
            <span className="text-emerald-700 font-bold">P&gt;</span>
            Apply to be an Ambassador
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
