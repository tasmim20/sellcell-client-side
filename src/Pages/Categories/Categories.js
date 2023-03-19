import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../../Modal/BookModal/BookModal';
import Category from './Category/Category';

const Categories = () => {
    const {phones,brand} = useLoaderData();
    const [buy, setBuy] = useState(null)
    console.log(phones);
    return (
      <div>
                 <h2 className='text-3xl text-center font-bold my-20'>Available model of {brand}</h2>
          <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 my-14 gap-20'>
        {
            phones.map(phone => <Category phone={phone} setBuy={setBuy}></Category>)
        }
        </div>
     {
          buy &&
           <BookModal buy={buy} setBuy={setBuy}></BookModal>
     }
      </div>
    );
};

export default Categories;