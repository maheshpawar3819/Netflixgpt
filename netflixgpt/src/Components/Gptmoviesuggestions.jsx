import React from "react";
import { useSelector } from "react-redux";
import { getsearchmovie } from "../Utils/searchslice";
import Searchmoviecard from "./Searchmovies/Searchmoviecard";
import { useEffect } from "react";

const Gptmoviesuggestions = () => {
  const getresultmovies = useSelector(
    (store) => store.searchmovie.addsearchmovie
  );

  useEffect(() => {
    console.log("Component rendered with movies: ", getresultmovies);
  }, [getresultmovies]);

  return (
    <div>
      {getsearchmovie && getresultmovies.length > 0 ? (
        getresultmovies.map((ele) => {
          return (
            <Searchmoviecard
              key={ele.id}
              poster_path={ele.poster_path}
              original_title={ele.original_title}
            />
          );
        })
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default Gptmoviesuggestions;
