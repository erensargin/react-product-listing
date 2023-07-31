import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import "./home.css";
import Filter from "../components/filter/Filter";
import Sort from "../components/sort/Sort";

export default function Home() {
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
            <Sort />
          </div>
          <Products />
        </div>
      </div>

      {
        // footer
        <Footer />
      }
    </div>
  );
}
