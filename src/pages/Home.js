import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import "./home.css";
import Filter from "../components/filter/Filter";
import Sort from "../components/sort/Sort";
import { useState } from "react";

export default function Home() {
  const [sortOption, setSortOption] = useState("alpha-asc");

  const handleSortChange = (selectedSortOption) => {
    setSortOption(selectedSortOption);
  };

  return (
    <div className="home">
      {
        // header
        <Header />
      }

      <div className="body">
        <div className="filter">
          <Filter />
        </div>
        <div className="products">
          <div className="products_header">
            <h2 className="products_title">category name & description</h2>
            <Sort onSortChange={handleSortChange} />
          </div>
          <Products sortOption={sortOption} />
        </div>
      </div>

      {
        // footer
        <Footer />
      }
    </div>
  );
}
