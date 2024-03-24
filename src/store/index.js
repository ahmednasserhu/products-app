import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";
import profile from "./slices/profile";

export default configureStore({
  reducer: {
    counter,
    profile,
  },
});
