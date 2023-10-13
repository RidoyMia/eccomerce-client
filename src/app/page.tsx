import Image from 'next/image';
import img from '../images/logo.png';
import Banner from '@/components/Banner/Banner';

const Page = () => {
  return (
    <div className=' px-5 lg:container py-24'>
     
      <Banner></Banner>
    </div>
  );
};

export default Page;
