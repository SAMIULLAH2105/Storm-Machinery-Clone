import React from 'react';
import CardComponent from '../components/CardComponent';
import FooterTop from '../components/FooterTop';

function Product() {
  return (
    <>
        <div className="product">
      <h1>Our Products</h1>
      <p>Explore our wide range of trucks for export.</p>
    </div>
    <CardComponent/>
    <FooterTop/>
    </>

  );
}

export default Product;
