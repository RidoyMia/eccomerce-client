import Details from '@/components/Details/Details';
import React from 'react';
//@ts-ignore
const page = ({params}) => {
    return (
        <div>
           <Details key={params.id} id={params.id}></Details>
        </div>
    );
};

export default page;