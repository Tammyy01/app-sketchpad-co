import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Video, Phone, Mail, Check } from "lucide-react";

type Progress = { video: boolean; phone: boolean; email: boolean };

const Apply = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showCameraDialog, setShowCameraDialog] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // START FRESH every load (no persistence)
  const [progress, setProgress] = useState<Progress>({
    video: false,
    phone: false,
    email: false,
  });

  // When coming back from recording with success
  useEffect(() => {
    const flag = (location.state as any)?.videoUploaded;
    if (flag) {
      setProgress((p) => ({ ...p, video: true }));
      setShowSuccess(true);
      // Clear the route state so the dialog doesn't re-open on back/refresh
      navigate(".", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  // When coming back from phone verification
  useEffect(() => {
    const flag = (location.state as any)?.phoneVerified;
    if (flag) {
      setProgress((p) => ({ ...p, phone: true }));
      // Clear the route state
      navigate(".", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const handleCameraAccess = () => {
    setShowCameraDialog(false);
    navigate("/video-recording");
  };

  // Layout rule:
  // - Center stack while NOTHING is done
  // - Revert to original full-width layout once ANY step is done
  const anyDone = progress.video || progress.phone || progress.email;
  const centerList = !anyDone;

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
        {/* Centered column (rows start from left) until a step completes; then revert to full-width with ticks on the right */}
        <div className={`mt-10 w-full ${centerList ? "flex justify-center" : ""}`}>
          <div className={`${centerList ? "w-[360px]" : "w-full"} space-y-4`}>

            {/* Record Video row */}
            <div className={`w-full flex items-center ${centerList ? "justify-start" : "justify-between"}`}>
              <Button
                variant="outline"
                disabled={progress.video}
                className={`w-auto h-16 rounded-full bg-white hover:bg-gray-50 border-0 shadow-sm flex items-center justify-start px-6 gap-4 ${
                  progress.video ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={() => setShowCameraDialog(true)}
              >
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground font-medium">Record Video</span>
              </Button>

              {/* Tick OUTSIDE the button, only after success AND only in reverted (non-centered) layout */}
              {!centerList && progress.video && (
                <span className="ml-4 inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-white">
                  <Check className="w-4 h-4" />
                </span>
              )}
            </div>

            {/* Add Phone Number row */}
            <div className={`w-full flex items-center ${centerList ? "justify-start" : "justify-between"}`}>
              <Button
                variant="outline"
                disabled={progress.phone}
                className={`w-auto h-16 rounded-full bg-white hover:bg-gray-50 border-0 shadow-sm flex items-center justify-start px-6 gap-4 ${
                  progress.phone ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={() => navigate("/add-phone")}
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground font-medium">Add Phone Number</span>
              </Button>

              {/* Tick when phone is verified */}
              {!centerList && progress.phone && (
                <span className="ml-4 inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-white">
                  <Check className="w-4 h-4" />
                </span>
              )}
            </div>

            {/* Add Email Address row */}
            <div className={`w-full flex items-center ${centerList ? "justify-start" : "justify-between"}`}>
              <Button
                variant="outline"
                disabled={progress.email}
                className={`w-auto h-16 rounded-full bg-white hover:bg-gray-50 border-0 shadow-sm flex items-center justify-start px-6 gap-4 ${
                  progress.email ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={() => navigate("/add-email")}
              >
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground font-medium">Add Email Address</span>
              </Button>

              {/* Tick when email is verified */}
              {!centerList && progress.email && (
                <span className="ml-4 inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-white">
                  <Check className="w-4 h-4" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Camera permission dialog */}
      <Dialog open={showCameraDialog} onOpenChange={setShowCameraDialog}>
        <DialogContent className="w-[319px] h-[212px] rounded-3xl border-0 p-8">
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

      {/* Success dialog after upload */}
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
              Your video has been successfully uploaded
            </DialogDescription>
          </DialogHeader>
          <div className="pt-6">
            <Button
              className="w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90"
              onClick={() => setShowSuccess(false)}
            >
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Apply;
