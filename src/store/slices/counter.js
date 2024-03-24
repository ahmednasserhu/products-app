import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  counter_val: 0,
};

const counter = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter: (state) => {
      state.counter_val = state.counter_val + 1;
    },
    decrementCounter: (state) => {
      state.counter_val = state.counter_val - 1;
    },
    resetCounter: (state) => {
      state.counter_val = 0;
    },
    incrementByValue: (state, action) => {
      state.counter_val = state.counter_val + action.payload;
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  resetCounter,
  incrementByValue,
} = counter.actions;

export default counter.reducer;
