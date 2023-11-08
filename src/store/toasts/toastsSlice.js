import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const toasts = createSlice({
  name: "toast",
  initialState,
  reducers: {},
});

export default toasts.reducer;
