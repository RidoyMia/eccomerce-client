"use client"
import Loading from '@/components/Loading/Loading';
import { authContext } from '@/components/hooks/userHooks';
import { useDeleteOrderMutation, useGetAllOrdersQuery } from '@/redux/orderApi/OrderApi';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const page = () => {
  const router = useRouter()
    //@ts-ignore
    const {user} = useContext(authContext)
    const [deletedFunc,isLoading] = useDeleteOrderMutation()
    const accesstoken = localStorage.getItem("ACCESSTOKEN")
    const {data,isLoading:loading} = useGetAllOrdersQuery(accesstoken);
    console.log(data?.result,user?.email,"from pending");
    const payment = (id:any) =>{
      router.push(`/update/${id}`)
    }
    const orderDeleteHandler = (id:number)=>{
        //@ts-ignore
        console.log(user?.email,id)
        const deletedInfo = {
          id,email:user?.email
        }
        //@ts-ignore
        deletedFunc(deletedInfo)
    }
   
    return (
        <div>
            <div className='container'>
            <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
       
        <th>Picture</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
     {
        data?.result?.map((p:any) =>   <tr>
            
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-32 h-32">
                    <img src={p?.product?.picture} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            
            <td>{p?.product?.name}</td>
            <th>
              <p className="">${parseInt(p?.product?.price) * parseInt(p?.quantity)}</p>
            </th>
            <th>
              <p className="">{p?.quantity}</p>
            </th>
            <th>
              <div className='flex justify-between gap-x-2'>
                <button className=' bg-yellow-700 py-1 px-2 text-white rounded-sm' onClick={()=>payment(p?.id)}>Pay</button>
                <button className=' bg-yellow-700 py-1 px-2 text-white rounded-sm' onClick={()=>orderDeleteHandler(p?.id)}>Delete</button>
              </div>
            </th>
          </tr> )
     }
    
   
    </tbody>
    
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
    
  </table>
</div>
            </div>
        </div>
    );
};

export default page;