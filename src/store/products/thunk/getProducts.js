import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("http://localhost:5005/products");

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default getProducts;
