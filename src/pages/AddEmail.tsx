import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

const AddEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      // Navigate to email verification code page
      navigate("/apply-verify-email-code");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] px-6 py-12">
      {/* Back button */}
      <div className="w-full max-w-sm">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 rounded-full"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center space-y-8 max-w-sm mt-16">
        <h1 className="text-2xl font-semibold text-foreground leading-tight">
          A six digit code will be sent to your email
        </h1>

        <div className="w-full space-y-3">
          <Label htmlFor="email" className="text-sm text-foreground text-left block">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 rounded-xl bg-white border-0 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!email}
          className="w-full h-14 rounded-full bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddEmail;
