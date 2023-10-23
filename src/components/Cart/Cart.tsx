"use client"
import { AiFillPlusSquare,AiFillMinusCircle,AiFillDelete } from 'react-icons/ai';
import { IProduct, RemoveIteam, addTocart, decrementToCart } from '@/redux/addtocartSlice/CartSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    //@ts-ignore
    const {products} = useSelector((state)=> state.cart);
    const dispatch= useDispatch()
    console.log(products,'conn')
    
    return (
        <div className='container'>
           <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
            {
                products?.map((p:IProduct)=><div className='my-10 border px-3'>
                    <div className='flex  justify-start items-center'>
                        <div className='flex justify-start items-center'>
                            <img src={p?.picture} className='w-80 h-72'></img>
                            
                        </div>
                        <div className=''>
                        <h1 className='font-semibold'>Price :${p?.price * p.buyQuantity!}</h1>
                        <p className='py-2'>{p?.descriptions?.slice(0,100)}...</p>
                        <p>Brand : {p?.brand}</p>
                        <p>Quantity : {p?.buyQuantity}</p>
                          <div className='flex justify-start'>
                          <button className='py-2   text-3xl my-1 block' onClick={()=>dispatch(addTocart(p))}><AiFillPlusSquare></AiFillPlusSquare></button>
                          <button className='py-2   text-3xl my-1 mx-5 block' onClick={()=>dispatch(decrementToCart(p))}><AiFillMinusCircle></AiFillMinusCircle></button>
                          <button className='py-2   text-3xl my-1 block' onClick={()=>dispatch(RemoveIteam(p))}><AiFillDelete></AiFillDelete></button>
                          </div>

                        </div>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default Cart;