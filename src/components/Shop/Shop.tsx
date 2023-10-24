"use client"
import { useGetAllproductsQuery } from '@/redux/ProductApi/ProductApi';
import { addTocart } from '@/redux/addtocartSlice/CartSlice';
import { useRouter } from 'next/navigation';


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Shop = () => {
  const router = useRouter()
    const dispatch = useDispatch()
    const[range,setRange] = useState(0);
    const[loading,setLoading] = useState(false)
    const[price,setPrice] = useState('asc')
    const [products,setProducts] = useState([])
     const[total ,setTotal] = useState(0);
     const[toalPages,setTotalPages] = useState()
     const [pages,setPages] = useState(1)
     const extra = {toi : 'ami'}
     const {data,isLoading,isError} = useGetAllproductsQuery({pages,price});
     
    
  
    const mingRange= 20;
    const rangeHandler = (e:any) =>{
        setLoading(true)
        setRange(e.target.value)
        const filtering = data?.result?.result?.filter((p:any)=> p?.price <= e.target.value)
       
        setProducts(filtering)
       
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        if (data?.result?.total) {
            setProducts(data?.result?.result)
            setTotal(Math.ceil(data?.result?.total / 10));
           
            setLoading(false)
            
        }
    }, [data,price]);
    let paginationPages = [];
   if(total! > 0){
    
    for (let i = 0; i < total!; i++) {
         paginationPages.push(i)
   
       }
   }
   const handleSelectChange = (e:any) =>{
    setPrice(e.target.value)
   }
   
   if(isLoading || loading){
         return <div className='flex justify-center items-center  align-middle'>
            <h1>Loading ............</h1>
         </div>
   }
   
    return (
        <div className='py-10 lg:py-12 md:py-16 lg:container xl:container md:container px-2 '>
          <div className='flex justify-end py-10 border'>
          <select
      className="select select-bordered w-full max-w-xs"
      value={price}
      onChange={handleSelectChange}>
        <option disabled value="">SortBy</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
    </select>
          </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 '>
                <div className='me-5'>
                    <div>
                        <h1 className='text-2xl pb-7 font-semibold'>Price</h1>
                    <div className='pb-4'>
                    <input type="range" onChange={rangeHandler} min={mingRange} max="500" value={range} className="h-4 range range-info" />
                    </div>
                    <h1 className='font-semibold text-xl'>${mingRange} -- ${range}</h1>
                    </div>
                </div>
                
                <div className='col-span-0 lg:col-span-3 md:col-span-3'>
               <div className='grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-y-4'>
               {
                    products?.map((f:any) => <div key={f?.id} className="card  w-40 h-full lg:h-full  lg:w-52 md:w-56 bg-base-100 xl:w-80 shadow-xl">
                    <figure><img src={f?.picture} className='w-full  h-48 lg:h-64'  alt="Shoes" /></figure>
                    <div className=" py-5 px-1 lg:px-4 xl:px-4 md:px-4">
                      <h2 className="font-semibold text-md">
                       {f?.name}
                      
                      </h2>
                      <p>{f?.descriptions.slice(0,50)}..</p>
                      <div className='flex justify-between pt-2'>
                        <p className='font-semibold'>Price : ${f?.price} <span className=' ml-4 text-sm line-through'>${f?.oldPrice}</span></p>
                        
                      </div>
                     <div className='flex py-2 justify-start items-center'>
                      <p>Ratings</p>
                      <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
                     </div>


                     
                      <div className="flex xl:flex lg:flex md:flex sm:flex justify-between items-center lg:justify-end mt-4">
                        {/* <div className="badge badge-outline">Fashion</div> 
                        <div className="badge badge-outline">Products</div> */}
                        <button className='category text-sm py-1 px-2 rounded-md mt-3 text-white font-semibold' onClick={()=>dispatch(addTocart(f))}>Add-cart</button>
                        <button className='category text-sm py-1 px-2 rounded-md mt-3 text-white font-semibold lg:ml-2 'onClick={()=>router.push(`/shop/${f?.id}`)}>details</button>
                      </div>
                    </div>
                  </div>)
                }

              
               </div>

                </div>
              
            
            </div>
            <div className='flex justify-center items-center align-middle py-20'>
                    {
                      paginationPages?.map(p => <button key={p} onClick={()=>setPages(p + 1)} className={` font-bold  rounded-sm px-2 ${
                        p + 1 === pages
                          ? 'bg-blue-600 text-white' // Active button styles
                          : 'bg-blue-300 text-black' // Inactive button styles
                      }`} >{p + 1}</button>)
                    }
                </div>
        </div>
    );
};

export default Shop;