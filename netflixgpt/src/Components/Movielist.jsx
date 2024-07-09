import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-6">
      <h1 className="text-3xl py-6">{title}</h1>
      <div className="movie-list flex overflow-x-auto space-x-4">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <Moviecard key={movie.id} posterpath={movie.poster_path} />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
};

export default Movielist;
