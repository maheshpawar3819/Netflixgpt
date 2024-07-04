import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { apikey } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesslice";

const Browse = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const fetchletestmovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        apikey
      )
      .then((response) => {
        console.log(response?.data?.results);
        dispatch(addNowPlayingMovies(response?.data?.results));
      })
      .catch((error) => {
        console.log("error was found", error);
      });
  };

  useEffect(() => {
    fetchletestmovies();
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Browse;
