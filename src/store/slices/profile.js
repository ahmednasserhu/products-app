import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  fullName: "",
  email: "",
};

const profile = createSlice({
  name: "profile",
  initialState: INITIAL_STATE,
  reducers: {
    changeName: (state, action) => {
      state.fullName = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { changeName, changeEmail } = profile.actions;
export default profile.reducer;
