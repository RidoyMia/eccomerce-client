"use client"

import Loading from '@/components/Loading/Loading';
import SellerHeader from '@/components/SellerHeader/SellerHeader';
import { authContext } from '@/components/hooks/userHooks';
import UserHeader from '@/components/userHeader/UserHeader';

import { useRouter } from 'next/navigation';

import React, { useEffect, useState ,useContext} from 'react';

const layout = ({children} : {
    children: React.ReactNode
  }) => {
    //@ts-ignore
    const{user,setUser} = useContext(authContext)
    const router = useRouter()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        
        if(!user){
             router.push('/')
        }else{
            setLoading(false)
        }
        
      
    },[])
    if(loading){
        return <Loading/>
    }
      
    return (
        <div className='bg-gray-900 my-10 text-white  lg:container md:container px-2'>
           <UserHeader></UserHeader>
           <h1>seller</h1>
           {
            children
           }
        </div>
    );
};

export default layout;