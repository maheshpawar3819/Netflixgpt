import React, { useState } from "react";
import Header from "./Header";
import useNowplayingmovies from "../Hooks/useNowplayingmoves";
const Browse = () => {
  const [data, setData] = useState([]);

  useNowplayingmovies();

  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Browse;
