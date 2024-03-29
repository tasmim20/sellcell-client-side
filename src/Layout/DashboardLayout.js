import React, { useContext } from 'react';
import Navber from '../Shared/Navber/Navber';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {

  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex justify-center">
    <Outlet></Outlet>  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      <li><Link to='/dashboard'>My Order</Link></li>
      {
        isAdmin && <>
        <li><Link to='/dashboard/allusers'>All Users</Link></li></>
      }
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;