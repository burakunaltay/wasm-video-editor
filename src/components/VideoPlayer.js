import React, { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    const videoUrl = URL.createObjectURL(file);
    videoRef.current.src = videoUrl;
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const videoUrl = URL.createObjectURL(file);
    videoRef.current.src = videoUrl;
  };

  return (
    <div
      className="h-screen flex justify-center items-center"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="hidden"
        id="file-input"
      />
      <label
        htmlFor="file-input"
        className="block w-full h-full cursor-pointer flex justify-center items-center"
      >
        <span className="block text-center py-4 px-8 rounded-md bg-gray-200">
          Select a video
        </span>
      </label>
      <video ref={videoRef} controls className="w-2/3 md:w-1/2 lg:w-1/3">
        <source src="" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;