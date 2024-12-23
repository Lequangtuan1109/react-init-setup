import React from 'react';
import { Routes, Route } from 'react-router-dom';


import HomePage from '../pages/HomePage';
import ProductDetails from '../pages/ProductDetail';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';

const Router = () => {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
