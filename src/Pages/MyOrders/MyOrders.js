import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyOrder from './MyOrder/MyOrder';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

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
     <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10 my-10'>
     {
            bookings.map( booking => <MyOrder key={booking._id} booking ={booking}></MyOrder>)
           }
     </div>

        </div>
    );
};

export default MyOrders;
