import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../store/bookSlice";
import authReducer from "../store/authSlice";

export const store = configureStore({
  reducer: { book: bookReducer, auth: authReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
