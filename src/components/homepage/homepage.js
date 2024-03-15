import React, { useState, useEffect } from 'react';
import Navbar from './navigationbar'; // Assuming the Navbar component is in the same directory
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './homepage.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    // Simulate fetching product data from the backend
    fetchProductsFromBackend()
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const fetchProductsFromBackend = async () => {
    // Simulate fetching product data from the backend
    return [
      { id: 1, name: 'Product 1', imageUrl: 'https://example.com/product1.jpg', description: 'Description of Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', imageUrl: 'https://example.com/product2.jpg', description: 'Description of Product 2', price: 19.99 },
      { id: 3, name: 'Product 3', imageUrl: 'https://example.com/product3.jpg', description: 'Description of Product 3', price: 14.99 },
    ];
  };

  const handleProductClick = (productId) => {
    // Redirect to the product view page when a product is clicked
    navigate(`/product/${productId}`);
  };

  return (
    <div className="homepage">
      <Navbar />
      <div className="background">
        <div className="recommendations-section">
          <h1 className='recommendation'>
            Recent Recommendations
          </h1>
          {/* Additional content for recent recommendations goes here */}
        </div>

        <div className="products-section">
          <h2 className="products-heading">Featured Products</h2>
          <div className="products-container">
            {products.map(product => (
              <div key={product.id} className="product" onClick={() => handleProductClick(product.id)}>
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
