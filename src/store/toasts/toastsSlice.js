import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const toasts = createSlice({
  name: "toasts",
  initialState,
  reducers: {},
});

export default toasts.reducer;
