import React from 'react';

const page = ({params}:any) => {
    return (
        <div className='flex justify-center items-center align-middle bg-red-600 text-white'>
        <h1 className='text-center py-20'>id is  :{params.id}</h1>
    </div>
    );
};

export default page;