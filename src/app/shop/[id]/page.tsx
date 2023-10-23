
import Details from '@/components/Details/Details';
import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
           <Details id={id ? parseInt(id as string) : 0} />
        </div>
    );
};

export default Page;
