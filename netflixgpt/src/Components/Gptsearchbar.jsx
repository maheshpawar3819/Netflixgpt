import React from "react";
import lang from "../Utils/languageconstants";
const Gptsearchbar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form action="" className=" w-1/2 grid grid-cols-12 bg-black">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang.marathi.gptsearchplaceholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang.marathi.search}
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
