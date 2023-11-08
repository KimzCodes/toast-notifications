import { configureStore } from "@reduxjs/toolkit";
import products from "./products/productsSlice";
import toasts from "./toasts/toastsSlice";

const store = configureStore({
  reducer: {
    products,
    toasts,
  },
});

export default store;
