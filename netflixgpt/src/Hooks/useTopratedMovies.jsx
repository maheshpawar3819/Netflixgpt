import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { addTopratedMovies } from "../Utils/moviesslice";
import { apikey } from "../Utils/Constants";

const useTopratedMovies = () => {
  const dispatch = useDispatch();

  const toprated = useSelector((store) => {
    return store.movies.addTopratedMovies;
  });

  const fetchletestmovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        apikey
      )
      .then((response) => {
        // console.log(response?.data?.results);
        dispatch(addTopratedMovies(response?.data?.results));
      })
      .catch((error) => {
        console.log("error was found", error);
      });
  };

  useEffect(() => {
    !toprated && fetchletestmovies();
  }, []);
};

export default useTopratedMovies;
