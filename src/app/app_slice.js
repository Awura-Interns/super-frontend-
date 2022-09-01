import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //TODO: Find more secure way to save the accessToken
  accessToken: localStorage.getItem("accessToken"),
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    updateAccessToken: (state, actions) => {
      state.accessToken = actions.payload;
    },
  },
});

export const { updateAccessToken } = appSlice.actions;

export default appSlice.reducer;
