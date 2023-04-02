import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layoutSlice";
import newsSlice from "./newsSlice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    news: newsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
