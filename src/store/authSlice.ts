import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  isLoggedIn: boolean;
  name: string;
}
const initialState: IAuth = { isLoggedIn: false, name: "Bashar Ayman" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
