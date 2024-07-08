import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";

const Maincontainerb = () => {
  const movies = useSelector((store) => {
    return store.movies?.addNowPlayingMovies;
  });

  if (movies === null) return; //either you can use if(!movies) retun; it was also fine

  const mainMovie = movies[0];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <Videobackground movieid={id} />
    </div>
  );
};

export default Maincontainerb;
