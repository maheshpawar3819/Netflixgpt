import Header from "./Header";
import useNowplayingmovies from "../Hooks/useNowplayingmoves";
import Maincontainerb from "./Maincontainerb";
import Secondarycontainerb from "./Secondarycontainerb";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopratedMovies from "../Hooks/useTopratedMovies";
import useUpcoming from "../Hooks/useUpcoming";
import Gptsearch from "./Gptsearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showsearchsearch);

  useNowplayingmovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcoming();
  return (
    <div>
      <div>
        <Header />
        {showGpt ? (
          <Gptsearch />
        ) : (
          <>
            <Maincontainerb />
            <Secondarycontainerb />
          </>
        )}

        {/* {
        
        Plan:
            this page was devided into two sections 
      Mainconstainer:
                     section 1-
                               -video background
                               -video title
                     section 2-
                                -movies linst
                                -cards

        } */}
      </div>
    </div>
  );
};

export default Browse;
