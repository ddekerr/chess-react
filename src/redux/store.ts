import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { boardReduser } from "./boardSlice";

const store = configureStore({
  reducer: {
    board: boardReduser,
  },
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
