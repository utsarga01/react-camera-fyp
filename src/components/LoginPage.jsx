import React, { useState } from "react";
import WebcamCapture from "./WebcamCapture"; // Assuming the WebcamCapture component is in a separate file

function LoginPage() {
  const [showWebcam, setShowWebcam] = useState(false);

  const handleLoginClick = () => {
    setShowWebcam(true);
  };

  return (

    <div className="bg-blue-300 justify-center items-center h-screen">
        <div className='text-black'style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 ClassName='w-full text-3xl font-bold text-[#00df9a]'style={{ fontWeight: 'bold' }}>HANDSIGN RECOGNITION SYSTEM.</h1>
        </div>
      {!showWebcam ? (
        <div className="bg-white p-8 rounded shadow-md w-96 flex items-center justify-center">
          
        
          <form>
          
         
            <button
              type="button"
              onClick={handleLoginClick}
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
            Get started
            </button>
          </form>
        </div>
      ) : (
        <WebcamCapture />
      )}
    </div>
  );
}

export default LoginPage;
