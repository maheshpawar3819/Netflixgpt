import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { bgvideosrc_front, bgvideosrc_back } from "../Utils/Constants";
import { youtubevTitle } from "../Utils/Constants";
import { youtubevallow } from "../Utils/Constants";
const Videobackground = ({ movieid }) => {
  //fetch trailer video & updating the store with trailer video data
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieid);
  const concatlinks = `${bgvideosrc_front}${trailerVideo?.key}${bgvideosrc_back}`;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video -mt-24"
        src={concatlinks}
        title={youtubevTitle}
        allow={youtubevallow}
      ></iframe>
    </div>
  );
};

export default Videobackground;
