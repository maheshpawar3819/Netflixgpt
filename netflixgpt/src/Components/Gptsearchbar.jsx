import React, { useRef } from "react";
import lang from "../Utils/languageconstants";
import { useDispatch, useSelector } from "react-redux";
import useSearchMovies from "../Hooks/useSearchMovies";
import { addquery } from "../Utils/searchslice";
import Gptmoviesuggestions from "./Gptmoviesuggestions";
const Gptsearchbar = () => {
  const language = useSelector((store) => store.config.lang);
  const getText = useRef(null);
  const dispatch = useDispatch();

  useSearchMovies();

  const handlesearchtext = () => {
    const result = getText.current.value;
    dispatch(addquery(result));
  };
  
  return (
    <>
      <div className="pt-[35%] md:pt-40 flex justify-center">
        <form
          action=""
          className=" w-full text-xs m-3 md:text-lg md:m-0 md:w-1/2 grid grid-cols-12 bg-black"
          onSubmit={(e) => {
            return e.preventDefault();
          }}
        >
          <input
            ref={getText}
            type="text"
            className="p-4 m-4 col-span-9 rounded-lg "
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
      <div>
        <Gptmoviesuggestions />
      </div>
    </>
  );
};

export default Gptsearchbar;
