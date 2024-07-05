import Header from "./Header";
import useNowplayingmovies from "../Hooks/useNowplayingmoves";
import Maincontainerb from "./Maincontainerb";
import Secondarycontainerb from "./Secondarycontainerb";
const Browse = () => {
  useNowplayingmovies();

  return (
    <div>
      <div>
        <Header />
        <Maincontainerb />
        <Secondarycontainerb />
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
