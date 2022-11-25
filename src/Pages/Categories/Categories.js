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
                 <h2 className='text-2xl text-center font-bold my-10'>Available model of {brand}</h2>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 my-14'>
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