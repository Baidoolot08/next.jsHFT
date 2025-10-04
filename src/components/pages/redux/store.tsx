import { configureStore } from "@reduxjs/toolkit";
import nftReducer from "./Slice";

export const store = configureStore({
  reducer: {
    product: nftReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
