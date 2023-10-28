import React from 'react';

import { BsFillTelephoneInboundFill,BsFacebook } from 'react-icons/bs';
import { AiFillMail,AiFillInstagram,AiFillTwitterCircle ,AiFillLinkedin} from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
const page = () => {
    return (
        <div className='container'>
          
            <span className="loading loading-ring loading-lg text-[white]"></span>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
                <div className='contact-container px-5 lg:px-20 md:px-10 py-20'>
                   <h1 className='text-black text-lg lg:text-2xl font-semibold '>Get In Touch</h1>
                   <p className='text text-gray-400 text-lg pb-20 pt-5'>Fill up the form and our Team will get back to your message or phone call</p>

                   <div>
                    <div className='flex  justify-items-center'>
                        <BsFillTelephoneInboundFill className='text-black text-lg lg:text-2xl font-semibold text-black'></BsFillTelephoneInboundFill>
                        <h2 className='text-black text-lg lg:text-2xl font-semibold px-3 text-black'>+880123456789</h2>
                    </div>
                    <div className='flex  justify-items-center my-10'>
                        <AiFillMail className=' text-lg lg:text-2xl font-semibold text-black'></AiFillMail>
                        <h2 className=' text-lg lg:text-2xl font-semibold px-3 text-black'>shopMy@gmail.com</h2>
                    </div>
                    <div className='flex  justify-items-center mb-10'>
                        <ImLocation2 className='text-black text-lg lg:text-2xl font-semibold text-black'></ImLocation2>
                        <h2 className='text-black text-lg lg:text-2xl font-semibold px-3 '>250 Main Street, Mirpur, Dhaka</h2>
                    </div>
                    <span className="loading loading-ring text-5xl text-left pt-10 loading-lg text-[white]"></span>

                    <div className='flex  pt-10 justify-items-center'>
                       <BsFacebook className='text-4xl text-black hover:text-orange-400 px-1'></BsFacebook>
                       <AiFillInstagram className='text-4xl text-black hover:text-orange-400 px-1'></AiFillInstagram>
                       <AiFillTwitterCircle className='text-4xl text-black hover:text-orange-400 px-1'></AiFillTwitterCircle>
                       <AiFillLinkedin className='text-4xl text-black hover:text-orange-400 px-1'></AiFillLinkedin>
                    </div>
                   </div>
                </div>
                <div className='col-span-0 lg:cols-span-2 md:col-span-2 bg-white '>
                   <div className=' bg-gray-50 shadow-xl mx-0 lg:mx-20 md:mx-16 px-5 py-20 lg:px-20 md:px-10'>
                     <form>
                        <div className='flex parrent-container justify-between mb-10'>
                            <div className='parrent-input mx-4'>
                                <h1 className='text-sm lg:text-lg md:text-md  text-gray-400'>First Name</h1>
                                <input type='text' className=' input-field '></input>
                            </div>
                            <div className='parrent-input mx-4'>
                                <h1 className='text-sm lg:text-lg md:text-md  text-gray-400'>First Name</h1>
                                <input type='text' className=' input-field'></input>
                            </div>
                        </div>
                        <div className='flex parrent-container justify-between'>
                            <div className='parrent-input mx-4'>
                                <h1 className='text-sm lg:text-lg md:text-md  text-gray-400'>First Name</h1>
                                <input type='text' className=' input-field '></input>
                            </div>
                            <div className='parrent-input mx-4'>
                                <h1 className='text-sm lg:text-lg md:text-md  text-gray-400'>First Name</h1>
                                <input type='text' className=' input-field'></input>
                            </div>
                        </div>
                        <h1 className='py-5 text-lg lg:text-2xl text-gray-400'>What do you want to know About ?</h1>
                       

                        <textarea className=" my-8 textarea-secondary w-full  border-gray-500 " placeholder="Message"></textarea>

                        <button type='submit' className='register-btn bg-red-700 text-white py-1 px-5 rounded-sm font-semibold'>Submit</button>
                     </form>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default page;