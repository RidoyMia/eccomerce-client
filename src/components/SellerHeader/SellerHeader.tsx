import Link from 'next/link';
import React from 'react';

const SellerHeader = () => {
    return (
        <div>
           <Link className='block py-1 lg:py-2 md:py-2 px-2 lg:px-5 md:px-5 bg-slate-400 shadow-md my-5 text-left rounded-md hover:bg-slate-100  hover:text-black' href="/seller">Dashboard</Link> 
           <Link className='block py-1 lg:py-2 md:py-2 px-2 lg:px-5 md:px-5 bg-slate-400 shadow-md my-5 text-left rounded-md hover:bg-slate-100  hover:text-black' href="/seller/product">My-product</Link> 
           <Link className='block py-1 lg:py-2 md:py-2 px-2 lg:px-5 md:px-5 bg-slate-400 shadow-md my-5 text-left rounded-md hover:bg-slate-100  hover:text-black' href="/seller/addproduct">Add-product</Link> 
           <Link className='block py-1 lg:py-2 md:py-2 px-2 lg:px-5 md:px-5 bg-slate-400 shadow-md my-5 text-left rounded-md hover:bg-slate-100  hover:text-black' href="/seller/order">Orders</Link> 
           <Link className='block py-1 lg:py-2 md:py-2 px-2 lg:px-5 md:px-5 bg-slate-400 shadow-md my-5 text-left rounded-md hover:bg-slate-100  hover:text-black' href="/seller/profile">Profile</Link> 
          
           
        </div>
    );
};

export default SellerHeader;