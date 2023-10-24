"use client"
import Details from '@/components/Details/Details';
import React from 'react';


const Page = ({params}:any) => {
   
    const { id } = params;
   

    return (
        <div>
           <Details id={id ? parseInt(id as string) : 0} />
        </div>
    );
};

export default Page;
