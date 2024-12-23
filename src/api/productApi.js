// Gọi API liên quan đến sản phẩm

import axiosClient from './axiosClient';

export const getProducts = async () => {
  try {
    const response = await axiosClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
  }
};
