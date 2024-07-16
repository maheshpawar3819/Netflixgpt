import React, { useRef } from "react";
import lang from "../Utils/languageconstants";
import { useDispatch, useSelector } from "react-redux";
import useSearchMovies from "../Hooks/useSearchMovies";
import { addquery } from "../Utils/searchslice";
const Gptsearchbar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchresults = useSelector((store) => {
    return store.searchmovie.getsearchmovie;
  });
  const getText = useRef(null);
  const dispatch = useDispatch();

  useSearchMovies();

  const handlesearchtext = () => {
    console.log(getText.current.value);
    const result = getText.current.value;
    //Make an Api call to search movies in the api and get movie results;
    dispatch(addquery(result));

    // getText.current.value; //for clearing the input filed after searching the result;
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        className=" w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => {
          return e.preventDefault();
        }}
      >
        <input
          ref={getText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[language].gptsearchplaceholder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 hover:bg-red-600 text-white rounded-lg"
          onClick={handlesearchtext}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
