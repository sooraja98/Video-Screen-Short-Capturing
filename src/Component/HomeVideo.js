import React, { useState, useRef } from "react";

function HomeVideo({onGet}) {
  const [video, setVideo] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideo(file);
    }
  };
  const handleScreenshotButtonClick = () => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    if (videoElement && canvasElement) {
      const canvasContext = canvasElement.getContext("2d");
      canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
      const screenshotDataURL = canvasElement.toDataURL();
      onGet(screenshotDataURL)
    }
  };

  return (
    <>
      {" "}
      <div className="max-w-md mx-auto">
        <label className="block mb-2 font-bold text-gray-700">
          Upload a Video
        </label>
        <div className="relative rounded-md shadow-sm mt-6">
          <form>
            <input
              className="block w-full py-3 px-4 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              type="file"
              id="video-upload"
              onChange={handleFileInputChange}
              accept="video/*"
            />
          </form>
        </div>
        <div className="max-w-md mx-auto mt-10">
          <video className="block w-full h-auto" controls ref={videoRef}>
            {video ? (
              <source src={URL.createObjectURL(video)} type="video/mp4" />
            ) : (
              <p>Your browser does not support the video tag.</p>
            )}
          </video>
          <div className="flex justify-center mt-4">
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md" onClick={handleScreenshotButtonClick}>
              Take the screen short
            </button>
          </div>
        
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        </div>
      </div>
    </>
  );
}

export default HomeVideo;
