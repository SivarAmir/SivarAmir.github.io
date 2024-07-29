import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../src/features/nav-show/navShowSlice";
export default configureStore({
  reducer: {
    navShow: showReducer,
  },
});
