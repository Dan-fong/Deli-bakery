import { configureStore } from "@reduxjs/toolkit";
import branchSlice from "./slice/branchSlice";
import { ecApi } from '../services/ecApi'
import authSlice from "./slice/authSlice";

export const store = configureStore({
    reducer: {
        branchSlice,
        [ecApi.reducerPath]: ecApi.reducer,
        authSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ecApi.middleware)
})