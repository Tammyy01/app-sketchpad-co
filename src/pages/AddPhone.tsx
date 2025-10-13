import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddPhone = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    // Handle phone submission logic here
    console.log("Phone number submitted:", phoneNumber);
    navigate("/verify-code", { state: { phoneNumber } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--login-gradient-start))] to-[hsl(var(--login-gradient-end))] flex flex-col items-center px-6 pt-24 pb-safe">
      {/* Header Text */}
      <div className="text-center mb-12">
        <h1 className="text-[20px] font-medium text-gray-900 leading-relaxed">
          A six digit code will be sent
          <br />
          to your number
        </h1>
      </div>

      {/* Phone Input */}
      <div className="w-full max-w-md space-y-3">
        <Label htmlFor="phone" className="text-gray-900 text-sm font-normal">
          Phone number
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+1 2982 29234"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="h-14 rounded-xl bg-white border-0 shadow-sm text-base placeholder:text-gray-400"
        />
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        disabled={!phoneNumber}
        className="w-full max-w-md h-14 text-white rounded-full mt-8"
        style={{ backgroundColor: "#343434" }}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddPhone;
