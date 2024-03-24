import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cartProducts : []
}

const cartProducts = createSlice({
  name:'purchased',
  initialState : INITIAL_STATE,
  reducers: {
    updatePurchasedItems: (state, action) => {
      state.cartProducts = [...state.cartProducts, action.payload]
    }
  }
})

export const {updatePurchasedItems} = cartProducts.actions;
export default cartProducts.reducer;