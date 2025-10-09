import { Button } from "@/components/ui/button";
import { Video, Phone, Mail } from "lucide-react";

const Apply = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] px-6 py-12">
      {/* Content section */}
      <div className="flex flex-col items-center text-center space-y-12 max-w-sm mt-16">
        {/* Title and description */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground leading-tight">
            Become a Punch Ambassador
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed px-4">
            Join our ambassador network in just 3 steps — introduce yourself and verify your details to represent Punch with pride.
          </p>
        </div>

        {/* Action items */}
        <div className="w-full space-y-4">
          <Button
            variant="outline"
            className="w-full h-16 rounded-full bg-white hover:bg-gray-50 border-0 shadow-sm flex items-center justify-start px-6 gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-foreground font-medium">Record Video</span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-16 rounded-full bg-white hover:bg-gray-50 border-0 shadow-sm flex items-center justify-start px-6 gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-foreground font-medium">Add Phone Number</span>
          </Button>

          <Button
            variant="outline"
            className="w-full h-16 rounded-full bg-white hover:bg-gray-50 border-0 shadow-sm flex items-center justify-start px-6 gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-foreground font-medium">Add Email Address</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
