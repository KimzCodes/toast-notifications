import { createAsyncThunk } from "@reduxjs/toolkit";

const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(`http://localhost:5005/products`);
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export default getProducts;
