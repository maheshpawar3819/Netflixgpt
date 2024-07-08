import React from "react";
import { Url_Image } from "../Utils/logoimg";
const Moviecard = ({ posterpath }) => {
  return (
    <div className="">
      <img src={Url_Image + posterpath} alt="movie cards imges" />
    </div>
  );
};

export default Moviecard;
