import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// https://eccomerce-server-umber.vercel.app/api/v1/product
export const productApi = createApi({
    reducerPath : 'products',
    tagTypes : ['product'],
    baseQuery : fetchBaseQuery({baseUrl : 'https://eccomerce-server-umber.vercel.app/api/v1/product'}),
    endpoints : (builder)=>({
        getFeautes : builder.query({
            query : () =>`/features`
        }),
        getProductById : builder.query({
            query : (id)=> `/${id}`
        }),
        getAllproducts : builder.query({
            
            query : ({pages,price})=> `/All?page=${pages}&price=${price}`,
            providesTags : ['product']
        }),
       getBySearch : builder.query({
        query : (search)=>`All?searchText=${search}`
       }),
        getAllByCategory : builder.query({
            query : (id) => `/category/${id}`,
            providesTags : ['product']
        }),
        updateProduct : builder.mutation({
            query : ({id,updateData}) =>({
                url : `/${id}`,
                method : 'PATCH',
                body : updateData
            })
        }),
        getProductOfSeller :builder.query({
            query : ({page,
                accesstoken,search}) => ({
                url : `/seller?page=${page}`,
                method : 'GET',
                headers : {
                    accesstoken
                }
            }),
            providesTags : ['product']
        }),
        addproduct : builder.mutation({
            query : (data) => ({
                url : `/create`,
                method : 'POST',
                body : data
            })
        }),
        deletedProduct : builder.mutation({
            query : (id) =>({
                url : `/delete/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags : ['product']
        })
       
        
    })
})

 export const {useGetFeautesQuery,useGetAllproductsQuery,useGetAllByCategoryQuery,useGetProductByIdQuery,useGetBySearchQuery,useGetProductOfSellerQuery,useUpdateProductMutation,useAddproductMutation,useDeletedProductMutation} = productApi