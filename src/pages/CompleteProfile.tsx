import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Pencil, X, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  linkedinUrl: z.string().url("Invalid LinkedIn URL").or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;

const CompleteProfile = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      linkedinUrl: "",
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImage(reader.result as string);
        setShowPreview(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRetake = () => {
    setTempImage(null);
    setShowPreview(false);
  };

  const handleUpload = () => {
    setProfileImage(tempImage);
    setShowPreview(false);
  };

  const onSubmit = (data: FormData) => {
    console.log("Profile data:", data);
    // Store profile completion
    localStorage.setItem("profileCompleted", "true");
    // Show success dialog
    setShowSuccess(true);
  };

  const handleSuccessOk = () => {
    setShowSuccess(false);
    navigate("/home", { state: { profileCompleted: true } });
  };

  return (
    <>
      {/* Photo Preview Screen */}
      {showPreview && tempImage && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="absolute top-6 left-6">
            <button
              onClick={handleRetake}
              className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <img
              src={tempImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="p-6 flex gap-4">
            <Button
              onClick={handleRetake}
              className="flex-1 h-14 rounded-full text-white text-base font-medium"
              style={{ backgroundColor: "#343434" }}
            >
              Retake
            </Button>
            <Button
              onClick={handleUpload}
              className="flex-1 h-14 rounded-full text-base font-medium"
              style={{ backgroundColor: "#ffffff", color: "#000000" }}
            >
              Upload
            </Button>
          </div>
        </div>
      )}

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-white rounded-3xl max-w-sm mx-auto p-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center">
              <Check className="w-8 h-8 text-white" strokeWidth={3} />
            </div>
            
            <div className="text-center space-y-2">
              <DialogTitle className="text-xl font-semibold text-gray-900">
                Profile completed
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Your QR code has been generated
              </DialogDescription>
            </div>

            <Button
              onClick={handleSuccessOk}
              className="w-full h-14 rounded-full text-white text-base font-medium"
              style={{ backgroundColor: "#343434" }}
            >
              OK
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Form */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center px-6 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Avatar Section */}
        <div className="flex flex-col items-center space-y-4">
          <label htmlFor="image-upload" className="relative cursor-pointer">
            <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Camera className="w-12 h-12 text-gray-400" />
              )}
            </div>
            {profileImage && (
              <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                <Pencil className="w-5 h-5 text-gray-700" />
              </div>
            )}
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal text-gray-700 mb-2">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className="h-14 rounded-2xl bg-white border-0 text-gray-900 placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal text-gray-700 mb-2">Email address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="ab@gmail.com"
                      className="h-14 rounded-2xl bg-white border-0 text-gray-900 placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* LinkedIn URL Field */}
            <FormField
              control={form.control}
              name="linkedinUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal text-gray-700 mb-2">LinkedIn profile URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ab/linkedin.com"
                      className="h-14 rounded-2xl bg-white border-0 text-gray-900 placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full h-14 rounded-full text-white text-base font-medium"
                style={{ backgroundColor: "#343434" }}
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
    </>
  );
};

export default CompleteProfile;
