"use client"
import CategoryTypes from '@/components/CategoryTypes/CategoryTypes';
import React from 'react';

//
const page = ({params}:any) => {
    
    const{type} = params
    return (
        <div>
            
            <CategoryTypes key={type} type={type}></CategoryTypes>
        </div>
    );
};

export default page;