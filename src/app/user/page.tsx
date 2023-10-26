"use client"
import Loading from "@/components/Loading/Loading";
import { useGetAllOrdersQuery } from "@/redux/orderApi/OrderApi";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";


const page = () => {
    const accesstoken = localStorage.getItem("ACCESSTOKEN")
    const {data,isLoading} = useGetAllOrdersQuery(accesstoken)
    
    //@ts-ignore
    const card = useSelector((state)=>state.cart);
    const router = useRouter()
    const pending =()=> {
      router.push('/user/pending')
    }
    const complete = ()=>{
      router.push('/user/completed')
    }
    const cart = ()=>{
      router.push('/user/cart')   
    }
    if(isLoading){
      return <Loading></Loading>
    }
    return (
        <div className="ml-5">
           <div className="grid grid-cols-2 lg:grid-cols-3 md:col-span-3 gap-x-2 xl:grid-cols-3  gap-y-8">
            <div className="text-center cursor-pointer  py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black" onClick={pending}>
                <h1>{data?.result?.length}</h1>
                <p className="text-sm md:text-md lg:text-lg">Pending orders</p>
            </div>
            <div className="text-center cursor-pointer  py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black" onClick={complete}>
                <h1>9</h1>
                <p className="text-sm md:text-md lg:text-lg">Complete orders</p>
            </div>
            <div className="text-center  cursor-pointer py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black " onClick={cart}>
                <h1>{card?.products?.length}</h1>
                <p className="text-sm md:text-md lg:text-lg">Your cart</p>
            </div>
           </div>
        </div>
    );
};

export default page;