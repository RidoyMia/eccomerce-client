import Link from 'next/link';
import React from 'react';

const AdminHeader = () => {
    return (
        <div>
           <Link className='block py-1 lg:py-2 md:py-2 px-2 lg:px-5 md:px-5 bg-slate-400 shadow-md my-5 text-left rounded-md hover:bg-slate-100  hover:text-black' href="/admin">Dashboard</Link> 
           <Link className='block py-1 lg:py-2 md:py-2 px-2 lg:px-5 md:px-5 bg-slate-400 shadow-md my-5 text-left rounded-md hover:bg-slate-100  hover:text-black' href="/admin/product">Total-product</Link> 
           
           <Link className='block py-1 lg:py-2 md:py-2 px-2 lg:px-5 md:px-5 bg-slate-400 shadow-md my-5 text-left rounded-md hover:bg-slate-100  hover:text-black' href="/admin/seller">Sellers</Link> 
          
           

           
        </div>
    );
};

export default AdminHeader;