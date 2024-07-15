import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesslice";
import gptReducer from "./gptslice";
import configReducer from "./configslice";
import searchmovieReducer from "./searchslice";
const appstore = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    searchmovie: searchmovieReducer,
  },
});

export default appstore;
