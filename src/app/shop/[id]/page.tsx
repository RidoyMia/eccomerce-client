import Details from '@/components/Details/Details';
import React from 'react';
//@ts-ignore
const page = ({params}:number) => {
    return (
        <div>
           <Details id={params.id}></Details>
        </div>
    );
};

export default page;