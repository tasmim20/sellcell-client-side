import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import ExtraSection from './ExtraSection/ExtraSection';
import Product from './Product/Product';
import Banner from './Banner/Banner';

const Home = () => {
    // const products = useLoaderData()
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch("https://sellcell-server.vercel.app/products");
            const data = await res.json();
            return data
        }
    });

    console.log(products);
    return (
        
        <div>
            <Banner></Banner>
            <h2 className='text-3xl  my-16 text-center font-bold '>Welcome to the safest marketplace for selling and buying. </h2>
           <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-10 ' >
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
           </div>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;