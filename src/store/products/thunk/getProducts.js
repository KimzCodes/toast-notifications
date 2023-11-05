import { createAsyncThunk } from "@reduxjs/toolkit";
import getProductsAPI from "../../../services/getProductsAPI";

const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const result = await getProductsAPI();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default getProducts;
