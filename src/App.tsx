import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Apply from "./pages/Apply";
import VideoRecording from "./pages/VideoRecording";
import Login from "./pages/Login";
import VerifyCode from "./pages/VerifyCode";
import ApplyVerifyCode from "./pages/ApplyVerifyCode";
import AddPhone from "./pages/AddPhone";
import AddEmail from "./pages/AddEmail";
import ApplyVerifyEmailCode from "./pages/ApplyVerifyEmailCode";
import Index from "./pages/Index";
import CompleteProfile from "./pages/CompleteProfile";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Analytics from "./pages/Analytics";
import ReimbursementDetails from "./pages/ReimbursementDetails";
import RequestReimbursement from "./pages/RequestReimbursement";
import Earnings from "./pages/Earnings";
import Rankings from "./pages/Rankings";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import EventRegistrationConfirm from "./pages/EventRegistrationConfirm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/video-recording" element={<VideoRecording />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/apply-verify-code" element={<ApplyVerifyCode />} />
          <Route path="/add-phone" element={<AddPhone />} />
          <Route path="/add-email" element={<AddEmail />} />
          <Route path="/apply-verify-email-code" element={<ApplyVerifyEmailCode />} />
          <Route path="/home" element={<Index />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/home/profile" element={<Profile />} />
          <Route path="/home/edit-profile" element={<EditProfile />} />
          <Route path="/home/analytics" element={<Analytics />} />
          <Route path="/home/reimbursement-details" element={<ReimbursementDetails />} />
          <Route path="/home/request-reimbursement" element={<RequestReimbursement />} />
          <Route path="/home/earnings" element={<Earnings />} />
          <Route path="/home/events" element={<Events />} />
          <Route path="/home/events/:eventId" element={<EventDetails />} />
          <Route path="/home/events/:eventId/confirm" element={<EventRegistrationConfirm />} />
          <Route path="/rankings" element={<Rankings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
