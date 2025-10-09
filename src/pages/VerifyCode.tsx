import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

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
        className="self-start mb-12 hover:opacity-70 transition-opacity w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm"
      >
        <ArrowLeft className="w-5 h-5 text-gray-900" strokeWidth={2} />
      </button>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-[28px] font-bold text-gray-900 mb-3">Verification code</h1>
        <p className="text-gray-600 text-sm mb-12">Enter the 4 digit verification code sent to {email}</p>

        {/* OTP Input - Centered */}
        <div className="flex flex-col items-center mb-8">
          <InputOTP maxLength={4} value={value} onChange={(value) => setValue(value)}>
            <InputOTPGroup className="gap-3">
              <InputOTPSlot index={0} className="w-14 h-14 text-2xl border-0 bg-white rounded-lg shadow-sm" />
              <InputOTPSlot index={1} className="w-14 h-14 text-2xl border-0 bg-white rounded-lg shadow-sm" />
              <InputOTPSlot index={2} className="w-14 h-14 text-2xl border-0 bg-white rounded-lg shadow-sm" />
              <InputOTPSlot index={3} className="w-14 h-14 text-2xl border-0 bg-white rounded-lg shadow-sm" />
            </InputOTPGroup>
          </InputOTP>
          {/* Timer positioned under the far right box */}
          <div className="w-full max-w-[284px] flex justify-end mt-3">
            <span className="text-[#4CAF50] text-[14px] font-medium">{timer}s</span>
          </div>
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
