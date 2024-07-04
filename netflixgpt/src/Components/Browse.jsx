import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { apikey } from "../Utils/Constants";

const Browse = () => {
  const [data, setData] = useState([]);

  const fetchletestmovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        apikey
      )
      .then((response) => {
        console.log(response?.data?.results);
        setData(response?.data?.results[0]?.title);
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
