import React from "react";
import { Url_Image } from "../Utils/logoimg";
const Moviecard = ({ posterpath }) => {
  return (
    <div className="w-48 h-auto flex-shrink-0">
      <img src={Url_Image + posterpath} alt="movie cards imges" />
    </div>
  );
};

export default Moviecard;
