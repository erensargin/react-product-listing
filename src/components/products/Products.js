import React, { useContext, useState, useEffect } from "react";
import Product from "../product/Product";
import ProductContext from "../../ProductContext";
import "./products.css";
import Button from "@mui/material/Button";

export default function Products() {
  const { sortOption, filteredProducts } = useContext(ProductContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const sortProducts = () => {
      const sorted = [...filteredProducts].sort((a, b) => {
        switch (sortOption) {
          case "alpha-asc":
            return a.name.localeCompare(b.name);
          case "alpha-desc":
            return b.name.localeCompare(a.name);
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          default:
            return 0;
        }
      });
      setSortedProducts(sorted);
    };

    sortProducts();
  }, [filteredProducts, sortOption]);

  useEffect(() => {
    const productsPerPage = 4;
    const endIndex = currentPage * productsPerPage;
    setVisibleProducts(sortedProducts.slice(0, endIndex));
  }, [currentPage, sortedProducts]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="products">
      {visibleProducts.length} out of {sortedProducts.length}
      <div className="product-grid">
        {visibleProducts.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <div className="load-more-container">
        {visibleProducts.length < sortedProducts.length && (
          <Button variant="contained" onClick={handleLoadMore}>
            Load More
          </Button>
        )}
      </div>
    </div>
  );
}
