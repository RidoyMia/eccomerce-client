"use client"
import Loading from '@/components/Loading/Loading';
import { useGetEachSellerOrderQuery } from '@/redux/orderApi/OrderApi';
import React from 'react';

const page = () => {
   
    const accesstoken = localStorage.getItem('ACCESSTOKEN')
    const {data,isLoading} = useGetEachSellerOrderQuery(accesstoken)
    console.log(data?.result?.result?.orders,'for orders')
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
            <div className='container'>
            <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr className='text-white'>
       
        <th>Picture</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
       
      </tr>
    </thead>
    <tbody>
      
     {
        data?.result?.result?.orders?.map((p:any) =>   <tr>
            
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
              <p className="">{p?.quantity}</p>
            </th>
            <th>
              <p className="">${parseInt(p?.product?.price) * parseInt(p?.quantity)}</p>
            </th>
            
          </tr> )
     }
    
   
    </tbody>
    
   
    
  </table>
</div>
            </div>
            </div>
        </div>
    );
};

export default page;