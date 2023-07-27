import React from "react";
import "./product.css";

export default function Product({ product }) {
  const handleAddToCart = () => {
    alert("Product added to cart");
  };

  return (
    <div className="product-tile">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.discountedPrice || product.price}</p>
      <p>Ratings: {product.ratings} stars</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
