import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

function WebcamCapture() {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded-md"
        />
        <button
          onClick={capture}
          className="absolute bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
        >
          Capture
        </button>
      </div>
      {imageSrc && (
        <div className="ml-4">
          <h2 className="text-lg font-semibold mb-2">Captured Image:</h2>
          <img src={imageSrc} alt="Captured" className="rounded-md" />
        </div>
      )}
    </div>
  );
}

export default WebcamCapture;
