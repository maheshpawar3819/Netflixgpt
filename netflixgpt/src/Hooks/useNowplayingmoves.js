import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../Utils/moviesslice";
import { apikey } from "../Utils/Constants";

const useNowplayingmovies = () => {
  const dispatch = useDispatch();

  const nowplayingmovies = useSelector((store) => {
    return store.movies.addNowPlayingMovies;
  });

  const fetchletestmovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        apikey
      )
      .then((response) => {
        // console.log(response?.data?.results);
        dispatch(addNowPlayingMovies(response?.data?.results));
      })
      .catch((error) => {
        console.log("error was found", error);
      });
  };

  useEffect(() => {
    !nowplayingmovies && fetchletestmovies();
  }, []);
};

export default useNowplayingmovies;
