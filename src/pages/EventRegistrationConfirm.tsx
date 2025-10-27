import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Clock, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import techExpoHero from "@/assets/tech-expo-hero.png";

const EventRegistrationConfirm = () => {
  const navigate = useNavigate();
  const [isCalendarDialogOpen, setIsCalendarDialogOpen] = useState(false);
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isCalendarSuccessDialogOpen, setIsCalendarSuccessDialogOpen] = useState(false);

  const handleAddToCalendar = () => {
    setIsCalendarDialogOpen(true);
  };

  const handleAddToGoogleCalendar = () => {
    console.log("Add to Google Calendar clicked");
    setIsCalendarDialogOpen(false);
    setIsCalendarSuccessDialogOpen(true);
    
    // Auto close after 2 seconds and navigate to directions
    setTimeout(() => {
      setIsCalendarSuccessDialogOpen(false);
      navigate("/home/event-directions", { 
        state: { eventLocation: "1234 Venice Blvd, Los Angeles, CA 90291" } 
      });
    }, 2000);
  };

  const handleAddToAppleCalendar = () => {
    console.log("Add to Apple Calendar clicked");
    setIsCalendarDialogOpen(false);
    setIsCalendarSuccessDialogOpen(true);
    
    // Auto close after 2 seconds and navigate to directions
    setTimeout(() => {
      setIsCalendarSuccessDialogOpen(false);
      navigate("/home/event-directions", { 
        state: { eventLocation: "1234 Venice Blvd, Los Angeles, CA 90291" } 
      });
    }, 2000);
  };

  const handleCancelRegistration = () => {
    setIsCancelDialogOpen(true);
  };

  const handleConfirmCancel = () => {
    console.log("Registration cancelled");
    setIsCancelDialogOpen(false);
    setIsSuccessDialogOpen(true);
    
    // Auto close after 2 seconds and navigate back
    setTimeout(() => {
      setIsSuccessDialogOpen(false);
      navigate(-1);
    }, 2000);
  };

  const eventImage = techExpoHero;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] px-[10px] pb-8">
      {/* Header */}
      <div className="pt-safe px-4" style={{ paddingTop: 'max(env(safe-area-inset-top), 1.5rem)' }}>
        <div className="flex items-center pb-0 pt-10">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center mt-2"
          >
            <ArrowLeft className="w-6 h-6 text-[#419A6B]" />
          </button>
        </div>
      </div>

      {/* Event Card - Matching Events page style */}
      <div className="py-6">
        <div className="w-[347px] h-auto bg-[#FFFFFF] rounded-[6px] p-[10px] mx-auto">
          {/* Confirmation Notification Card */}
          {/* <div className="w-[327px] h-[32px] bg-[#F6FEF9] rounded-[4px] flex items-center justify-center mb-[15px]">
            <p className="text-sm text-center">You have shown interest to attend this event</p>
          </div> */}

          {/* Event Image */}
          <div className="w-[326px] h-[278px] rounded-[6px] overflow-hidden">
            <img
              src={eventImage}
              alt="Tech Impact Expo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Event Details */}
          <div className="mt-5 space-y-4">
            {/* Title, Date and Time in one line */}
            <div className="flex items-center gap-3">
              <h3 className="w-[144px] text-[18px] font-medium whitespace-nowrap" style={{ color: '#419A6B' }}>
                Tech Impact Expo
              </h3>
              <div className="w-[104px] flex items-center gap-2 text-[10px] text-muted-foreground ml-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-[14px] h-[14px]" />
                  <span>04/Sep/2025</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-[14px] h-[14px]" />
                  <span>4:00PM</span>
                </div>
              </div>
            </div>

            {/* Separator */}
            <hr style={{ borderColor: '#F2F2F2' }} />

            {/* Description */}
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              A comprehensive event on technology forecasting and its impact on our world
            </p>

            {/* Location */}
            <div className="flex items-start gap-2 text-[12px] text-muted-foreground">
              <MapPin className="w-[16px] h-[16px] mt-0.5 flex-shrink-0" />
              <span>1234 Venice Blvd, Los Angeles, CA 90291</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="rounded-full h-[43px] font-medium bg-[#F2F2F2]"
                style={{ width: '90%' }}
                onClick={handleAddToCalendar}
              >
                <Calendar className="w-4 h-4 mr-0 text-[#419A6B]" />
                Add to Calendar
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className=" h-[43px] font-medium bg-[#F2F2F2]"
                    style={{ width: '12%' }}
                  >
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem
                    onClick={handleCancelRegistration}
                    className="text-destructive focus:text-destructive cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    Cancel Registration
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Add to Calendar Bottom Sheet */}
      <Sheet open={isCalendarDialogOpen} onOpenChange={setIsCalendarDialogOpen}>
        <SheetContent side="bottom" className="h-[300px] rounded-t-[20px] p-6 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom px-10">
          <div className="mx-auto w-[375px] max-w-full">
            <SheetHeader>
              <SheetTitle className="text-center text-[20px] font-semibold mb-1">
                Add to Calender
              </SheetTitle>
              <SheetDescription className="text-center text-[14px] text-muted-foreground leading-relaxed mb-9">
                When you register for an event, you will get an email that automatically adds it to your Calendar. You can also add it manually below.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-3 mt-4">
              <Button
                className="w-full h-[48px] rounded-full font-medium"
                style={{ backgroundColor: '#419A6B', color: 'white' }}
                onClick={handleAddToGoogleCalendar}
              >
                Add to Google Calendar
              </Button>
              <Button
                variant="outline"
                className="w-full h-[48px] rounded-full font-medium bg-[#F2F2F2]"
                onClick={handleAddToAppleCalendar}
              >
                Add to Apple Calender
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Cancel Registration Bottom Sheet */}
      <Sheet open={isCancelDialogOpen} onOpenChange={setIsCancelDialogOpen}>
        <SheetContent side="bottom" className="h-[260px] rounded-t-[20px] p-6 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom px-10">
          <div className="mx-auto w-[375px] max-w-full">
            <SheetHeader>
              <SheetTitle className="text-center text-[20px] font-semibold mb-3">
                Leave Event
              </SheetTitle>
              <SheetDescription className="text-center text-[14px] text-muted-foreground leading-relaxed mb-6">
                Are you sure you want to leave the event?
              </SheetDescription>
            </SheetHeader>
            <div className="flex gap-3 mt-4">
              <Button
                variant="outline"
                className="flex-1 h-[48px] rounded-full font-medium bg-[#F2F2F2]"
                onClick={() => setIsCancelDialogOpen(false)}
              >
                Dismiss
              </Button>
              <Button
                className="flex-1 h-[48px] rounded-full font-medium"
                style={{ backgroundColor: '#419A6B', color: 'white' }}
                onClick={handleConfirmCancel}
              >
                Confirm
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Success Dialog */}
      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent className="w-[247px] h-[220px] rounded-[20px] p-6 border-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            {/* Checkmark SVG */}
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="59.0649" height="59.0649" rx="29.5325" fill="#419A6B"/>
              <path d="M41.4701 24.3282L24.6832 41.1151C24.5858 41.2126 24.47 41.29 24.3427 41.3428C24.2153 41.3956 24.0788 41.4228 23.9409 41.4228C23.803 41.4228 23.6665 41.3956 23.5391 41.3428C23.4118 41.29 23.296 41.2126 23.1986 41.1151L15.8543 33.7708C15.6575 33.5739 15.5469 33.3069 15.5469 33.0285C15.5469 32.7501 15.6575 32.4831 15.8543 32.2862C16.0512 32.0893 16.3182 31.9787 16.5966 31.9787C16.8751 31.9787 17.1421 32.0893 17.3389 32.2862L23.9409 38.8895L39.9855 22.8436C40.1823 22.6467 40.4494 22.5361 40.7278 22.5361C41.0062 22.5361 41.2732 22.6467 41.4701 22.8436C41.6669 23.0405 41.7775 23.3075 41.7775 23.5859C41.7775 23.8643 41.6669 24.1313 41.4701 24.3282Z" fill="white"/>
            </svg>
            
            {/* Success Message */}
            <p className="text-center text-[16px] text-gray-900 font-medium">
              You have withdrawn your application
            </p>
            
            {/* Loading Spinner */}
            <div className="w-8 h-8 border-4 border-[#419A6B] border-t-transparent rounded-full animate-spin" />
          </div>
        </DialogContent>
      </Dialog>

      {/* Calendar Success Dialog */}
      <Dialog open={isCalendarSuccessDialogOpen} onOpenChange={setIsCalendarSuccessDialogOpen}>
        <DialogContent className="w-[280px] h-[250px] rounded-[20px] p-6 border-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            {/* Checkmark Circle */}
            <div className="w-[60px] h-[60px] rounded-full border-4 border-[#419A6B] flex items-center justify-center">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#419A6B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* Success Title */}
            <h3 className="text-center text-[20px] text-gray-900 font-semibold">
              You're In
            </h3>
            
            {/* Success Message */}
            <p className="text-center text-[14px] text-muted-foreground">
              Thank you, We look forward to seeing you
            </p>
            
            {/* Loading Spinner */}
            <div className="w-8 h-8 border-4 border-[#419A6B] border-t-transparent rounded-full animate-spin" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventRegistrationConfirm;
