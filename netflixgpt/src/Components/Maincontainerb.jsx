import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";

const Maincontainerb = () => {
  const movies = useSelector((store) => {
    return store.movies?.addNowPlayingMovies;
  });

  if (movies === null) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  return (
    <div>
      <Videotitle />
      <Videobackground />
    </div>
  );
};

export default Maincontainerb;
