"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import React from 'react';
import Image from "next/image";
import loginphoto from "../../images/login.png"
import Link from "next/link";
import { useCreateSellerMutation } from '@/redux/AuthApi/AuthApi';
import { useRouter } from 'next/navigation';
import { getuser } from '@/utility/SetUserLocalHelper/SetUserLocalHelper';
import { resolve } from "path";
import { rejects } from "assert";
import { json } from "stream/consumers";
// email : string 
//     password :string
//     name : string
//     country :string
//     divission : string
//     district : string
//     sub_district : string
//     union : string
//     village_name : string
//     profile : string
const SellerRegisters = () => {
    const router = useRouter()
    const [createSeller,{isError,isLoading,isSuccess}] = useCreateSellerMutation();
   
    console.log(isSuccess,'success')
   
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit: SubmitHandler = (data:any) => {
        if(data.password !=data.confirm){
            return alert('password does not match')
        }
        const image = data.image[0]
        const formData = new FormData()
        
        formData.append('image',image);
        
         const keyis =`bd0f22832703db189e737da27b90a211`
         const url = `https://api.imgbb.com/1/upload?key=${keyis}`

        fetch(url,{
    method : "POST",
    body : formData
        }).then(res => res.json()).then(result =>{
          if(result?.data?.url){
            const registerData = {name : data.name,email : data?.email,password : data?.password,profile : result?.data.url,village_name : data?.village_name,union:data?.union,sub_district:data?.sub_district,district:data?.district,divission:data?.divission,country:data?.country};
            const isRegister =  createSeller(registerData);
            const registerPromise = new Promise((resolve,rejects)=>{
                if(isRegister){
                    resolve(isRegister)
                }else{
                    rejects()
                }
            })
            registerPromise.then(res=>{
                if(res?.data?.action){
                   
                  
                    const setItem = localStorage.setItem("userInfo",JSON.stringify(res?.data?.others));
                    const getIteam = JSON.parse(localStorage.getItem("userInfo"))
                    router.push(`/${getIteam.role}/profile`)
                      
                }
            }).catch(e=>{
                console.log(e)
            })
          
          }
})
    }
        
    return (
        <div className='py-20 px-2 '>
            <h1 className="text-3xl font-semibold text-center py-10">Seller</h1>
            <div className="grid grid-cols-1 lg:grid-cols-10 md:grid-cols-10">
                <div className="col-span-2"></div>
                <div className="col-span-0 lg:col-span-6 md:col-span-6">
                <form onSubmit={handleSubmit(onSubmit)}>
    

    <div className="grid grid-cols-2 gap-x-5">
    <input type="text" placeholder="name" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2"  {...register("name",{ required: true })} />
    <input type="text" placeholder="country" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2"  {...register("country",{ required: true })} />
    </div>
    <div className="grid grid-cols-2 gap-x-5">
    <input type="text" placeholder="divission" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2"  {...register("divission",{ required: true })} />
    <input type="text" placeholder="district" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2"  {...register("district",{ required: true })} />
    </div>
    <div className="grid grid-cols-2 gap-x-5">
    <input type="text" placeholder="sub_district" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2"  {...register("sub_district",{ required: true })} />
    <input type="text" placeholder="union" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2"  {...register("union",{ required: true })} />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-5">
    <input type="text" placeholder="village_name" autoComplete="false" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2"  {...register("village_name",{ required: true })} />
    <input type="email" autoComplete="true" placeholder="email" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" {...register("email", { required: true })} />
    </div>
    <div className="grid grid-cols-2 gap-x-5">
    <input type="password" placeholder="password" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" {...register("password", { required: true })} />
    <input type="password" placeholder="confirm" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" {...register("confirm", { required: true })} />
    </div>
 
   
    <input type="file" placeholder="image" className="w-full border rounded-lg border-gray-500 px-8 shadow-inner  outline-none rounded-sm my-5 py-10" {...register("image", { required: true })} />
   
    {errors.exampleRequired && <span>This field is required</span>}
    <Link href="/login" className=" underline text-center my-5">Please Login </Link>
    <input className="w-full category text-white py-2 mt-5 font-semibold rounded-md" type="submit" />
  </form>
           
                </div>
            </div>
        </div>
    );
};

export default SellerRegisters;