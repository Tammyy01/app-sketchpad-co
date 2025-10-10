import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Image, RotateCcw } from "lucide-react";

const VideoRecording = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Request camera access
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: true,
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => {
      // Cleanup: stop camera stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleRecord = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      // Stop recording logic here
      setRecordingTime(0);
    }
  };

  return (
    <div className="fixed inset-0 bg-black">
      {/* Video preview */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Top controls */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10">
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/40 text-white"
          onClick={() => navigate("/apply")}
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Timer */}
        <div className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur-sm">
          <span className="text-white font-medium">{formatTime(recordingTime)}</span>
        </div>

        <div className="w-12" /> {/* Spacer for centering */}
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-12">
        <div className="bg-black/80 backdrop-blur-md rounded-[2rem] px-8 py-6">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {/* Gallery button */}
            <Button
              variant="ghost"
              size="icon"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 text-white"
            >
              <Image className="w-6 h-6" />
            </Button>

            {/* Record button */}
            <button
              onClick={handleRecord}
              className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center transition-all"
            >
              <div
                className={`rounded-full transition-all ${
                  isRecording
                    ? "w-8 h-8 bg-red-600"
                    : "w-16 h-16 bg-red-600"
                }`}
              />
            </button>

            {/* Flip camera button */}
            <Button
              variant="ghost"
              size="icon"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 text-white"
            >
              <RotateCcw className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRecording;
