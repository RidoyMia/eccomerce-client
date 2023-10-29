import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import build from "next/dist/build";

export  const sellerApi = createApi({
  reducerPath : 'seller',
  tagTypes : ['seller'],
  baseQuery : fetchBaseQuery({baseUrl : `https://eccomerce-server-umber.vercel.app/api/v1/seller`}),
  endpoints : builder=>({
       getAllseller : builder.query({
        query : (page) => `/All?page=${page}`,
        providesTags : ["seller"]
       }),
       deletedSeller : builder.mutation({
        query : (id)=>({
            url : `/${id}`,
            method : 'DELETE'
        }),
        invalidatesTags : ['seller']
       })
  })
})

export const {useGetAllsellerQuery,useDeletedSellerMutation} = sellerApi;