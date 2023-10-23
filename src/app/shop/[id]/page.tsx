
import Details from '@/components/Details/Details';
import React from 'react';
//@ts-ignore
const page = ({params}:number) => {
    const id = parseInt(params.id)
    return (
        <div>
           <Details id={id}></Details>
        </div>
    );
};

export default page;