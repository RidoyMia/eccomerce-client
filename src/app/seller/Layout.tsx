"use client"
/* eslint-disable */
import Loading from '@/components/Loading/Loading';
import UserHeader from '@/components/userHeader/UserHeader';
import { getuser } from '@/utility/SetUserLocalHelper/SetUserLocalHelper';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const layout = ({children} : {
    children: React.ReactNode
  }) => {
    const router = useRouter()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        const getUser = localStorage.getItem('userInfo');
        if(!getUser){
             router.push('/')
        }else{
            setLoading(false)
        }
        
        console.log(getUser,'userInfo from user layout')
    },[])
    if(loading){
        return <Loading/>
    }
      
    return (
        <div className='bg-gray-900 text-white  lg:container md:container px-2'>
            <div className='grid grid-cols-4 lg:grid-cols-6  md:grid-cols-6 py-20'>
            <div className='col-span-0 lg:col-span-1 md:col-span-1'>
              <UserHeader></UserHeader>
            </div>
            <div className='col-span-3 lg:col-span-4 md:col-span-4 px-2 lg:px-10 md:px-8 '>
                {children}
            </div>
            </div>
        </div>
    );
};

export default layout;