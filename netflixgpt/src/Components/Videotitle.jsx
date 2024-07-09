import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="w-screen  aspect-video h-[90vh] pt-[20%] px-14 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white hover:bg-gray-100 text-black p-4 px-12 text-xl bg-opacity-80 rounded-lg">
          Play
        </button>
        <button className="bg-gray-500 hover:bg-gray-800 text-white p-4 px-12 mx-2 text-xl bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
