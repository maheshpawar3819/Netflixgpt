import axios from "axios";
import { useEffect } from "react";
import { apikey } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { getsearchmovie } from "../Utils/searchslice";
const useSearchMovies = () => {
  const dispatch = useDispatch();
  const query = useSelector((store) => {
    return store.searchmovie.addquery;
  });

  useEffect(() => {
    if (query) {
      const searchMoviesApicall = () => {
        axios
          .get(
            "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
            apikey
          )
          .then((response) => {
            console.log(response?.data);
            dispatch(getsearchmovie(response?.data?.results));
          })
          .catch((error) => {
            console.log(error, "oops... Someting wrong!!!");
          });
      };
      searchMoviesApicall();
    }
  }, [query, dispatch]);
};

export default useSearchMovies;
