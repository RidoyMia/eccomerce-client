"use client"
import { authContext } from '@/components/hooks/userHooks';
import { useGetProductByIdQuery } from '@/redux/ProductApi/ProductApi';
import { useOrdersMutation } from '@/redux/orderApi/OrderApi';
import { useRouter } from 'next/navigation';
import React,{useState,useContext} from 'react';
import { AiFillPlusSquare,AiFillMinusCircle,AiFillDelete ,AiOutlineSend} from 'react-icons/ai';

const page = ({params}:any) => {
    const router = useRouter()
    const [orders,options] = useOrdersMutation()
    //@ts-ignore
    const {user} = useContext(authContext)
    const [productQuantity,setProductQuantity] = useState<number>(1)
    const {data,isError,isLoading} = useGetProductByIdQuery(params.id)
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
    const orderConfirm = (e:any)=>{
        e.preventDefault()
        const form = e.target;
        const distict = form.distict.value; 
        const sub_distict = form.sub_distict.value; 
        if(!user || !distict || !sub_distict){
             console.log('kico nai',user,distict,sub_distict)
        } else{
            console.log('sob ace')
            const orderInfo = {
                productId : parseInt(params.id),
                quantity : productQuantity,
                userId :    parseInt(user?.id),
                distict,
                sub_distict
            }
            orders(orderInfo)
            router.push(`/${user.role}`)

        }
        form.reset()
      
    }
    return (
        <div className=' py-20 '>
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
  className='my-10 bg-yellow-500 text-white font-bold px-10 py-2 rounded-md'
  onClick={() => {
    const modalElement = document.getElementById('my_modal_1') as HTMLDialogElement;
    modalElement?.showModal();
  }}
>
  Confirm
</button>

                          <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <form method="dialog">
      
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Required</h3>
    <div>
        <form onSubmit={orderConfirm}>
            <input className='w-full py-2 px-3 my-3'  value={user?.name}></input>
            <input className='w-full py-2 px-3'  value={user?.email}></input>
            <div className='flex justify-between gap-x-3 my-3'>
            <input className='w-full py-2 px-3' type='text' name="distict" placeholder='Distct'></input>
            <input className='w-full py-2 px-3' type='text' name="sub_distict" placeholder='Sub-distict'></input>
            </div>
            <button type='submit' className='px-5 py-2 rounded-md my-3 bg-yellow-700 text-white'>Confirm</button>
        </form>
    </div>
    
  </div>
</dialog>
                 

                </div>
            </div>
        </div>
    );
};

export default page;