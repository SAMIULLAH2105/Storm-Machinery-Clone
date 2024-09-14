import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductData'; // Adjust the import path

const ProductDetail = () => {
  const { productId } = useParams(); // Get the dynamic productId from the URL

  // Convert productId to number (since the products array has numeric IDs)
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <div>
        <img src={product.image1} alt={product.name} style={{ width: '300px' }} />
        <img src={product.image2} alt={`${product.name} (hover)`} style={{ width: '300px' }} />
      </div>
      {/* You can add more product details here */}
    </div>
  );
};

export default ProductDetail;



// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { products } from './ProductData';


// const ProductDetail = () => {
//   const { productId } = useParams(); // Get the dynamic productId from the URL

//   // Assuming you fetch product details based on productId
//   // const product = fetchProductById(productId); // Example function to fetch product

//   return (
//     <div>
//       <h2>Product Details for Product ID: {productId}</h2>
//       {/* Display product details here */}
//     </div>
//   );
// };

// export default ProductDetail;
