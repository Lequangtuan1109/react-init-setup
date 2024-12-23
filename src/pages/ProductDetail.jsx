import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../redux/slices/ProductSlice';
import { formatCurrency } from '../utils/formatCurrency'; // Định dạng tiền tệ

const ProductDetailPage = () => {
  const { id } = useParams(); // Lấy id từ URL
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productDetail);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProductDetail(id));
        setLoading(false);
      } catch (err) {
        setError('Failed to load product details');
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>

            <div className="text-2xl font-bold text-gray-900 mb-6">
              {formatCurrency(product.price)}
            </div>

            <button
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-400 transition duration-300"
              onClick={() => alert('Added to cart')}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>

    </div>
  );
};

export default ProductDetailPage;
