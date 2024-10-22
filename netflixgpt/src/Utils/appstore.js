import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesslice";
import gptReducer from "./gptslice";
import configReducer from "./configslice";
import searchmovieReducer from "./searchslice";
import authReducer from "./authSlice";

const appstore = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    searchmovie: searchmovieReducer,
    auth:authReducer,
  },
});

export default appstore;
