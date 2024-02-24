import React, { useState } from "react";
import WebcamCapture from "./WebcamCapture"; // Assuming the WebcamCapture component is in a separate file
import ReactPlayer from "react-player";

function LoginPage() {
  const handleVideoElement = (videoElement) => {
    if (videoElement) {
      videoElement.addEventListener("play", () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const captureInterval = setInterval(() => {
          ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const frameData = canvas.toDataURL("image/jpeg");
          console.log(frameData); // Log each video frame as Base64 data
        }, 1000); // Adjust interval as needed

        // Clear interval when the component unmounts
        return () => clearInterval(captureInterval);
      });
    }
  };

  return (
    <div>
      <WebcamCapture onVideoElement={handleVideoElement} />
    </div>
  );
}
export default LoginPage;
