import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-56 object-cover" src={product.image} alt={product.name} />
      
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>

        <p className="text-gray-600 text-sm mt-2">{product.address}</p>

        <p className="text-gray-800 text-lg font-semibold mt-4">
          ${product.price.toLocaleString()}
        </p>

        <p className="text-gray-600 text-sm mt-2">
          {product.description.length > 100 
            ? `${product.description.substring(0, 100)}...` 
            : product.description}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="text-blue-500 hover:text-blue-700 text-sm mt-4 inline-block"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
