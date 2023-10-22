import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./categoryApi/CategoryApi";
import { AuthApi } from "./AuthApi/AuthApi";
import { productApi } from "./ProductApi/ProductApi";

const reduxStore = configureStore({
    reducer : {
    [categoryApi.reducerPath] : categoryApi.reducer,
    [AuthApi.reducerPath] : AuthApi.reducer,
    [productApi.reducerPath] : productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware,AuthApi.middleware,productApi.middleware),
    
})

export default reduxStore