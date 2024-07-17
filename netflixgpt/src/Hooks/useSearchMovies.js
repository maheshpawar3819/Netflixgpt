import axios from "axios";
import { useEffect } from "react";
import { apikey } from "../Utils/Constants"; // Updated import
import { useDispatch, useSelector } from "react-redux";
import { getsearchmovie } from "../Utils/searchslice";

const useSearchMovies = () => {
  const dispatch = useDispatch();
  const query = useSelector((store) => store.searchmovie.query);

  useEffect(() => {
    if (query) {
      const searchMoviesApicall = () => {
        const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
        // console.log("Request URL:", url);
        axios
          .get(url, apikey) // Correctly pass the headers
          .then((response) => {
            dispatch(getsearchmovie(response?.data?.results));
          })
          .catch((error) => {
            console.error("API Error:", error);
          });
      };
      searchMoviesApicall();
    }
  }, [query, dispatch]);
};

export default useSearchMovies;
