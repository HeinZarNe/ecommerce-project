import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { quantity: 0 },
  reducers: {
    update(state, action) {
      state.quantity = action.payload;
    },
    delete(state, action) {
      state.quantity = 0;
    },
  },
});
export const actions = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;
