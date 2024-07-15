import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { addPopularMovies } from "../Utils/moviesslice";
import { apikey } from "../Utils/Constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularmovies = useSelector((store) => {
    return store.movies.addPopularMovies;
  });

  const fetchletestmovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        apikey
      )
      .then((response) => {
        // console.log(response?.data?.results);
        dispatch(addPopularMovies(response?.data?.results));
      })
      .catch((error) => {
        console.log("error was found", error);
      });
  };

  useEffect(() => {
    !popularmovies && fetchletestmovies();
  }, []);
};

export default usePopularMovies;
