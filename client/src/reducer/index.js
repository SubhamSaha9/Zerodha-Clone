import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import stockSlice from "../slices/stockSlice";


const rootReducer = combineReducers({
    auth: authSlice,
    buyStock: stockSlice
});

export default rootReducer;