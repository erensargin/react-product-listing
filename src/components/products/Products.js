import React from "react";
import Product from "../product/Product";
import { useContext, useState } from "react";
import ProductContext from "../../ProductContext";
import "./products.css";
import { useEffect } from "react";

export default function Products() {
  const { products, filteredProducts } = useContext(ProductContext);
  const [visibleProducts, setVisibleProducts] = useState(
    filteredProducts.slice(0, 4 * 5)
  );

  const handleLoadMore = () => {
    const currentRows = Math.ceil(visibleProducts.length / 4);
    setVisibleProducts(filteredProducts.slice(0, 4 * (currentRows + 1)));
  };

  useEffect(() => {
    setVisibleProducts(filteredProducts.slice(0, 4 * 5));
  }, [filteredProducts]);

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
