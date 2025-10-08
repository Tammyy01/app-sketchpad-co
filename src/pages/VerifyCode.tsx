import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyCode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "example@gmail.com";
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleVerify = () => {
    // Handle verification logic here
    console.log("Verifying code:", value);
    navigate("/home");
  };

  const handleResend = () => {
    setTimer(60);
    setValue("");
    // Handle resend logic here
    console.log("Resending code");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--login-gradient-start))] to-[hsl(var(--login-gradient-end))] flex flex-col p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-8 p-2 hover:opacity-70 transition-opacity"
      >
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-[32px] font-bold text-gray-900 mb-3">
          Verification code
        </h1>
        <p className="text-gray-600 mb-8">
          Enter the 4 digit verification code sent to {email}
        </p>

        {/* OTP Input */}
        <div className="flex items-center justify-between mb-6">
          <InputOTP
            maxLength={4}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup className="gap-4">
              <InputOTPSlot 
                index={0} 
                className="w-16 h-16 text-2xl border-0 bg-white rounded-xl shadow-sm"
              />
              <InputOTPSlot 
                index={1} 
                className="w-16 h-16 text-2xl border-0 bg-white rounded-xl shadow-sm"
              />
              <InputOTPSlot 
                index={2} 
                className="w-16 h-16 text-2xl border-0 bg-white rounded-xl shadow-sm"
              />
              <InputOTPSlot 
                index={3} 
                className="w-16 h-16 text-2xl border-0 bg-white rounded-xl shadow-sm"
              />
            </InputOTPGroup>
          </InputOTP>
          <span className="text-brand-green text-sm font-medium ml-4">
            {timer}s
          </span>
        </div>

        {/* Verify Button */}
        <Button
          onClick={handleVerify}
          disabled={value.length !== 4}
          className="w-full h-14 text-white rounded-full mb-4"
          style={{ backgroundColor: "#343434" }}
        >
          Verify Code
        </Button>

        {/* Resend Link */}
        <p className="text-center text-gray-600 text-sm">
          If you didn't receive a code,{" "}
          <button
            onClick={handleResend}
            disabled={timer > 0}
            className="text-brand-green font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyCode;
