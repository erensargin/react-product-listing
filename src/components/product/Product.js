import React from "react";
import "./product.css";
import ProductContext from "../../ProductContext";
import { useContext } from "react";

export default function Product({ product }) {
  const { productsCountInCart, setProductsCountInCart } =
    useContext(ProductContext);

  const handleAddToCart = () => {
    setProductsCountInCart(productsCountInCart + 1);
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
