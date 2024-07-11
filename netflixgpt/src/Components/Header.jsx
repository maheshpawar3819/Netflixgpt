import React from "react";
import { netflixlogo } from "../Utils/logoimg";
import { useDispatch } from "react-redux";
import { toggleGptsearchview } from "../Utils/gptslice";
import { Supportedlanguages } from "../Utils/Constants";
const Header = () => {
  const dispatch = useDispatch();

  const handleGptsearchclick = () => {
    dispatch(toggleGptsearchview());
  };
  return (
    <div className="absolute flex px-8 py-5 top-0 bottom-0 bg-gradient-to-b from-black w-full z-30 h-20 justify-between">
      <img src={netflixlogo} className="w-32" alt="" />

      <div>
        <select className="bg-black hover:bg-gray-700 font-bold p-2 mr-10 rounded-md text-white cursor-pointer">
          {Supportedlanguages.map((language) => {
            return (
              <option value={language.identifier} key={language.identifier}>
                {language.name}
              </option>
            );
          })}
        </select>
        <button
          className="bg-slate-600 p-2 rounded-md  text-white hover:text-red-400 hover:bg-slate-900"
          onClick={handleGptsearchclick}
        >
          Gpt Search
        </button>
      </div>
    </div>
  );
};

export default Header;
