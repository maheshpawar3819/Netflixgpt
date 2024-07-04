import React from "react";
import { netflixlogo } from "../Utils/logoimg";
const Header = () => {
  return (
    <div className="absolute px-8 py-5 bg-gradient-to-b from-black w-full z-30">
      <img src={netflixlogo} className="w-32" alt="" />
    </div>
  );
};

export default Header;
  