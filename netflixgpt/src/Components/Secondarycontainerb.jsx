import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondarycontainerb = () => {
  const movies = useSelector((store) => {
    return store.movies;
  });

  return (
    <div>
      <Movielist title={"Now Playing"} movies={movies.addNowPlayingMovies} />
    </div>
  );
};

export default Secondarycontainerb;
