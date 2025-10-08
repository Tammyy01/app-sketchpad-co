import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendCode = () => {
    // Handle sending verification code
    console.log("Sending code to:", phoneNumber);
  };

  return (
    <div 
      className="min-h-screen px-6 py-12 flex flex-col"
      style={{
        background: 'linear-gradient(to top right, hsl(var(--login-gradient-start)), hsl(var(--login-gradient-end)))'
      }}
    >
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-foreground/70 text-sm">
            Login to stay connected, manage events, and grow your impact with Punch.
          </p>
        </div>

        {/* Phone Number Input */}
        <div className="space-y-6 mb-8">
          <div className="space-y-3">
            <Label htmlFor="phone" className="text-foreground font-normal text-sm">
              Phone number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 2982 29234"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="h-14 text-base bg-white border-0 rounded-2xl"
            />
          </div>

          <Button
            onClick={handleSendCode}
            className="w-full h-14 text-base rounded-full bg-[#2D2D2D] text-white hover:bg-[#2D2D2D]/90"
          >
            Send Code
          </Button>
        </div>

        {/* Divider */}
        <div className="text-center mb-8">
          <span className="text-foreground/60 text-sm">Or</span>
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            className="w-14 h-14 rounded-lg bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
            onClick={() => console.log("Google login")}
          >
            <svg className="w-7 h-7" viewBox="0 0 48 48">
              <path
                fill="#4285F4"
                d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
              />
              <path
                fill="#34A853"
                d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
              />
              <path
                fill="#FBBC05"
                d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.43 2 24s.85 6.91 2.34 9.88l5.63-4.45 1.72-1.25z"
              />
              <path
                fill="#EA4335"
                d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z"
              />
            </svg>
          </button>

          <button
            className="w-14 h-14 rounded-lg bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
            onClick={() => console.log("Facebook login")}
          >
            <svg className="w-7 h-7" viewBox="0 0 48 48" fill="#1877F2">
              <path d="M48 24c0-13.255-10.745-24-24-24S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-4.641c0-6.015 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.748V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" />
            </svg>
          </button>

          <button
            className="w-14 h-14 rounded-lg bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
            onClick={() => console.log("Instagram login")}
          >
            <svg className="w-7 h-7" viewBox="0 0 48 48">
              <defs>
                <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FD5949" />
                  <stop offset="50%" stopColor="#D6249F" />
                  <stop offset="100%" stopColor="#285AEB" />
                </linearGradient>
              </defs>
              <path
                fill="url(#ig-gradient)"
                d="M24 4.324c6.408 0 7.167.013 9.699.141 6.505.297 9.534 3.376 9.831 9.831.128 2.533.14 3.292.14 9.7 0 6.41-.013 7.168-.14 9.7-.299 6.449-3.327 9.534-9.831 9.831-2.533.128-3.289.14-9.699.14-6.408 0-7.167-.013-9.699-.14-6.509-.299-9.534-3.387-9.831-9.832-.128-2.532-.14-3.29-.14-9.699 0-6.408.013-7.167.14-9.699.299-6.453 3.327-9.534 9.831-9.831 2.533-.128 3.291-.141 9.699-.141zM24 0c-6.519 0-7.335.028-9.895.144-8.715.4-13.56 5.24-13.96 13.96C.028 16.665 0 17.481 0 24s.028 7.335.144 9.895c.4 8.716 5.24 13.56 13.96 13.96C16.665 47.972 17.481 48 24 48s7.335-.028 9.895-.144c8.708-.4 13.564-5.24 13.959-13.96C47.972 31.335 48 30.519 48 24s-.028-7.335-.144-9.895c-.392-8.708-5.236-13.56-13.959-13.96C31.335.028 30.519 0 24 0zm0 11.676c-6.806 0-12.324 5.518-12.324 12.324S17.194 36.324 24 36.324 36.324 30.806 36.324 24 30.806 11.676 24 11.676zM24 32c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm12.811-23.69c-1.591 0-2.881 1.29-2.881 2.88s1.29 2.881 2.881 2.881c1.59 0 2.88-1.291 2.88-2.881s-1.29-2.88-2.88-2.88z"
              />
            </svg>
          </button>

          <button
            className="w-14 h-14 rounded-lg bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
            onClick={() => console.log("LinkedIn login")}
          >
            <svg className="w-7 h-7" viewBox="0 0 48 48" fill="#0A66C2">
              <path d="M40.894 40.904h-7.107v-11.138c0-2.656-.054-6.074-3.703-6.074-3.706 0-4.272 2.891-4.272 5.878v11.334h-7.107V18h6.828v3.122h.093c.954-1.8 3.274-3.701 6.74-3.701 7.202 0 8.535 4.74 8.535 10.91v12.573zM10.674 14.866c-2.287 0-4.126-1.852-4.126-4.129s1.84-4.126 4.126-4.126c2.28 0 4.128 1.85 4.128 4.126 0 2.277-1.849 4.129-4.128 4.129zm3.564 26.038H7.107V18h7.131v22.904zM44.45 0H3.544C1.584 0 0 1.547 0 3.458v41.084C0 46.453 1.584 48 3.544 48h40.902C46.416 48 48 46.453 48 44.542V3.458C48 1.547 46.416 0 44.45 0h.006z" />
            </svg>
          </button>
        </div>

        {/* Terms */}
        <div className="text-center text-sm text-foreground">
          By signing in, you agree to Tripcoin's{" "}
          <a href="#" className="text-[#4A9EFF] hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#4A9EFF] hover:underline">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Login;
