import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesslice"

const appstore = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default appstore;
