import React from "react";
import { netflixlogo } from "../Utils/logoimg";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptsearchview } from "../Utils/gptslice";
import { Supportedlanguages } from "../Utils/Constants";
import { changeLanguage } from "../Utils/configslice";
const Header = () => {
  const dispatch = useDispatch();
  const showGptsearch = useSelector((store) => store.gpt.showsearchsearch);

  const handleGptsearchclick = () => {
    dispatch(toggleGptsearchview());
  };

  const handleLanguagechange = (event) => {
    // console.log(event.target.value);
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <div className="absolute b flex px-8 py-5 top-0 bottom-0 bg-gradient-to-b from-black w-full z-30 h-20  md:justify-between flex-col md:flex-row">
      <img src={netflixlogo} className="w-32 mx-auto md:mx-0" alt="" />

      <div className="mx-auto md:mx-0 ">
        {showGptsearch && (
          <select
            className="bg-black hover:bg-gray-700 font-bold p-2 mr-10 rounded-md text-white cursor-pointer"
            onClick={handleLanguagechange}
          >
            {Supportedlanguages.map((language) => {
              return (
                <option value={language.identifier} key={language.identifier}>
                  {language.name}
                </option>
              );
            })}
          </select>
        )}
        <button
          className="bg-slate-600 p-2 rounded-md  text-white hover:text-red-400 hover:bg-slate-900 mt-4 md:mt-0 "
          onClick={handleGptsearchclick}
        >
          {showGptsearch ? "Homepage" : "Gpt Search"}
        </button>
      </div>
    </div>
  );
};

export default Header;
