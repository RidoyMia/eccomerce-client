"use client"
import { useGetCategoryQuery } from '@/redux/categoryApi/CategoryApi';
import Image from 'next/image';
import React, { useState } from 'react';
import banner from "../../images/bannerthree.png"
import { useRouter } from 'next/router';


const Category = () => {
    const router = useRouter()
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetCategoryQuery(page);

  if (isLoading) {
    // Loading state
    return <p>Loading...</p>;
  }

  const Category = (id: number) =>{
        router.push(`/category/${id}`)
  }



  return (
    <div className='py-20'>
         <h2 className='text-center text-xl font-semibold'>Categories</h2>
        <div className='flex py-20 flex-wrap justify-center'>
       
      {data?.result?.result?.map((r:any) => (
        <button onClick={()=>Category(r?.id)} className='m-2 bg-base-100 rounded-md hover:bg-base-300 border  border-gray-500' key={r.id}>
          <button className='  px-2 py-2 shadow-2xl'>
            <div>
           
              <img src={r?.picture} width={100} height={150} ></img>
            </div>
          </button>
        </button>
      ))}
    </div>
    </div>
  );
};

export default Category;
