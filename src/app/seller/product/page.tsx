"use client"
import Loading from '@/components/Loading/Loading';
import { useGetProductOfSellerQuery } from '@/redux/ProductApi/ProductApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
  const router = useRouter()
    const [loading,setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [totalPages,setTotaPages] = useState(0)
    const token = localStorage.getItem('ACCESSTOKEN');
    const [product,setProduct] = useState([])
    const {data,isLoading} = useGetProductOfSellerQuery({token,page});
    console.log(page,'page')
    useEffect(() => {
        setLoading(true)
        if (data?.result?.total) {
           setProduct(data?.result?.result)
            setTotaPages(Math.ceil(data?.result?.total / 10));
           
            setLoading(false)
            
        }
    }, [data,page]);

    let pageArray = [];
    for (let i = 0; i < totalPages; i++) {
        pageArray.push(i)
        
    }
    const updateHandler = (id:any)=>{
      router.push(`/update/${id}`)
    }
   if(loading || isLoading){
    return <Loading></Loading>
   }
   console.log(data?.result,product,'from seller products')
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
                <Link className='bg-yellow-700 py-1 px-2 text-white rounded-sm' href={`/seller/update/${p?.id}`}>update</Link>
                {/* <button className=' bg-yellow-700 py-1 px-2 text-white rounded-sm' onClick={()=>updateHandler(p?.id) }>Update</button> */}
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