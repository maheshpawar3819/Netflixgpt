import React from "react";
import { useSelector } from "react-redux";
import { Url_Image } from "../Utils/logoimg";
const Gptmoviesuggestions = () => {
  const getresultmovies = useSelector(
    (store) => store.searchmovie.addsearchmovie
  );
  console.log(getresultmovies);

  return (
    <div>
      <h1>Hii mahi </h1>
    </div>
  );
};

export default Gptmoviesuggestions;
