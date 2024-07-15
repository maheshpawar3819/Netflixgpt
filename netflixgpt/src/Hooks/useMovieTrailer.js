import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { apikey } from "../Utils/Constants";
import { addTrailerVideo } from "../Utils/moviesslice";
const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();

  const movietrailer = useSelector((store) => {
    return store.movies.trailerVideo;
  });

  const getMovieVideos = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
        apikey
      )
      .then((response) => {
        const data = response.data.results;
        // console.log(data);
        const filterdata = data.filter((video) => {
          return video.type === "Trailer";
        });
        const trailer = filterdata.length ? filterdata[0] : data[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    !movietrailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
