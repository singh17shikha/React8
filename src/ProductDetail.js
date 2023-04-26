import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetail.css';

const ProductDetail = ({ productId, productPic, productName, brand, productDescription, price }) => {
  const addToCart = () => {
    alert(`Product of ID ${productId}, which is ${productName} of brand ${brand} and price ${price} is added to the cart. Please proceed to pay!`);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productPic} alt={productName} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{productName}</h2>
        <p className="product-description">{productDescription}</p>
        <div className="product-bottom">
          <span className="product-brand">{brand}</span>
          <span className="product-price">{price}</span>
        </div>
        <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  productId: PropTypes.string.isRequired,
  productPic: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductDetail;
