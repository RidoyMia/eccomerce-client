import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const AuthApi = createApi({
  reducerPath: "authapi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:2100/api/v1/user' }),

  endpoints: (builder) => ({
    createAuth: builder.mutation({
       
      query: (data) => ({
     
        url: '/create',
        method: 'POST',
        body: data, 
      })
     
      
    }),
  }),
});

export const {useCreateAuthMutation} = AuthApi









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