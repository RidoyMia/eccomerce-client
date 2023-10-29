"use client"
import Loading from '@/components/Loading/Loading';
import { useGetAllproductsQuery } from '@/redux/ProductApi/ProductApi';
import { useGetAllsellerQuery } from '@/redux/SellerApi/SellerApi';
import { useGetOrderByDayQuery } from '@/redux/orderApi/OrderApi';
import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const page = () => {
  const[price,setPrice] = useState('asc')
  const [pages,setPages] = useState(1)
  const {data:Product,isLoading:Perror,} = useGetAllproductsQuery({pages,price});
    //@ts-ignore
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      //@ts-ignore
      const TriangleBar = (props:any) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      }
    const accesstoken = localStorage.getItem('ACCESSTOKEN')
    //@ts-ignore
    const {data,isLoading} = useGetOrderByDayQuery(accesstoken as string)
    
    const{data:Seller} = useGetAllsellerQuery(pages);
    console.log(Seller?.result,Product?.result,'for day',accesstoken)
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="ml-5">
           <div className="grid grid-cols-2 lg:grid-cols-3 md:col-span-3 gap-x-2 xl:grid-cols-3  gap-y-8">
            
            <div className="text-center cursor-pointer  py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black" >
                <h1  className="font-semibold">{Product?.result?.total}</h1>
                <p className="text-sm md:text-md lg:text-lg">Total-products</p>
            </div>
            <div className="text-center cursor-pointer  py-2 md:py-5 lg:py-5 bg-gray-200 shadow-xl border rounded-md text-black" >
                <h1  className="font-semibold">{Seller?.result?.length}</h1>
                <p className="text-sm md:text-md lg:text-lg">Total-Sellers</p>
            </div>
            
            
           </div>
        </div>

        <div className='text-center py-20'>
            <h1 className='text-left py-5 text-white font-bold'> Orders history</h1>
        <BarChart
      width={1000}
      height={400}
      data={data?.result}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={entry => `${entry.year}-${entry.month}-${entry.day}`} />
      
      <Bar dataKey="total_quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data?.result?.map((entry:any, index:any) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
        </div>
    );
};

export default page;