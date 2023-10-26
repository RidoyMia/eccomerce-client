import SearchPage from '@/components/SearchPage/SearchPage';
import React from 'react';

const page = ({params}:any) => {
    return (
        <div className=' py-20 text-center'>
            <SearchPage search={params.search}></SearchPage>
        </div>
    );
};

export default page;