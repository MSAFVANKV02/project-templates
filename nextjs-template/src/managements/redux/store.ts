// store/index.ts
import { configureStore } from "@reduxjs/toolkit";

import loaderReducer from "./actions/loader-slice";



export const store = configureStore({
  reducer: {
    loader:loaderReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
