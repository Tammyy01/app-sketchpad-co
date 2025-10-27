import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const RequestReimbursement = () => {
  const navigate = useNavigate();
  const [receiptImage, setReceiptImage] = useState<string | null>(null);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

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
    setReceiptImage(tempImage);
    setShowPreview(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate(-1);
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
              className="flex-1 h-14 rounded-full bg-[#343434] hover:bg-[#2a2a2a] text-white text-base font-medium"
            >
              Retake
            </Button>
            <Button
              onClick={handleUpload}
              className="flex-1 h-14 rounded-full bg-white hover:bg-gray-100 text-black text-base font-medium"
            >
              Upload
            </Button>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] px-6 pb-10">
        {/* Header */}
        <div className="pt-16 max-w-full mx-auto mb-6">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="w-[37px] h-[37px] rounded-[10px]"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold text-gray-900">
              Request reimbursement
            </h1>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-full mx-auto space-y-6">
          {/* Event */}
          <div className="space-y-2">
            <Label htmlFor="event" className="text-sm font-normal text-gray-900">
              Event
            </Label>
            <Input
              id="event"
              placeholder="Enter event"
              className="h-14 rounded-2xl bg-white border-0 text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Expense Type */}
          <div className="space-y-2">
            <Label htmlFor="expense-type" className="text-sm font-normal text-gray-900">
              Expense type
            </Label>
            <Input
              id="expense-type"
              placeholder="Enter expense type"
              className="h-14 rounded-2xl bg-white border-0 text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-sm font-normal text-gray-900">
              Amount
            </Label>
            <Input
              id="amount"
              type="text"
              placeholder="Enter amount"
              className="h-14 rounded-2xl bg-white border-0 text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {/* Upload Receipt */}
          <div className="space-y-2">
            <Label className="text-sm font-normal text-gray-900">
              Upload receipt
            </Label>
            {receiptImage ? (
              <div className="bg-white rounded-2xl p-4">
                <img
                  src={receiptImage}
                  alt="Receipt"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            ) : (
              <Card className="bg-white border-0 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[120px]">
                <label
                  htmlFor="receipt-upload"
                  className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Plus className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-normal">Add Receipt</span>
                </label>
                <input
                  id="receipt-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </Card>
            )}
          </div>

          {/* Note */}
          <div className="space-y-2">
            <Label htmlFor="note" className="text-sm font-normal text-gray-900">
              Note
            </Label>
            <Textarea
              id="note"
              placeholder="+1 (555) 123-4567"
              className="min-h-[100px] rounded-2xl bg-white border-0 text-gray-900 placeholder:text-gray-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full h-14 bg-[#419A6B] hover:bg-[#3a8a5e] text-white rounded-full text-base font-semibold shadow-lg transition-all hover:scale-[1.02]"
            >
              Submit request
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RequestReimbursement;
