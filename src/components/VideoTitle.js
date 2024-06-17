import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div class="w-screen aspect-video px-20 pt-60 absolute text-white bg-gradient-to-r from-black ">
      <h1 class="text-4xl font-bold mb-6">{title}</h1>
      <p class="text-lg mb-8 w-2/4">{overview}</p>
      <div class="flex items-center">
        <button class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 mr-4 rounded">
          Play
        </button>
        <button class="border border-white px-8 py-3 rounded hover:border-red-600 hover:text-red-600">
          ! More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;






