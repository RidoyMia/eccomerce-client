import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// https://eccomerce-server-umber.vercel.app/api/v1/product
export const productApi = createApi({
    reducerPath : 'products',
    baseQuery : fetchBaseQuery({baseUrl : 'https://eccomerce-server-umber.vercel.app/api/v1/product'}),
    endpoints : (builder)=>({
        getFeautes : builder.query({
            query : () =>`/features`
        }),
        getProductById : builder.query({
            query : (id)=> `/${id}`
        }),
        getAllproducts : builder.query({
            
            query : ({pages,price})=> `/All?page=${pages}&price=${price}`
        }),
       getBySearch : builder.query({
        query : (search)=>`All?searchText=${search}`
       }),
        getAllByCategory : builder.query({
            query : (id) => `/category/${id}`
        }),
        getProductOfSeller :builder.query({
            query : ({page,
                token:accesstoken,search}) => ({
                url : `/seller?page=${page}`,
                method : 'GET',
                headers : {
                    accesstoken
                }
            })
        })
        
    })
})

 export const {useGetFeautesQuery,useGetAllproductsQuery,useGetAllByCategoryQuery,useGetProductByIdQuery,useGetBySearchQuery,useGetProductOfSellerQuery} = productApi