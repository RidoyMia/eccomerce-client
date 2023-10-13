"use client"
import "./Banner.css"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bannerone from "../../images/bannerone.png"
import bannertwo from "../../images/bannertwo.png"
import bannerthree from "../../images/bannerthree.png"
import Image from "next/image";

const Banner = () => {
    
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }
    return (
        <div className=''>
             <div>
        
        <Slider {...settings}>
          
          <button className="text-left">
            <div className="grid grid-cols-3 bg-base-200 rounded-md">
            <div className=" col-span-2 pl-10 py-16 leading-10">
                <h1 className=" font-semibold  text-lg lg:text-6xl md:text-4xl">Panjabi EID Collection </h1>
                
                <h1 className=" font-semibold  text-lg lg:text-6xl md:text-4xl py-2 lg:py-8"> New Arrivals  </h1>
                <h1 className=" font-semibold  text-lg lg:text-6xl md:text-4xl "> 45%-OFF  </h1>
                

                <button className="lg:py-1 px-3 lg:px-10 category rounded-md mt-3 lg:mt-10 text-white font-bold">Shop now</button>
            </div>
            <div className="text-end">
            <Image src={bannerone} className="w-full mt-5  h-64 lg:h-96" alt="panjabi"></Image>
            </div>
            </div>
          </button>
          <button className="text-left">
            <div className="grid grid-cols-3 bg-base-200 rounded-md">
            <div className=" col-span-2 pl-10 py-16 leading-10">
                <h1 className=" font-semibold  text-lg lg:text-6xl md:text-4xl">Shoes EID Collection </h1>
                
                <h1 className=" font-semibold  text-lg lg:text-6xl md:text-4xl py-2 lg:py-8"> New Arrivals  </h1>
                <h1 className=" font-semibold  text-lg lg:text-6xl md:text-4xl "> 45%-OFF  </h1>
                

                <button className="lg:py-1 px-3 lg:px-10 category rounded-md mt-3 lg:mt-10 text-white font-bold">Shop now</button>
            </div>
            <div className="text-end">
            <Image src={bannertwo} className="w-full mt-5  h-64 lg:h-96" alt="panjabi"></Image>
            </div>
            </div>
          </button>
          <button className="text-left">
            <div className="grid grid-cols-3 bg-base-200 rounded-md">
            <div className=" col-span-2 pl-10 py-16 leading-10">
                <h1 className=" font-semibold  text-lg lg:text-6xl md:text-4xl">Salwar EID Collection </h1>
                
                <h1 className=" font-semibold  text-lg lg:text-6xl md:text-4xl py-2 lg:py-8"> New Arrivals  </h1>
                <h1 className=" font-semibold  text-lg lg:text-6xl md:text-4xl "> 35%-OFF  </h1>
                

                <button className="lg:py-1 px-3 lg:px-10 category rounded-md mt-3 lg:mt-10 text-white font-bold">Shop now</button>
            </div>
            <div className="text-end">
            <Image src={bannerthree} className="w-full mt-5  h-64 lg:h-96" alt="panjabi"></Image>
            </div>
            </div>
          </button>
         
          
        </Slider>
      </div>
        </div>
    );
};

export default Banner;