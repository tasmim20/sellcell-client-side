import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import ExtraSection from './ExtraSection/ExtraSection';
import Product from './Product/Product';

const Home = () => {
    // const products = useLoaderData()
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/products");
            const data = await res.json();
            return data
        }
    });

    console.log(products);
    return (
        <div>
            <h2 className='text-3xl  my-10 text-center font-bold '>Welcome to the safest marketplace for selling and buying. </h2>
           <div className='grid lg:grid-cols-3  sm:grid-cols-1 gap-10 ' >
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
           </div>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;