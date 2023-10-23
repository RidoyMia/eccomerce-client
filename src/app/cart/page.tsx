import Cart from '@/components/Cart/Cart';
import { IProduct } from '@/redux/addtocartSlice/CartSlice';
import React from 'react';


const page = () => {
    //@ts-ignore
   

    return (
        <div className='container'>
            
           <Cart></Cart>
        </div>
    );
};

export default page;