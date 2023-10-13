import Image from 'next/image';
import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import logo from "../../images/logo.png"
const TopHeader = () => {
    return (
        <div className=' bg-gray-400'>
            <div className=' px-1 lg:px-5 md:px-5 grid grid-cols-2'>
               <div>
                   <div className='flex py-3 items-center'>
                   
                     <p className='text-2xl'> <AiTwotoneMail></AiTwotoneMail></p> <p className='pl-2 lg:pl-5 md:pl-5 text-sm lg:text-md '>Ridoy.Ahmed1531@gmail.com </p> <p className='hidden lg:block '>| Multy ventor eccomerce</p>
                   
                   </div>
               </div>
              <div className='text-right mt-3'>
              <button className='py-2 px-2 bg-blue-400 text-left rounded-lg'> <Image src={logo} className='w-10' alt="logo"></Image></button>
              </div>
            </div>
        </div>
    );
};

export default TopHeader;