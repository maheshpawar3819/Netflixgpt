import axios from "axios";
import { useEffect } from "react";
import { apikey } from "../Utils/Constants";

const useSearchMovies = () => {
  const searchMoviesApicall = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
        apikey
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error, "oops... Someting wrong!!!");
      });
  };

  useEffect(() => {
    searchMoviesApicall();
  }, []);
};

export default useSearchMovies;
