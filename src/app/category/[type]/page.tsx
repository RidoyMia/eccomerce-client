
import CategoryTypes from '@/components/CategoryTypes/CategoryTypes';
import React from 'react';
import 'styled-jsx/style';

const page = ({params}:any) => {
    const{type} = params
    return (
        <div>
            <h1 className='px-20 py-20'>{type}</h1>
            <CategoryTypes key={type} type={type}></CategoryTypes>
        </div>
    );
};

export default page;