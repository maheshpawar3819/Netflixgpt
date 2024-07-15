import React from "react";
import lang from "../Utils/languageconstants";
import { useSelector } from "react-redux";
const Gptsearchbar = () => {
  const language = useSelector((store) => store.config.lang);

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
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[language].gptsearchplaceholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
