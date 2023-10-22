import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const AuthApi = createApi({
  reducerPath: "authapi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://eccomerce-server-umber.vercel.app/api/v1' }),

  endpoints: (builder) => ({
    createAuth: builder.mutation({
       
      query: (data) => ({
     
        url: '/user/create',
        method: 'POST',
        body: data, 
      })
     
      
    }),
    CreateSeller: builder.mutation({
       
      query: (data) => ({
     
        url: '/seller/create',
        method: 'POST',
        body: data, 
      })
     
      
    }),
    getUser : builder.mutation({
      query : (data)=> ({
        url: '/user/login',
        method: 'POST',
        body: data, 
      })
    })
  }),

});

export const {useCreateAuthMutation,useGetUserMutation,useCreateSellerMutation} = AuthApi









// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// export const categoryApi = createApi({
//     reducerPath : 'category',
//     baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:2100/api/v1/category'}),
//     endpoints : (builder) =>({
//         getCategory : builder.query({
//             query : (page) => `/getAll?page=${page}`
//         }),
//         createAuth: builder.mutation({
//             query: (data) => ({
//               url: '/create',
//               method: 'POST',
//               body: data, 
//             })
//     })
// })

// export const {useGetCategoryQuery} = categoryApi