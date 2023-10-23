"use client"
import { useForm, SubmitHandler ,FieldValues } from "react-hook-form"
import React from 'react';
import Image from "next/image";
import loginphoto from "../../images/login.png"
import Link from "next/link";
import { useCreateAuthMutation } from '@/redux/AuthApi/AuthApi';
import { useRouter } from 'next/router';
import { getuser } from '@/utility/SetUserLocalHelper/SetUserLocalHelper';
import { resolve } from "path";
import { rejects } from "assert";
import { json } from "stream/consumers";
interface FormData {
    username: string;
    password: string;
    confirm: string;
  }
const Registers = () => {
    const router = useRouter()
    const [createUser,{isError,isLoading,isSuccess}] = useCreateAuthMutation();
 
    console.log(isSuccess,'success')
   
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      // @ts-ignore
      const onSubmit: SubmitHandler<FieldValues> = (data:any) => {
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
            const registerData = {name : data.name,email : data?.email,password : data?.password,profile : result?.data.url};
            const isRegister =  createUser(registerData);
            const registerPromise = new Promise((resolve,rejects)=>{
                if(isRegister){
                    resolve(isRegister)
                }else{
                    rejects()
                }
            })
            registerPromise.then(res=>{
                // @ts-ignore
                if(res?.data?.action){
                   
                  // @ts-ignore
                    const setItem = localStorage.setItem("userInfo",JSON.stringify(res?.data?.others));
                    // @ts-ignore
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
        <div className=''>
            <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-6">
                <div></div>
                <div className="col-span-0 lg:col-span-4 md:col-span-4  rounded-md  bg-gray-200 shadow-xl pl-10">
                    <h1 className="font-semibold text-center text-3xl mt-10">Register</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-2 px-2 lg:px-5 md:px-4">
                        <div className=" py-28 col-span-1 lg:col-span-0">
                        
                            <form onSubmit={handleSubmit(onSubmit)}>
    
      <input type="text" placeholder="name" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2"  {...register("name",{ required: true })} />

      <input type="email" placeholder="email" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" {...register("email", { required: true })} />
      <input type="password" placeholder="password" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" {...register("password", { required: true })} />
      <input type="password" placeholder="confirm" className="w-full  shadow-inner py-3 outline-none rounded-sm my-5 px-2" {...register("confirm", { required: true })} />
      <input type="file" placeholder="image" className="w-full border rounded-lg border-gray-500 px-8 shadow-inner  outline-none rounded-sm my-5 py-10" {...register("image", { required: true })} />
     
      {errors.exampleRequired && <span>This field is required</span>}
     <div className="flex  justify-between items-center align-middle"> <Link href="/login" className=" underline text-center my-5">Please Login </Link>  <Link href="/sellerRegister" className=" underline text-center my-5">Become Seller </Link></div>
      <input className="w-full category text-white py-2 mt-5 font-semibold rounded-md" type="submit" />
    </form>
                        </div>
                        <div className="">
                            <Image src={loginphoto} alt="login" className= " w-full py-20  lg:py-5 md:py-3 md:w-80 lg:w-full"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registers;