import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./categoryApi/CategoryApi";
import { AuthApi } from "./AuthApi/AuthApi";
import { productApi } from "./ProductApi/ProductApi";
import  cartSlice  from "./addtocartSlice/CartSlice";

const reduxStore = configureStore({
    reducer : {
        //@ts-ignore
    cart : cartSlice,
    [categoryApi.reducerPath] : categoryApi.reducer,
    [AuthApi.reducerPath] : AuthApi.reducer,
    [productApi.reducerPath] : productApi.reducer
    },
    //@ts-ignore
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware,AuthApi.middleware,productApi.middleware),
    
})

export default reduxStore