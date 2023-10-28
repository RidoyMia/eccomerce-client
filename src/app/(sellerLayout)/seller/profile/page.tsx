"use client"
import { authContext } from '@/components/hooks/userHooks';
import React, { useContext } from 'react';



// "Sylhet"
// email
// : 
// "Ridoymia153159web@gmail.com"
// id
// : 
// 6
// login
// : 
// false
// name
// : 
// "Hridoy ahmed"
// profile






const page = () => {
    //@ts-ignore
    const {user} = useContext(authContext)
    console.log(user,'user form profile')
    return (
        <div className='container'>
            <div className='flex justify-center items-center align-middle'>
                <img src={user?.profile} className='w-32 h-32 rounded-full'></img><br></br>
                
            </div>
            <div>
            <h1 className='text-3xl font-semibold text-yellow-500 pt-1 pb-5 text-center'>Name : {user?.name}</h1>
            <div className='flex  justify-around'>
                <div>
                    <h1>village_name : {user?.village_name}</h1>
                    <h1>sub_district : {user?.sub_district}</h1>
                    <h1>divission : {user?.divission}</h1>
                    <h1>email : {user?.email}</h1>
                </div>
                <div>
                    <h1>Union : {user?.union}</h1>
                    <h1>district : {user?.district}</h1>
                    <h1>country : {user?.country}</h1>
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default page;