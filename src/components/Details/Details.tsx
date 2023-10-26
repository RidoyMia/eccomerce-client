"use client"
import { AiFillPlusSquare,AiFillMinusCircle,AiFillDelete ,AiOutlineSend} from 'react-icons/ai';
import { useGetProductByIdQuery } from '@/redux/ProductApi/ProductApi';
import React, { useState,useContext } from 'react';
import Related from '../Related/Related';
import { authContext } from '../hooks/userHooks';
import { useRouter } from 'next/navigation';
import { useGetCommentQuery, usePostCommentMutation } from '@/redux/commentApi/CommentApi';

   
   
//@ts-ignore
const Details = ({id}:{id : number}) => {
    const router = useRouter()
    //@ts-ignore
    const postComments = useGetCommentQuery(id);
    console.log(postComments,'comments')
    
    //@ts-ignore
    const{user} = useContext(authContext)
    console.log(user,'userrid')
    const [productQuantity,setProductQuantity] = useState<number>(1)
    const {data,isError,isLoading} = useGetProductByIdQuery(id)
    const [postCommentFunction,options] = usePostCommentMutation()
    const addquantityhandler = ()=>{
        if(data?.result.quantity > productQuantity){
          setProductQuantity(productQuantity + 1)
        }
    }
    const decrementQuantityhandler = ()=>{
        if( productQuantity > 1){
          setProductQuantity(productQuantity - 1)
        }
    }
    const reviewHandler = (e:any) =>{
        e.preventDefault()
        const form = e.target;
        if(!user){
            router.push('/login')
        }else{
            const commentData = {
                
                data : {
                    userId : user?.id,
                    message : e.target.comment.value,
                    productId : id
                }
            }
            postCommentFunction(commentData);
            console.log(postCommentFunction,'func')
            const form = e.target.comment.value;
            console.log(form)
        }
       form.reset()
    }
    const orderDetaisl = (id:any) =>{
        if(!user){
            router.push('/login')
        }
        else{
            router.push(`/order/${id}`)
        }
    }
  
     //@ts-ignore
    return (
        <div className='lg:container md:container px-3 py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 border py-10 '>
                <div>
                    <img src={data?.result?.picture} className='w-full h-96'></img>
                </div>
                <div className=''>
                    <h1 className='text-md font-semibold'>Name : {data?.result?.name}</h1>
                    <p className='py-3'>About :{data?.result?.descriptions?.slice(0,160)}</p>
                    <h1>Category : {data?.result?.category?.name}</h1>
                    <h1 className='py-3'>Size : {data?.result?.size}</h1>
                    <h1>Brand : {data?.result?.brand}</h1>
                    <h1 className='py-3'>Available : {data?.result?.quantity}</h1>
                   
                    <h1>Price : ${parseInt(data?.result?.price || "0") * parseInt(productQuantity.toString())}</h1>

                    <h1 className='py-3'>quantity : {productQuantity}</h1>
                          <div className='flex justify-start'>
                               <button className='py-2   text-3xl my-1 block'onClick={addquantityhandler} ><AiFillPlusSquare></AiFillPlusSquare></button>
                               <button className='py-2   text-3xl my-1 mx-5 block' onClick={decrementQuantityhandler}><AiFillMinusCircle></AiFillMinusCircle></button>
                         
                          </div>
                          <button
  className='my-10 bg-yellow-500 text-white font-bold px-10 py-2 rounded-md' onClick={()=>orderDetaisl(data?.result?.id)}>Order now</button>

    
                 

                </div>
            </div>
            <div className='py-10'>
                <p>{data?.result?.descriptions}</p>
            </div>
            <div className='py-16'>
                <h1 className='text-xl py-3'>User Reviews...</h1>
                <div>
                    {
                        postComments?.data?.result?.map((c:any) =><div className='bordered my-7 border py-5 px-6'>
                         <div className='flex justify-start'>
                            <div>
                                <img src={c?.user?.profile} className='w-10 h-10 rounded-full'></img>
                            </div>
                            <div className='px-5'>
                                <h1>{c?.user?.name}{`=>`}</h1>
                                <p className='py-2'>{c?.message}</p>
                            </div>
                         </div>
                        </div>)
                    }
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                    <div>
                        <form onSubmit={reviewHandler}>
                           <div className='flex justify-start items-center border'>
                            <input type='text' name="comment" placeholder='type here..' className='w-full outline-none py-3 px-10'></input>
                            <button type='submit' className='text-3xl px-10 text-blue-700 hover:text-blue-900  py-2 rounded-md'><AiOutlineSend></AiOutlineSend></button>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center align-middle'>
                <h1 className='text-center font-bold py-3  text-red-800 text-xl'>RELATED PRODUCTS</h1>
                
            </div>
            <div className='flex justify-center items-center align-middle'>
               <div className='bg-gray-600 h-1 w-12' ></div>
            </div>
            
            <Related id={data?.result?.categoriID}/>
        </div>
    );
};

export default Details;