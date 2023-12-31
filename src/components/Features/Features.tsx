"use client"
import { useGetFeautesQuery } from '@/redux/ProductApi/ProductApi';
import { addTocart } from '@/redux/addtocartSlice/CartSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Features = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  //@ts-ignore
  const count = useSelector((state) => state.cart);
 
    const {data,error,isLoading} = useGetFeautesQuery(undefined);
    
    const addtocart = (f:any) =>{
          
           dispatch(addTocart(f))
           
        
           
    }
    return (
        <div className=''>
            <div className='pb-20'>
            <div className='flex justify-center items-center align-middle'>
                <h1 className='text-center font-bold py-3  text-red-800 text-xl'>FEATURES PRODUCTS</h1>
                
            </div>
            <div className='flex justify-center items-center align-middle'>
               <div className='bg-gray-600 h-1 w-12' ></div>
            </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 gap-y-2 xl:gap-y-4 xl:gap-x-4 lg:gap-y-8 gap-x-1 md:gap-x-8 md:gap-y-8'>
                {
                    data?.result?.map((f:any) => <div key={f?.id} className="card  w-40 h-full lg:h-full  lg:w-72 md:w-60 bg-base-100 xl:w-full shadow-xl">
                    <figure><img src={f?.picture} className='w-full  h-48 lg:h-64'  alt="Shoes" /></figure>
                    <div className=" py-5 px-1 lg:px-4 xl:px-4 md:px-4">
                      <h2 className="font-semibold text-md">
                       {f?.name}
                      
                      </h2>
                      <p>{f?.descriptions.slice(0,50)}..</p>
                      <div className='flex justify-between pt-2'>
                        <p className='font-semibold'>Price : ${f?.price} <span className=' ml-4 text-sm line-through'>${f?.oldPrice}</span></p>
                        
                      </div>
                     <div className='flex py-2 justify-start items-center'>
                      <p>Ratings</p>
                      <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
                     </div>


                     
                      <div className="flex xl:flex lg:flex md:flex sm:flex justify-between items-center lg:justify-end mt-4">
                      
                        <button className='category text-sm py-1 px-2 rounded-md mt-3 text-white font-semibold' onClick={()=>addtocart(f)}>Add-cart</button>
                        <button className='category text-sm py-1 px-2 rounded-md mt-3 text-white font-semibold lg:ml-2 'onClick={()=> router.push(`/shop/${f?.id}`)}>details</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Features;