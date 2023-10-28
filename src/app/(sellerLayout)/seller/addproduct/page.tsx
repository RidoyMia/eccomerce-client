"use client"
import Loading from '@/components/Loading/Loading';
import { authContext } from '@/components/hooks/userHooks';
import { useAddproductMutation } from '@/redux/ProductApi/ProductApi';
import { useGetCategoryQuery } from '@/redux/categoryApi/CategoryApi';

import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { useForm, SubmitHandler,FieldValues } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
export interface IProduct {
    // id? : number
    categoriID: number
    // name: string
    // price: number
    // size: string
    // descriptions: string
    // SellerId: number
    // oldPrice: number
    // quantity: number
    // brand: string,
    // picture : string
 }
const page = ({params}:any) => {

    //@ts-ignore
    const {user} = useContext(authContext)
    const {data,isLoading} = useGetCategoryQuery(1);
    const [addproductFunc,{isLoading:AddLoading,isError}] = useAddproductMutation()
    const router = useRouter()
    const id =parseInt(params?.id)
   
    const [loading,setLoading] = useState(false)
    
   
        const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit: SubmitHandler<FieldValues> = async(data:any) => {
        setLoading(true)
        console.log(data)
        const image = data.image[0]
        const formData = new FormData()
        
        formData.append('image',image);
        
         const keyis =`bd0f22832703db189e737da27b90a211`
         const url = `https://api.imgbb.com/1/upload?key=${keyis}`

        fetch(url,{
       method : "POST",
        body : formData
        }).then(res => res.json()).then(result =>{
         console.log(result?.data)
        if(result?.data?.url){
            const addData = {
                categoriID : parseInt(data.Category),
                brand : data?.brand,
                descriptions:data?.descriptions,
                picture : result?.data?.url,
                name : data?.name,
                oldPrice : parseInt(data?.oldPrice),
                quantity:parseInt(data?.oldPrice),
                size : data?.size,
                price : parseInt(data?.price),
                SellerId : user?.id
             }
             addproductFunc(addData)
          



             
        }
       
        setLoading(false)
         
    })
    }
    if(loading || isLoading || AddLoading ){
        return <Loading></Loading>
    }
    if(isError){
        console.log(isError)
    }
    return (
        <div>
           <div className=' '>
            <Toaster></Toaster>
            <h1 className="text-3xl font-semibold text-center pb-10">Update</h1>
            <div className="grid grid-cols-1 lg:grid-cols-10 md:grid-cols-10">
                <div className="col-span-2"></div>
                <div className="col-span-0 lg:col-span-6 md:col-span-6">
                <form onSubmit={handleSubmit(onSubmit)}>
    

    <div className="grid grid-cols-2 gap-x-5">
    <input type="text" placeholder="name" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2 text-black"  {...register("name",{ required: true })} />
    <input type="number" placeholder="price" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2 text-black"  {...register("price",{ required: true })} />
    </div>
    <div className="grid grid-cols-2 gap-x-5">
    <input type="number" placeholder="oldPrice" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2 text-black"  {...register("oldPrice",{ required: true })} />
    <input type="text" placeholder="size" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2 text-black"  {...register("size",{ required: true })} />
    
    </div>
    <div>
    <select className='w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2 text-black' {...register("Category")}>
        
        {
           data?.result?.result?.map((p:any)=><option  value={p?.id}>{p?.name}</option>)
        }
      </select>
    </div>
    
    <div className="grid grid-cols-2 gap-x-5">
    <input type="number" placeholder="quantity" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2 text-black"  {...register("quantity",{ required: true })} />
    <input type="text" placeholder="brand" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2 text-black"  {...register("brand",{ required: true })} />
    </div>
    
    <div className="grid grid-cols-1 gap-x-5">
    <textarea  placeholder="descriptions" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2 text-black" {...register("descriptions", { required: true })} />
    
    </div>
 
   
    <input type="file" placeholder="image" className="w-full border  border-gray-500 px-8 shadow-inner  outline-none rounded-sm my-5 py-10 text-black" {...register("image", { required: true })} />
   
    {errors.exampleRequired && <span>This field is required</span>}
    
    <input className="w-full category text-white py-2 mt-5 font-semibold rounded-md cursor-pointer" type="submit" />
  </form>
           
                </div>
            </div>
        </div>
        </div>
    );
};

export default page;