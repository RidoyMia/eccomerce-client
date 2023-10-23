import React from 'react';
import banner from "../../images/shop-banner.jpg";
import logo from "../../images/logo.png"
import "./shop.css"
import Image from 'next/image';
import Shop from '@/components/Shop/Shop';


const page = () => {
   
    return (
        <div className=' mt-10 py-11'>
            <div className='shop-banner-container'>
                <div className='flex justify-center items-center py-20'>
                <Image src={logo} height={80} width={200} alt='logo' />
                </div>

            </div>
            <Shop></Shop>
            
        </div>
    );
};

export default page;