import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesslice";
import gptReducer from "./gptslice";
import configReducer from "./configslice";
const appstore = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appstore;
