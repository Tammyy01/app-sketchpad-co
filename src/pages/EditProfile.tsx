import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar1 from "@/assets/avatar1.png";

const EditProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Maria",
    lastName: "Hughes",
    email: "maria.hughes@gmail.com",
    linkedin: "MariaHughes/linkedin/profile/url",
  });

  const handleSave = () => {
    // Save changes logic here
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--onboarding-gradient-start))] to-[hsl(var(--onboarding-gradient-end))] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center relative px-5 pt-6 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-5"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Edit Profile</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6">
        <div className="bg-white rounded-3xl p-8 max-w-md mx-auto">
          {/* Avatar Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                <img
                  src={avatar1}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              {formData.firstName} {formData.lastName}
            </h2>
            <p className="text-sm text-gray-500">{formData.email}</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <label className="text-sm text-gray-500">First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="text-right text-gray-900 border-none outline-none bg-transparent"
                />
              ) : (
                <span className="text-gray-900">{formData.firstName}</span>
              )}
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <label className="text-sm text-gray-500">Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="text-right text-gray-900 border-none outline-none bg-transparent"
                />
              ) : (
                <span className="text-gray-900">{formData.lastName}</span>
              )}
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <label className="text-sm text-gray-500">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="text-right text-gray-900 border-none outline-none bg-transparent"
                />
              ) : (
                <span className="text-gray-900">{formData.email}</span>
              )}
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <label className="text-sm text-gray-500">LinkedIn</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData({ ...formData, linkedin: e.target.value })
                  }
                  className="text-right text-gray-900 border-none outline-none bg-transparent"
                />
              ) : (
                <span className="text-gray-900">{formData.linkedin}</span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <Button
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              className="w-full h-14 rounded-full text-white text-base font-medium"
              style={{ backgroundColor: "#343434" }}
            >
              {isEditing ? "Save Changes" : "Edit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
