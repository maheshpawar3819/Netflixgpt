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

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[40%] bg-black md:pt-0">
      <Videotitle title={original_title} overview={overview} />
      <Videobackground movieid={id} />
    </div>
  );
};

export default Maincontainerb;
