import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams(); // Get the dynamic productId from the URL

  // Assuming you fetch product details based on productId
  // const product = fetchProductById(productId); // Example function to fetch product

  return (
    <div>
      <h2>Product Details for Product ID: {productId}</h2>
      {/* Display product details here */}
    </div>
  );
};

export default ProductDetail;
