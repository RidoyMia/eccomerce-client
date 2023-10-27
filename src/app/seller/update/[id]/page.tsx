"use client"
import Update from '@/components/update/update';
import React from 'react';

const page = ({params}:any) => {
    const id:any = params.id
    return (
        <div>
            <Update id={id}></Update>
        </div>
    );
};

export default page;