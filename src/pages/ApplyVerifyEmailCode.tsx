import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Check } from "lucide-react";

const ApplyVerifyEmailCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleVerify = () => {
    if (code.length === 4) {
      setShowSuccess(true);
    }
  };

  const handleContinue = () => {
    setShowSuccess(false);
    navigate("/apply", { state: { emailVerified: true } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] px-6 py-12">
      <div className="flex flex-col items-center text-center space-y-8 max-w-sm mt-24">
        <h1 className="text-2xl font-semibold text-foreground leading-tight">
          Input the code sent to your email
        </h1>

        <div className="flex flex-col items-center space-y-2">
          <InputOTP
            maxLength={4}
            value={code}
            onChange={(value) => setCode(value)}
          >
            <InputOTPGroup className="gap-4">
              <InputOTPSlot
                index={0}
                className="w-16 h-16 rounded-xl border-0 bg-white text-foreground text-xl"
              />
              <InputOTPSlot
                index={1}
                className="w-16 h-16 rounded-xl border-0 bg-white text-foreground text-xl"
              />
              <InputOTPSlot
                index={2}
                className="w-16 h-16 rounded-xl border-0 bg-white text-foreground text-xl"
              />
              <InputOTPSlot
                index={3}
                className="w-16 h-16 rounded-xl border-0 bg-white text-foreground text-xl"
              />
            </InputOTPGroup>
          </InputOTP>
          <span className="text-sm text-emerald-500 self-end pr-2">60s</span>
        </div>

        <Button
          onClick={handleVerify}
          disabled={code.length !== 4}
          className="w-full h-14 rounded-full bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
        >
          Verify Code
        </Button>

        <p className="text-sm text-muted-foreground">
          If you didn't receive a code,{" "}
          <button className="text-emerald-500 hover:underline">Resend</button>
        </p>
      </div>

      {/* Success dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="w-[320px] rounded-3xl border-0 p-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white ring-2 ring-emerald-500">
              <Check className="h-6 w-6 text-emerald-600" />
            </div>
          </div>
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-semibold text-foreground">
              Successful
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-2">
              Your email has been successfully verified
            </DialogDescription>
          </DialogHeader>
          <div className="pt-6">
            <Button
              className="w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90"
              onClick={handleContinue}
            >
              Go to Homepage
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplyVerifyEmailCode;
