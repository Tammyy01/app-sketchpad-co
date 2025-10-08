import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.png";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-blue-100 via-white to-orange-100 px-6 py-12">
      {/* Avatar circles section */}
      <div className="relative w-full h-64 flex items-center justify-center mt-8">
        <div className="absolute top-0 left-16 w-24 h-24 rounded-full bg-white shadow-lg overflow-hidden">
          <img src={avatar1} alt="Ambassador" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-8 right-12 w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden">
          <img src={avatar2} alt="Ambassador" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 w-40 h-40 rounded-full bg-white shadow-xl overflow-hidden">
          <img src={avatar3} alt="Ambassador" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-4 right-20 w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden">
          <img src={avatar4} alt="Ambassador" className="w-full h-full object-cover" />
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
            variant="brand"
            className="w-full h-14 text-lg rounded-full"
          >
            Login
          </Button>
          
          <button
            onClick={() => navigate("/apply")}
            className="flex items-center justify-center gap-2 w-full text-brand-green font-medium"
          >
            <span className="text-brand-green font-bold">P&gt;</span>
            Apply to be an Ambassador
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
