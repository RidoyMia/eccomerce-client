import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const orderApi = createApi({
    reducerPath : "orders",
    tagTypes : ["order"],
    baseQuery : fetchBaseQuery({baseUrl : `https://eccomerce-server-umber.vercel.app/api/v1/order`}),
    endpoints : builder=>({
      orders : builder.mutation({
        query : (data) => ({
            url : '/create',
            method : 'POST',
            body : data
        }),
        invalidatesTags : ['order']
      }),
     getAllOrders : builder.query({
        query : (accesstoken) =>({
            url : '/user',
            method : 'GET',
            headers : {
              accesstoken
            }
        }),
        providesTags : ["order"]
     }),
     deleteOrder : builder.mutation({

      //@ts-ignore
      query : ({id,email})=> ({
        url : `/${id}`,
        method : 'DELETE',
        
        headers : {
          email
        }
      }),
      invalidatesTags : ["order"]
     }),
     getEachSellerOrder : builder.query({
      query : (accesstoken) => ({
        url : `/seller`,
        method : 'GET',
        headers : {
          accesstoken
        }
      })
     }),
     getOrderByDay : builder.query({
      query : (accesstoken) =>({
        url : `/admin`,
        method : 'GET',
        headers : {
          accesstoken
        }
      }),
     
     })
    })
})

export const {useOrdersMutation,useGetAllOrdersQuery,useDeleteOrderMutation,useGetEachSellerOrderQuery,useGetOrderByDayQuery} = orderApi