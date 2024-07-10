import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
  name: "gpt",
  initialState: {
    showsearchsearch: false,
  },
  reducers: {
    toggleGptsearchview: (state) => {
      state.showsearchsearch = !state.showsearchsearch;
    },
  },
});

export const { toggleGptsearchview } = gptslice.actions;

export default gptslice.reducer;
