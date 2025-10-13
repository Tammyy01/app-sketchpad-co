import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Video, Phone, Mail, Check } from "lucide-react";

const Apply = () => {
  const navigate = useNavigate();
  const [showCameraDialog, setShowCameraDialog] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem("videoCompleted") === "true";
    setVideoCompleted(completed);
  }, []);

  const handleCameraAccess = () => {
    setShowCameraDialog(false);
    navigate("/video-recording");
  };

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
            className="w-full h-16 rounded-full bg-white hover:bg-gray-50 border-0 shadow-sm flex items-center justify-between px-6"
            onClick={() => !videoCompleted && setShowCameraDialog(true)}
            disabled={videoCompleted}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${videoCompleted ? 'bg-muted' : 'bg-red-500'}`}>
                <Video className={`w-5 h-5 ${videoCompleted ? 'text-muted-foreground' : 'text-white'}`} />
              </div>
              <span className={`font-medium ${videoCompleted ? 'text-muted-foreground' : 'text-foreground'}`}>Record Video</span>
            </div>
            {videoCompleted && (
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white stroke-[3]" />
              </div>
            )}
          </Button>

          <Button
            variant="outline"
            className="w-full h-16 rounded-full bg-white hover:bg-gray-50 border-0 shadow-sm flex items-center justify-start px-6 gap-4"
            onClick={() => navigate("/add-phone")}
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

      <Dialog open={showCameraDialog} onOpenChange={setShowCameraDialog}>
        <DialogContent className="sm:max-w-md rounded-3xl border-0 p-8">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-semibold text-foreground">
              Allow camera access
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-2">
              Allow punch ambassador app to access your camera
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1 h-12 rounded-full bg-muted hover:bg-muted/80 border-0"
              onClick={() => setShowCameraDialog(false)}
            >
              Don't Allow
            </Button>
            <Button
              className="flex-1 h-12 rounded-full bg-foreground text-background hover:bg-foreground/90"
              onClick={handleCameraAccess}
            >
              Ok
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Apply;
