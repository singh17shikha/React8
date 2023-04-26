import React from 'react';
import './App.css';
import ProductDetail from './ProductDetail';

const productDetails = [
  {
    productId: '1',
    productPic: 'https://www.dreamstime.com/photos-images/shoes.html',
    productName: 'Shoes',
    brand: 'Adidas',
    productDescription: 'Comfortable and stylish shoes for everyday wear',
    price: '7$',
    rating: 4,
  },
  {
    productId: '2',
    productPic: 'https://www.dreamstime.com/photos-images/shoes.html',
    productName: 'Backpack',
    brand: 'Nike',
    productDescription: 'Durable and spacious backpack for carrying essentials',
    price: '10$',
    rating: 3,
  },
  {
    productId: '3',
    productPic: 'https://www.dreamstime.com/photos-images/shoes.html',
    productName: 'T-Shirt',
    brand: 'Puma',
    productDescription: 'Soft and breathable t-shirt for workouts or casual wear',
    price: '5$',
    rating: 5,
  },
  {
    productId: '4',
    productPic: 'https://www.dreamstime.com/photos-images/shoes.html',
    productName: 'Headphones',
    brand: 'Sony',
    productDescription: 'High-quality headphones for immersive audio experience',
    price: '20$',
    rating: 4,
  },
  {
    productId: '5',
    productPic: 'https://www.dreamstime.com/photos-images/shoes.html',
    productName: 'Smartwatch',
    brand: 'Apple',
    productDescription: 'Advanced smartwatch with fitness and communication features',
    price: '30$',
    rating: 5,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <div className="product-grid">
        {productDetails.map((product) => (
          <ProductDetail key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}
export default App;