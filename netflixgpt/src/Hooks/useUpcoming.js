import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { addUpcoming } from "../Utils/moviesslice";
import { apikey } from "../Utils/Constants";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const upcomingmovies = useSelector((store) => {
    return store.movies.addUpcoming;
  });

  const fetchletestmovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        apikey
      )
      .then((response) => {
        // console.log(response?.data?.results);
        dispatch(addUpcoming(response?.data?.results));
      })
      .catch((error) => {
        console.log("error was found", error);
      });
  };

  useEffect(() => {
    !upcomingmovies && fetchletestmovies();
  }, []);
};

export default useUpcoming;
