import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./categoryApi/CategoryApi";
import { AuthApi } from "./AuthApi/AuthApi";

const reduxStore = configureStore({
    reducer : {
    [categoryApi.reducerPath] : categoryApi.reducer,
    [AuthApi.reducerPath] : AuthApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware,AuthApi.middleware),
    
})

export default reduxStore