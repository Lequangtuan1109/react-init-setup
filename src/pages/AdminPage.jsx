import React from 'react';
import { Link } from 'react-router-dom';


import Sidebar from '../components/SlideBar';

const AdminPage = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/admin/manage-properties"
              className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300"
            >
              Manage Properties
            </Link>

            <Link
              to="/admin/manage-users"
              className="bg-green-500 text-white p-6 rounded-lg shadow-lg hover:bg-green-400 transition duration-300"
            >
              Manage Users
            </Link>

            <Link
              to="/admin/reports"
              className="bg-red-500 text-white p-6 rounded-lg shadow-lg hover:bg-red-400 transition duration-300"
            >
              View Reports
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
