import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const searchmovies = createSlice({
  name: "searchmovies",
  initialState: {
    addsearchmovie: null,
    query: "",
  },
  reducers: {
    getsearchmovie: (state, action) => {
      state.addsearchmovie = action.payload;
    },
    addquery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { getsearchmovie, addquery } = searchmovies.actions;
export default searchmovies.reducer;
