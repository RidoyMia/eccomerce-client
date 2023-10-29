"use client"
import Loading from '@/components/Loading/Loading';
import { useDeletedSellerMutation, useGetAllsellerQuery } from '@/redux/SellerApi/SellerApi';
import React, { useState } from 'react';

const page = () => {
    const [deletedProductFunc ,{isLoading}] = useDeletedSellerMutation()
    const [page,setPage] = useState(1)
    const{data} = useGetAllsellerQuery(page);
    console.log(data,'of seller');
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
        <th>Role</th>
      <th>Email</th>
      <th>District</th>
      
      </tr>
    </thead>
    <tbody>
      
     {
        data?.result?.map((p:any) =>   <tr>
            
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-32 h-32">
                    <img src={p?.profile} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            
            <td>{p?.name}</td>
            <th>
              <p className="">{p?.role}</p>
            </th>
            <th>
              <p className="">${p?.email}</p>
            </th>
            <th>
              <p className="">${p?.district}</p>
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