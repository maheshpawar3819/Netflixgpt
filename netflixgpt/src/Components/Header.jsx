import React from "react";
import { netflixlogo } from "../Utils/logoimg";
const Header = () => {
  return (
    <div className="absolute my-10 mx-32 w-96 bg-gradient-to from-black z-10">
      <img src={netflixlogo} className="w-32" alt="" />
    </div>
  );
};

export default Header;
