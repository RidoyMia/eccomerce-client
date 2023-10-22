import Image from 'next/image';
import img from '../images/logo.png';
import Banner from '@/components/Banner/Banner';
import Category from '@/components/Category/Category';
import Features from '@/components/Features/Features';

const Page = () => {
  return (
    <div className=' px-5 lg:container py-24'>
     
      <Banner></Banner>
      <Category></Category>
      <Features></Features>
    </div>
  );
};

export default Page;
