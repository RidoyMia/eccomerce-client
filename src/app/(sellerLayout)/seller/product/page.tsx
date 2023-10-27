"use client"
import { authContext } from '@/components/hooks/userHooks';
import { useGetProductOfSellerQuery } from '@/redux/ProductApi/ProductApi';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const page = () => {
    const router = useRouter()
    
    //@ts-ignore
    const {user} = useContext(authContext)
    const [page,setPage] = useState<number>(1);
    const [totalPages,setTotalPages] = useState(0)
 
        const accesstoken = localStorage.getItem('ACCESSTOKEN');
       
    const{data,isLoading,isError} = useGetProductOfSellerQuery({accesstoken,page}) ;
    useEffect(()=>{
        if(data?.result?.result.length > 0){
          
            setTotalPages(Math.ceil(data?.result?.total / 10))
       }
    },[data]);
    let pageArray = []
    if(totalPages > 0){
        for (let i = 0; i < totalPages; i++) {
            pageArray.push(i)
            
        }
    }
    console.log(data?.result,totalPages,'from product')
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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
     {
        data?.result?.result?.map((p:any) =>   <tr>
            
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-32 h-32">
                    <img src={p?.picture} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            
            <td>{p?.name}</td>
            <th>
              <p className="">{p?.quantity}</p>
            </th>
            <th>
              <p className="">${p?.price}</p>
            </th>
            <th>
              <div className='flex justify-between gap-x-2'>

                <button className=' bg-yellow-700 py-1 px-2 text-white rounded-sm' onClick={()=>router.push(`/seller/update/${p?.id}`)}>Update</button>
                <button className=' bg-yellow-700 py-1 px-2 text-white rounded-sm' >Delete</button>
              </div>
            </th>
          </tr> )
     }
    
   
    </tbody>
    
   
    
  </table>
</div>
            </div>
            </div>

            <div className='flex justify-center items-center'>
            {
                pageArray?.map(p => <button className={`py-1 px-2 font-semibold ${p + 1 == page? 'bg-blue-700 text-white' : 'bg-blue-50 text-black'}`} key={p +1} onClick={()=>setPage(p + 1)}>{p + 1}</button>)
            }
            </div>
        </div>
    );
};

export default page;