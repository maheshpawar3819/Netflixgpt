import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondarycontainerb = () => {
  const movies = useSelector((store) => {
    return store.movies;
  });

  return (
    movies.addNowPlayingMovies && (
      <div>
        <div className="mt-0 md:-mt-32">
          <Movielist
            title={"Now Playing"}
            movies={movies.addNowPlayingMovies}
          />
          <Movielist title={"Upcoming"} movies={movies.addUpcoming} />
          <Movielist title={"Top Rated"} movies={movies.addNowPlayingMovies} />
          <Movielist title={"Popular"} movies={movies.addPopularMovies} />
        </div>
      </div>
    )
  );
};

export default Secondarycontainerb;
