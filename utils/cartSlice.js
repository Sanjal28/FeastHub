import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // configurations
  
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearItem: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;

// addItem,removeItem,clearItem => actions which call reducers
// reducers modifies the slice
// redux toolkit
