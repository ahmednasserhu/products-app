import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";
import profile from "./slices/profile";
import purchased from "./slices/purchased";

export default configureStore({
  reducer: {
    counter,
    profile,
    purchased,
  },
});
