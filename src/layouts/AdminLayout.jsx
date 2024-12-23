import React from 'react';
import AdminHeader from '../components/common/Header'; 
import AdminFooter from '../components/common/Footer'; 
import { Outlet } from 'react-router-dom'; 

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
