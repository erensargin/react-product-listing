import React from "react";
import Product from "../product/Product";
import { useContext, useState } from "react";
import ProductContext from "../../ProductContext";
import "./products.css";
import { useEffect } from "react";

export default function Products({ sortOption }) {
  const { filteredProducts } = useContext(ProductContext);
  const [visibleProducts, setVisibleProducts] = useState(
    filteredProducts.slice(0, 4 * 5)
  );

  // Handle sorting whenever the sortOption or filteredProducts change
  useEffect(() => {
    let sortedProducts = [...filteredProducts];

    switch (sortOption) {
      case "alpha-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alpha-desc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // No sorting or invalid option, keep the same order
        break;
    }
    setVisibleProducts(sortedProducts.slice(0, 4 * 5));
  }, [sortOption, filteredProducts]);

  const handleLoadMore = () => {
    const currentRows = Math.ceil(visibleProducts.length / 4);
    setVisibleProducts(filteredProducts.slice(0, 4 * (currentRows + 1)));
  };

  return (
    <div className="product-grid">
      {visibleProducts.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      {visibleProducts.length < filteredProducts.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}
