import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `https://sellcell-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
           <h2 className='text-center text-2xl my-10 font-bold text-green-700'>My Orders</h2>
     <div className=' my-10'>
           <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    {
            bookings.map( (booking, i) =>   <tr>
                <th>{i}</th>
                <td>{booking.phoneBrand}</td>
                <td>{booking.price}</td>
                <td className='btn  btn-warning border-none text-red-500'>pay</td>
              </tr> )
           }

    </tbody>
  </table>
</div>
     </div>

        </div>
    );
};

export default MyOrders;
