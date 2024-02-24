// WebcamCapture.js
import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";

function WebcamCapture({ onVideoElement }) {
  const webcamRef = useRef(null);

  useEffect(() => {
    const videoElement = webcamRef.current?.video;
    onVideoElement(videoElement);
  }, [onVideoElement]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user", // or 'environment' for the rear camera
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded-md"
          videoConstraints={videoConstraints}
        />
      </div>
    </div>
  );
}

export default WebcamCapture;
