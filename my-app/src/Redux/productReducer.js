import { createSlice } from "@reduxjs/toolkit";

const productSlice =createSlice({
   name: "products",
  initialState: [],
  reducers:{
    addProducts: (state, action) => {
        return [...state, ...action.payload];
      },
  }
})
export const {addProducts} = productSlice.actions
export default productSlice.reducer