import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import showsReducer from "./reducers/showsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    shows: showsReducer,
  },
});

export default store;
