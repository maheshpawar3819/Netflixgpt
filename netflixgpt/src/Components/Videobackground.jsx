import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const Videobackground = ({ movieid }) => {
  //fetch trailer video & updating the store with trailer video data

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieid);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;
