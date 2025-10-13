import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const ApplyVerifyCode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || "";
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
    // Mark phone as completed and navigate back to apply
    localStorage.setItem("phoneCompleted", "true");
    navigate("/apply");
  };

  const handleResend = () => {
    setTimer(60);
    setValue("");
    // Handle resend logic here
    console.log("Resending code");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--login-gradient-start))] to-[hsl(var(--login-gradient-end))] flex flex-col items-center px-6 pt-24 pb-safe">
      {/* Header Text */}
      <div className="text-center mb-16">
        <h1 className="text-[20px] font-medium text-gray-900 leading-relaxed">
          Input the code sent to
          <br />
          your mobile
        </h1>
      </div>

      {/* Content */}
      <div className="w-full max-w-md flex flex-col">

        {/* OTP Input - Centered */}
        <div className="flex flex-col items-center mb-10">
          <InputOTP maxLength={4} value={value} onChange={(value) => setValue(value)}>
            <InputOTPGroup className="gap-3">
              <InputOTPSlot index={0} className="w-16 h-16 text-2xl border-0 bg-white rounded-xl shadow-sm" />
              <InputOTPSlot index={1} className="w-16 h-16 text-2xl border-0 bg-white rounded-xl shadow-sm" />
              <InputOTPSlot index={2} className="w-16 h-16 text-2xl border-0 bg-white rounded-xl shadow-sm" />
              <InputOTPSlot index={3} className="w-16 h-16 text-2xl border-0 bg-white rounded-xl shadow-sm" />
            </InputOTPGroup>
          </InputOTP>
          {/* Timer positioned under the far right box */}
          <div className="w-full max-w-[304px] flex justify-end mt-3">
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

export default ApplyVerifyCode;
