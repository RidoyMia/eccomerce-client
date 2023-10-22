"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import logo from "../../images/logo.png"
import { getuser } from '@/utility/SetUserLocalHelper/SetUserLocalHelper';
import { Iuser } from './Heder';
const TopHeader = () => {
    const[user,setUser] = useState<Iuser | null>(null)
  useEffect(()=>{
    const getUserInfo = getuser();
const UserPromise = new Promise((resolve, reject) => {
  if (getUserInfo) {
    resolve(getUserInfo);
  } else {
    reject("User data not found");
  }
});

UserPromise.then((result) => {
  const userResult = result as Iuser;
    setUser(userResult)
    
  })
  .catch((error) => {
    console.error(error);
  });
  },[])
    return (
        <div className=' bg-gray-400'>
            <div className=' px-1 lg:px-5 md:px-5 grid grid-cols-2'>
               <div>
                   <div className='flex py-3 items-center'>
                   
                     <p className='text-2xl'> <AiTwotoneMail></AiTwotoneMail></p> <p className='pl-2 lg:pl-5 md:pl-5 text-sm lg:text-md '>Ridoy.Ahmed1531@gmail.com </p> <p className='hidden lg:block '>| Multy ventor eccomerce</p>
                   
                   </div>
               </div>
              <div className='text-right mt-3'>
             {
                user?  <button className='py-2 px-2 bg-blue-400 text-left rounded-lg'>{user?.role} </button> : ""
             }
              </div>
            </div>
        </div>
    );
};

export default TopHeader;