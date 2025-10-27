import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ReimbursementItem {
  id: number;
  event: string;
  date: string;
  expenseType: string;
  amount: string;
  status: string;
  receiptImage?: string;
}

const ReimbursementDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state as ReimbursementItem;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-purple-600";
      case "Paid":
        return "text-[#419A6B]";
      case "Approved":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
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
            Reimbursement details
          </h1>
        </div>
      </div>

      <div className="max-w-full mx-auto space-y-6 animate-fade-in">
        {/* Details Card */}
        <Card className="bg-white/90 backdrop-blur border-0 rounded-3xl p-6 animate-scale-in">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-500">Event:</span>
              <span className="text-sm font-medium text-gray-900 text-right max-w-[200px]">
                {item?.event}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Date:</span>
              <span className="text-sm text-gray-900">{item?.date}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Expense Type:</span>
              <span className="text-sm text-gray-900">{item?.expenseType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Amount:</span>
              <span className="text-sm font-semibold text-gray-900">{item?.amount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Status:</span>
              <span className={`text-sm font-semibold ${getStatusColor(item?.status)}`}>
                {item?.status}
              </span>
            </div>
          </div>
        </Card>

        {/* Receipt Section */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {item?.receiptImage ? (
            <div className="bg-white/90 backdrop-blur border-0 rounded-3xl p-4">
              <img
                src={item.receiptImage}
                alt="Receipt"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          ) : (
            <Card className="bg-white/90 backdrop-blur border-0 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[200px]">
              <button className="flex flex-col items-center gap-3 text-gray-400 hover:text-gray-600 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <Plus className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">Add Receipt</span>
              </button>
            </Card>
          )}
        </div>

        {/* Edit Button */}
        <div className="fixed bottom-10 left-0 right-0 px-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button className="w-full h-14 bg-[#419A6B] hover:bg-[#3a8a5e] text-white rounded-full text-base font-semibold shadow-lg transition-all hover:scale-[1.02]">
            Edit submission
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReimbursementDetails;
