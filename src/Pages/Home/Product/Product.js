import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, brand, image} = product;
    return (
        <div>
          <div className="card card-compact w-96 shadow-xl border-lg-black bg-green-100 border-solid border-2 border-green-300">
  <figure className=''><img className='h-96 bg-green-200' src={image} alt="phones" /></figure>
  <div className="card-body">
  <h2 className=" text-center text-2xl text-green-700 font-bold">{brand}</h2>
    <div className="card-actions justify-end">
     <Link to={`/categories/${_id}`} > <button className="btn btn-success">More Product</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;