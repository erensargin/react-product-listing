import React, { useContext, useState, useEffect, useRef } from "react";
import Product from "../product/Product";
import ProductContext from "../../ProductContext";
import "./products.css";

export default function Products({ sortOption }) {
  const { filteredProducts } = useContext(ProductContext);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

    setVisibleProducts(sortedProducts.slice(0, 4));
    setCurrentPage(1);
  }, [sortOption, filteredProducts]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * 4;
    const endIndex = nextPage * 4;

    setVisibleProducts((prevProducts) => [
      ...prevProducts,
      ...filteredProducts.slice(startIndex, endIndex),
    ]);
    setCurrentPage(nextPage);
  };

  return (
    <div className="products">
      <div className="product-grid">
        {visibleProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      {visibleProducts.length < filteredProducts.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}
