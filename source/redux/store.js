import { configureStore } from "@reduxjs/toolkit";
import branchSlice from "./slice/branchSlice";

export const store = configureStore({
    reducer: {branchSlice},
})