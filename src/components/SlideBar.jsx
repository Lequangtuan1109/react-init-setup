import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/manage-properties" className="block py-2 hover:bg-gray-700">
              Manage Properties
            </Link>
          </li>
          <li>
            <Link to="/admin/manage-users" className="block py-2 hover:bg-gray-700">
              Manage Users
            </Link>
          </li>
          <li>
            <Link to="/admin/reports" className="block py-2 hover:bg-gray-700">
              View Reports
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
