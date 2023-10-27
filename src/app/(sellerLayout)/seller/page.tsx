"use client"
import Loading from '@/components/Loading/Loading';
import { authContext } from '@/components/hooks/userHooks';
import { useGetProductOfSellerQuery } from '@/redux/ProductApi/ProductApi';
import { useGetReviewOFEachSellerQuery } from '@/redux/commentApi/CommentApi';
import { useGetEachSellerOrderQuery } from '@/redux/orderApi/OrderApi';

import React, { useContext, useEffect, useState } from 'react';

const page = () => {
    const [accesstoken,setAccesstoken] = useState<string>()
    const [orders,setOders] = useState()
    //@ts-ignore
    const {user} = useContext(authContext)
    const [page,setPage] = useState<number>(1);
    useEffect(()=>{
        const token = localStorage.getItem('ACCESSTOKEN');
        //@ts-ignore
        setAccesstoken(token)
    },[user,accesstoken]);
   
    const{data:Product,isLoading,isError} = useGetProductOfSellerQuery({accesstoken,page}) 
   
    const { data: Order, isLoading:isload, isError:iserror } = useGetEachSellerOrderQuery( accesstoken as string); 
     
    const {data:Review,isLoading:isReviewLoading} = useGetReviewOFEachSellerQuery(accesstoken as string)
    console.log(Review?.result?.length,'as review')
   
    if(isLoading){
        return <Loading></Loading>
    }
    if(isError){
        console.log(isError,'error')
    }
    return (
        <div>
           <div className="ml-5">
           <div className="grid grid-cols-2 lg:grid-cols-3 md:col-span-3 gap-x-2 xl:grid-cols-3  gap-y-8">
            <div className="text-center cursor-pointer  py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black" >
                
                <h1  className="font-semibold">{Order?.result?.result?.orders?.length}</h1>
                <p className="text-sm md:text-md lg:text-lg">Total-orders</p>
            </div>
            <div className="text-center cursor-pointer  py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black" >
                <h1  className="font-semibold">{Product?.result?.total}</h1>
                <p className="text-sm md:text-md lg:text-lg">Total-products</p>
            </div>
            <div className="text-center  cursor-pointer py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black " >
                             <h1  className="font-semibold">${Order?.result?.result?.Amount}</h1>
                <p className="text-sm md:text-md lg:text-lg">Total-Amount</p>
            </div>
            <div className="text-center  cursor-pointer py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black " >
                <h1  className="font-semibold">{Review?.result?.length}</h1>
                <p className="text-sm md:text-md lg:text-lg">Total-Review</p>
            </div>
           </div>
        </div>
        </div>
    );
};

export default page;