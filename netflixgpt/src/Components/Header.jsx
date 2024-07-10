import React from "react";
import { netflixlogo } from "../Utils/logoimg";

const Header = () => {
  return (
    <div className="absolute flex px-8 py-5 top-0 bottom-0 bg-gradient-to-b from-black w-full z-30 h-20 justify-between">
      <img src={netflixlogo} className="w-32" alt="" />
      <button className="bg-slate-600 p-2 rounded-md  text-white hover:text-red-400 hover:bg-slate-900">
        Gpt Search
      </button>
    </div>
  );
};

export default Header;
