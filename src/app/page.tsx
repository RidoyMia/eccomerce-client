import Image from 'next/image';
import img from '../images/logo.png';
import Banner from '@/components/Banner/Banner';
import Category from '@/components/Category/Category';

const Page = () => {
  return (
    <div className=' px-5 lg:container py-24'>
     
      <Banner></Banner>
      <Category></Category>
    </div>
  );
};

export default Page;
