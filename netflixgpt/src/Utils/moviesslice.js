import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    addPopularMovies: null,
    addTopratedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },

    addTopratedMovies: (state, action) => {
      state.addTopratedMovies = action.payload;
    },

    addUpcoming: (state, action) => {
      state.addUpcoming = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopratedMovies,
  addUpcoming,
} = moviesSlice.actions;
export default moviesSlice.reducer;
