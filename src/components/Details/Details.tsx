"use client"
import { AiFillPlusSquare,AiFillMinusCircle,AiFillDelete } from 'react-icons/ai';
import { useGetProductByIdQuery } from '@/redux/ProductApi/ProductApi';
import React, { useState } from 'react';
import Related from '../Related/Related';

   
   
//@ts-ignore
const Details = ({id}:{id : number}) => {
    const [productQuantity,setProductQuantity] = useState<number>(1)
    const {data,isError,isLoading} = useGetProductByIdQuery(id)
    const addquantityhandler = ()=>{
        if(data?.result.quantity > productQuantity){
          setProductQuantity(productQuantity + 1)
        }
    }
    const decrementQuantityhandler = ()=>{
        if( productQuantity > 1){
          setProductQuantity(productQuantity - 1)
        }
    }
  
     //@ts-ignore
    return (
        <div className='lg:container md:container px-3 py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 border py-10 '>
                <div>
                    <img src={data?.result?.picture} className='w-full h-96'></img>
                </div>
                <div className=''>
                    <h1 className='text-md font-semibold'>Name : {data?.result?.name}</h1>
                    <p className='py-3'>About :{data?.result?.descriptions?.slice(0,160)}</p>
                    <h1>Category : {data?.result?.category?.name}</h1>
                    <h1 className='py-3'>Size : {data?.result?.size}</h1>
                    <h1>Brand : {data?.result?.brand}</h1>
                    <h1 className='py-3'>Available : {data?.result?.quantity}</h1>
                   
                    <h1>Price : ${parseInt(data?.result?.price || "0") * parseInt(productQuantity.toString())}</h1>

                    <h1 className='py-3'>quantity : {productQuantity}</h1>
                          <div className='flex justify-start'>
                               <button className='py-2   text-3xl my-1 block'onClick={addquantityhandler} ><AiFillPlusSquare></AiFillPlusSquare></button>
                               <button className='py-2   text-3xl my-1 mx-5 block' onClick={decrementQuantityhandler}><AiFillMinusCircle></AiFillMinusCircle></button>
                         
                          </div>
                 

                </div>
            </div>
            <div className='py-10'>
                <p>{data?.result?.descriptions}</p>
            </div>
            <div className='flex justify-center items-center align-middle'>
                <h1 className='text-center font-bold py-3  text-red-800 text-xl'>RELATED PRODUCTS</h1>
                
            </div>
            <div className='flex justify-center items-center align-middle'>
               <div className='bg-gray-600 h-1 w-12' ></div>
            </div>
            
            <Related id={data?.result?.categoriID}/>
        </div>
    );
};

export default Details;