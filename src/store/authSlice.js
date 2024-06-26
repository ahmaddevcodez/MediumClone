import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SignIn: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    SignOut: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { SignIn, SignOut } = authSlice.actions;
export default authSlice.reducer;
