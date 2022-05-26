import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center">
        {/* <!-- Page content here --> */}
          <Outlet></Outlet>
      </div> 
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label> 
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'>My Profile</Link></li>
          <li><Link to='/dashboard/addreview'>Add Review</Link></li>
          <li><Link to='/dashboard/myorders'>My Orders</Link></li>
          <li><Link to='/dashboard/manageallorders'>Manage All Orders</Link></li>
          <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
          <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
          <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
          <li><Link to='/dashboard/'></Link></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;