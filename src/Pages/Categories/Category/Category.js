import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({phone, setBuy}) => {
    const {brand, name, price1, price2, use, seller_name,image, location,posted} = phone;
    return (
        <div>
    
    <div className="card card-compact w-96 shadow-xl border-lg-black bg-green-100 border-solid border-2 border-green-300">
  <figure className=''><img className='h-96 bg-green-200' src={image} alt="phones" /></figure>
  <div className="card-body">
  <h2 className=" text-center text-2xl text-green-700 font-bold">{name}</h2>
    <div className="card-actions justify-end">
   
      <label htmlFor="book-modal" className="btn  btn-success" onClick={() => setBuy(phone)}>Book Now</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Category;