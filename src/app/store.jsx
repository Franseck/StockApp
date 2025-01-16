import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },

});
export default store;


/*
font-family: "Fredericka the Great";
font-family: "Nothing You Could Do";
  font-family: "Special Elite" ;
  font-family: "Wallpoet" ;
*/