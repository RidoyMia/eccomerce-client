"use client"
import Loading from "@/components/Loading/Loading";
import { authContext } from "@/components/hooks/userHooks";
import { useGetProductOfSellerQuery } from "@/redux/ProductApi/ProductApi";
import { useGetReviewOFEachSellerQuery } from "@/redux/commentApi/CommentApi";
import { useGetAllOrdersQuery, useGetEachSellerOrderQuery } from "@/redux/orderApi/OrderApi";
import { useRouter } from "next/navigation";
import { useContext,useEffect,useState } from "react";
import { useSelector } from "react-redux";


const page = () => {
    const [page,setPage] = useState(1)
    const [loading,setLoading] = useState(false)
   const [token,setToken] = useState<string>()
    //@ts-ignore
    const {user} = useContext(authContext)
    useEffect(()=>{
        const accesstoken = localStorage.getItem("ACCESSTOKEN")
        //@ts-ignore
        setToken(accesstoken)
    },[])
    //@ts-ignore
   
    const {data,isLoading} = useGetProductOfSellerQuery({token,page});
    //@ts-ignore
    const {data:order,isLoading:load} = useGetEachSellerOrderQuery(token)

    //@ts-ignore
    const {data:Reviews,isLoading:reLoading} = useGetReviewOFEachSellerQuery(token)
    const router = useRouter()
 console.log(data,token,Reviews,"of orders product")

  if(loading || isLoading || reLoading){
    return <Loading></Loading>
  }
   
    return (
        <div className="ml-5">
           <div className="grid grid-cols-2 lg:grid-cols-3 md:col-span-3 gap-x-2 xl:grid-cols-3  gap-y-8">
            <div className="text-center cursor-pointer  py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black" >
                <h1>{order?.result?.orders?.length}</h1>
                <p className="text-sm md:text-md lg:text-lg">Total-orders</p>
            </div>
            <div className="text-center cursor-pointer  py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black">
                <h1>{data?.result?.total}</h1>
                <p className="text-sm md:text-md lg:text-lg">Total-Products</p>
            </div>
            <div className="text-center  cursor-pointer py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black ">
                <h1>${order?.result?.Amount}</h1>
                <p className="text-sm md:text-md lg:text-lg">Total-Amount</p>
            </div>
            <div className="text-center  cursor-pointer py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black " >
                <h1>{Reviews?.result?.length}</h1>
                <p className="text-sm md:text-md lg:text-lg">Total-Reviews</p>
            </div>
           </div>
        </div>
    );
};

export default page;