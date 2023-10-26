import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "./categoryApi/CategoryApi";
import { AuthApi } from "./AuthApi/AuthApi";
import { productApi } from "./ProductApi/ProductApi";
import  cartSlice  from "./addtocartSlice/CartSlice";
import { commentApi } from "./commentApi/CommentApi";
import { orderApi } from "./orderApi/OrderApi";

const reduxStore = configureStore({
    reducer : {
        //@ts-ignore
    cart : cartSlice,
    [categoryApi.reducerPath] : categoryApi.reducer,
    [AuthApi.reducerPath] : AuthApi.reducer,
    [productApi.reducerPath] : productApi.reducer,
    [commentApi.reducerPath] : commentApi.reducer,
    [orderApi.reducerPath] : orderApi.reducer
    },
    //@ts-ignore
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware,AuthApi.middleware,productApi.middleware,commentApi.middleware,orderApi.middleware),
    
})

export default reduxStore