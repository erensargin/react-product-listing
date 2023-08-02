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
            // check discounted price first
            if (a.discountedPrice && b.discountedPrice) {
              return a.discountedPrice - b.discountedPrice;
            } else if (a.discountedPrice) {
              return a.discountedPrice - b.price;
            } else if (b.discountedPrice) {
              return a.price - b.discountedPrice;
            }
            // if no discounted price, compare regular price
            return a.price - b.price;
          case "price-desc":
            // check discounted price first
            if (a.discountedPrice && b.discountedPrice) {
              return b.discountedPrice - a.discountedPrice;
            } else if (a.discountedPrice) {
              return b.price - a.discountedPrice;
            } else if (b.discountedPrice) {
              return b.discountedPrice - a.price;
            }
            // if no discounted price, compare regular price
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
    const productsPerPage = 9;
    const endIndex = currentPage * productsPerPage;
    setVisibleProducts(sortedProducts.slice(0, endIndex));
  }, [currentPage, sortedProducts]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="products">
      <div className="visible">
        <h6>
          {visibleProducts.length} out of {sortedProducts.length}
        </h6>
      </div>
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
