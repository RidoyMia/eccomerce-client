import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentApi = createApi({
reducerPath : 'comment',
tagTypes : ['userCommnet'],
baseQuery : fetchBaseQuery({baseUrl : 'https://eccomerce-server-umber.vercel.app/api/v1/review'}),
endpoints : builder =>({
    getComment : builder.query({
        query : (id) => `/${id}`,
        providesTags : ["userCommnet"]
    }),

    postComment : builder.mutation({
        query : ({data}) => ({
            url : `/create`,
            method : 'POST',
            body : data
        }),
        invalidatesTags : ["userCommnet"]
    }),
    getReviewOFEachSeller : builder.query({
        query : (accesstoken) => ({
            url : `/seller`,
            method : 'GET',
            headers : {
                accesstoken
            }
        })
    })
})
})

export const { useGetCommentQuery,usePostCommentMutation,useGetReviewOFEachSellerQuery} = commentApi;