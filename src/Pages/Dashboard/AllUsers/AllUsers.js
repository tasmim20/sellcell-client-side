import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await fetch('https://sellcell-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://sellcell-server.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Make admin successfully')
                refetch();
            }
        })
    }
    return (
        <div>
            <h2>all users</h2>
            <div className=' my-10'>
           <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
    {
            users.map( (user, i) =>   <tr key={user._id}>
                <th>{i+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td >{
                    user?.role !== 'admin' && <button onClick={()=> handleMakeAdmin(user._id)} className='btn  btn-xs btn-primary border-none '> Make Admin</button>
}</td>
                <td ><button className='btn  btn-xs btn-danger border-none '> Delete</button></td>
              </tr> )
           }

    </tbody>
  </table>
</div>
     </div>

        </div>
    );
};

export default AllUsers;