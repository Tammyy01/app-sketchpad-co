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
import techExpoHero from "@/assets/tech-expo-hero.png";

const EventRegistrationConfirm = () => {
  const navigate = useNavigate();
  const [isCalendarDialogOpen, setIsCalendarDialogOpen] = useState(false);

  const handleAddToCalendar = () => {
    setIsCalendarDialogOpen(true);
  };

  const handleAddToGoogleCalendar = () => {
    console.log("Add to Google Calendar clicked");
    setIsCalendarDialogOpen(false);
  };

  const handleAddToAppleCalendar = () => {
    console.log("Add to Apple Calendar clicked");
    setIsCalendarDialogOpen(false);
  };

  const handleCancelRegistration = () => {
    console.log("Cancel registration clicked");
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
        <SheetContent side="bottom" className="h-[276px] rounded-t-[20px] p-6 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom">
          <div className="mx-auto w-[375px] max-w-full">
            <SheetHeader>
              <SheetTitle className="text-center text-[20px] font-semibold mb-3">
                Add to Calender
              </SheetTitle>
              <SheetDescription className="text-center text-[14px] text-muted-foreground leading-relaxed mb-4">
                When you register for an event, you will get an email that automatically adds it to your Calendar. You can also add it manually below.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-3">
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
    </div>
  );
};

export default EventRegistrationConfirm;
