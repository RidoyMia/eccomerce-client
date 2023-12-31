"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo.png"
import { GiEternalLove } from 'react-icons/gi';
import { AiFillShopping } from 'react-icons/ai';
import './Header.css'
import toast, { Toaster } from 'react-hot-toast';
import { useContext, useEffect, useState } from "react";

import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { authContext } from "../hooks/userHooks";




export interface Iuser {
  createdAt : string,
email : string
id : number
login : boolean
name : string
profile:string
role:string
updatedAt:string
}

const Header = () => {
  
  //@ts-ignore
  const card = useSelector((state)=>state.cart);
  
  const[loading,setLoading] = useState(false)
  //@ts-ignore
  const{user,setUser} = useContext(authContext)
  const router = useRouter()

  const logout = async()=>{
    setLoading(true)
    toast.success('logout Successfull')
    localStorage.removeItem('userInfo')
    const removeToken = await localStorage.removeItem("ACCESSTOKEN")
    setUser(null)
    
    router.push('/')
    
    setLoading(false)

  }
  const searchHandler = (e:any) =>{
    e.preventDefault();
    const form = e.target;
    router.push(`/search/${form.search.value}`)
    form.reset()
  }
  
  if(loading){
    return <Loading></Loading>
}
 
    return (
        <div className=" px-2 lg:container md:container ">
          <Toaster></Toaster>
             <div className="navbar bg-base-100  pb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  w-64 ">
      <Link className="px-7 text-gray-600 hover:bg-green-300 py-2 text-lg font-semibold " href="/">Home</Link>
        <Link className="px-7 text-gray-600 hover:bg-green-300 py-2 text-lg font-semibold " href="/shop">Shop</Link>
        
        
        <Link className="px-7 text-gray-600 hover:bg-green-300 py-2 text-lg font-semibold " href="/contact">Contact</Link>
        {
          user && user.role ?  <Link className="px-7 text-gray-600 hover:bg-green-300 py-2 text-lg font-semibold " href={`/${user?.role!}`}>DashBoard</Link> : ""
        }
        {
          user? <button className="py-1 px-4 bg-blue-400 text-white " onClick={logout}>LogOut</button> : <Link className="px-7 text-gray-600 hover:bg-green-300 py-2 text-lg font-semibold " href="/login">login</Link>
        }
       
      </ul>
    </div>
   <Image src={logo} alt="logo"></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link className="px-7 text-gray-600 hover:bg-green-300 py-2 text-lg font-semibold " href="/">Home</Link>
        <Link className="px-7 text-gray-600 hover:bg-green-300 py-2 text-lg font-semibold " href="/shop">Shop</Link>
       
        
        <Link className="px-7 text-gray-600 hover:bg-green-300 py-2 text-lg font-semibold " href="/contact">Contact</Link>
        {
          user && user.role ?  <Link className="px-7 text-gray-600 hover:bg-green-300 py-2 text-lg font-semibold " href={`/${user?.role!}`}>DashBoard</Link> : ""
        }
         {
          user? <button className=" rounded-md px-4 bg-blue-400 text-white " onClick={logout}>LogOut</button> : <Link className="px-7 text-gray-600 hover:bg-green-300 py-2 text-lg font-semibold " href="/login">login</Link>
        }
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex justify-end items-center pl-5">
   
  <div className="indicator">
  <span className="indicator-item badge badge-secondary">{card?.products?.length}</span>
  <div className="grid  w-6  place-items-center " > <Link href='/cart' className=" text-2x mr-5 text-red-500 px-2 py-2 bg-slate-300 rounded-full"><GiEternalLove></GiEternalLove></Link></div>
</div>



    

    </div>
  </div>
             </div>
             <div>
               <div className="grid grid-cols-4 py-1">
                  <div className="col-span-4 lg:col-span-4 md:col-span-4 ">
                    
                        <div className="flex  justify-center items-center">

                           
                        



                            

                            <div className="flex justify-between items-center ">
                               <form onSubmit={searchHandler}>
                                <div className="flex justify-start">
                                   <div>
                                   <input type="text" className="w-48 lg:w-96 md:w-64 outline-none  py-3 px-5 borde border-gray-500 border-spacing-2" placeholder="search" name="search"></input>
                                 
                                   </div>
                                   <div>
                                   <button className="category py-3 text-white px-4 text-sm lg:text-xl lg:px-20 font-semibold">SEARCH</button>
                                   </div>
                                </div>
                               </form>

                              

                               
                            </div>
                             <div>
                            
                             </div>
                        </div>
                    
                  </div>
               </div>
             </div>


        </div>
    );
};

export default Header;