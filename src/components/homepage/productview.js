import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./productview.css"

const ProductViewPage = () => {
  const { productId } = useParams(); // Get the productId from the URL params

  // Sample product and seller data (replace with actual data fetched from backend)
  const [product] = useState({
    id: productId,
    name: 'Product Name',
    description: 'Product Description',
    price: 19.99,
    imageUrl: 'https://example.com/product.jpg',
    seller: {
      id: 'seller123',
      name: 'Seller Name',
      email: 'seller@example.com',
    },
  });

  // State for wishlist
  const [isWishlist, setIsWishlist] = useState(false);

  // Function to toggle wishlist
  const toggleWishlist = () => {
    setIsWishlist(prevState => !prevState);
  };

  // Function to handle request
  const handleRequest = () => {
    // Logic to handle request
    // For example, redirect to a request form
  };

  // Function to handle chat
  const handleChat = () => {
    // Logic to start chat with seller
    // For example, redirect to a chat room
  };

  return (
    <div className="product-view-page">
      <div className="product-details">
        <img src={product.imageUrl} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
      <div className="seller-details">
        <h2>Seller Information</h2>
        <p>Name: {product.seller.name}</p>
        <p>Email: {product.seller.email}</p>
      </div>
      <div className="actions">
        <button onClick={toggleWishlist}>
          {isWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
        <button onClick={handleRequest}>Request</button>
        <button onClick={handleChat}>Chat with Seller</button>
      </div>
    </div>
  );
};

export default ProductViewPage;
