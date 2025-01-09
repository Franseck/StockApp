import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;


/*
font-family: "Fredericka the Great";
font-family: "Nothing You Could Do";
  font-family: "Special Elite" ;
  font-family: "Wallpoet" ;
*/