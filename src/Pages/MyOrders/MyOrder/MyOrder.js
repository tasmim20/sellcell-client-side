import React from 'react';

const MyOrder = ({booking}) => {
    const  {phoneBrand, price} = booking;
    return (
        <div>
            <div className="card w-96 bg-green-100 shadow-xl ">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{phoneBrand}</h2>
  <h2>Price:{price}</h2>
    <div className="card-actions">
      <button className="btn btn-primary">Pay now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyOrder;