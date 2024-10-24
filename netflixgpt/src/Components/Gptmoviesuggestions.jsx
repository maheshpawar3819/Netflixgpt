import React from "react";
import { useSelector } from "react-redux";
import { getsearchmovie } from "../Utils/searchslice";
import Searchmoviecard from "./Searchmovies/Searchmoviecard";

const Gptmoviesuggestions = () => {
  const getresultmovies = useSelector(
    (store) => store.searchmovie.addsearchmovie
  );

  const todisplayquery = useSelector((store) => {
    return store.searchmovie.query;
  });
  return (
    <>
      <div>
        {todisplayquery && (
          <h1 className="text-red-600 bg-black bg-opacity-85 p-5 mt-8 m-7 text-center text-5xl rounded-lg tracking-widest">
            {todisplayquery}
          </h1>
        )}
      </div>

      <div className=" bg-black movie-list flex overflow-x-auto space-x-4 m-7 rounded-lg -mt-7 bg-opacity-85">
        {getsearchmovie && getresultmovies.length > 0 ? (
          getresultmovies.map((ele) => {
            return (
              <Searchmoviecard key={ele.id} poster_path={ele.poster_path} />
            );
          })
        ) : (
          <h1></h1>
        )}
      </div>
    </>
  );
};

export default Gptmoviesuggestions;
