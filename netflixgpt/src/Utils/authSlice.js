import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggin: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      (state.isLoggin = true);
        (state.user = action.payload);
        localStorage.setItem("isLoggin", "true");
        localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      (state.isLoggin = false);
        (state.user = null);
        localStorage.removeItem("isLoggin");
        localStorage.removeItem("user");
    },
    setLogin: (state, action) => {
      state.isLoggin = action.payload.isLoggin;
      state.user = action.payload.user; //Set user details from payload
    },
  },
});

export const { login, logout, setLogin } = authSlice.actions;
export default authSlice.reducer;
