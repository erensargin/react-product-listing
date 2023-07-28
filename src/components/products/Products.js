import React from "react";
import Product from "../product/Product";
import { useContext, useState } from "react";
import ProductContext from "../../ProductContext";
import "./products.css";

export default function Products() {
  const { products } = useContext(ProductContext);
  const [visibleProducts, setVisibleProducts] = useState(
    products.slice(0, 4 * 5)
  );

  const handleLoadMore = () => {
    const currentRows = Math.ceil(visibleProducts.length / 4);
    setVisibleProducts(products.slice(0, 4 * (currentRows + 1)));
  };

  return (
    <div className="product-grid">
      {visibleProducts.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      {visibleProducts.length < products.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}
