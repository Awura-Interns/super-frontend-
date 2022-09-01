import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app/app_slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
