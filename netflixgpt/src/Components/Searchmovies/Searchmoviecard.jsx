import React from "react";
import { Url_Image } from "../../Utils/logoimg";
const Searchmoviecard = ({ poster_path, original_title }) => {
  return (
    <div className="w-48 h-auto flex-shrink-0">
      {/* <h1 className="bg-white">hii mahesh pawar</h1> */}
      <h1 className="bg-white">{original_title}</h1>
      <img src={Url_Image + poster_path} alt="movie poster images" />
    </div>
  );
};

export default Searchmoviecard;
