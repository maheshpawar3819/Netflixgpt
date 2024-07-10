import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesslice";
import gptReduce from "./gptslice";
const appstore = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt: gptReduce,
  },
});

export default appstore;
