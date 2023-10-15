import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const categoryApi = createApi({
    reducerPath : 'category',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:2100/api/v1/category'}),
    endpoints : (builder) =>({
        getCategory : builder.query({
            query : (page) => `/getAll?page=${page}`
        })
    })
})

export const {useGetCategoryQuery} = categoryApi