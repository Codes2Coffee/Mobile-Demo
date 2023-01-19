import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    ids: {},
  },
  reducers: {
    addProduct: (state, action) => {
      state.ids.push(action.payload.id);
    },
    editProduct: (state, action) => {},
  },
});
