import React from "react";
import { Url_Image } from "../../Utils/logoimg";
const Searchmoviecard = ({ poster_path }) => {
  // if the poster path is not available then not showing the movie
  if (!poster_path) return;
  return (
    <div className="h-auto flex-shrink-0 p-5 cursor-pointer transform transition duration-300 hover:scale-110">
      <img
        className="h-96 md:h-72 md:w-auto"
        src={Url_Image + poster_path}
        alt="movie poster images"
      />
    </div>
  );
};

export default Searchmoviecard;
