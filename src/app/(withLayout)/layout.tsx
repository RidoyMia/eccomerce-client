"use client"
import Loading from '@/components/Loading/Loading';
import AdminHeader from '@/components/adminHeader/AdminHeader';
import { authContext } from '@/components/hooks/userHooks';
import { useRouter } from 'next/navigation';
import React,{useContext,useEffect,useState} from 'react';

const Layout = ({children} : {children:React.ReactNode}) => {
    const router = useRouter()
    const [loading,setLoading] = useState(true)
    //@ts-ignore
    const {user} = useContext(authContext)
    useEffect(() => {
        setLoading(true)
       if(!user){
         router.push('/')
       }
       else if(user?.role !=='admin'){
        router.push('/')
       }
       else{
           setLoading(false)
       }
       setLoading(false)
    }, [user]);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='bg-gray-900 my-10 text-white  lg:container md:container px-2'>
            <div className='grid grid-cols-4 lg:grid-cols-6  md:grid-cols-6 py-20'>
            <div className='col-span-0 lg:col-span-1 md:col-span-1'>
              <AdminHeader></AdminHeader>
            </div>
            <div className='col-span-3 lg:col-span-4 md:col-span-4 px-2 lg:px-10 md:px-8 '>
                {children}
            </div>
            </div>
        </div>
    );
};

export default Layout;