import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[hsl(var(--splash-gradient-end))] to-[hsl(var(--splash-gradient-start))]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-1">Punch</h1>
        <p className="text-2xl font-light italic text-foreground">Ambassadors</p>
      </div>
    </div>
  );
};

export default Splash;
