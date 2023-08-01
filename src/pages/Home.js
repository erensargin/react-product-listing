import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import "./home.css";
import Filter from "../components/filter/Filter";
import Sort from "../components/sort/Sort";
import { useContext } from "react";
import ProductContext from "../ProductContext";

export default function Home() {
  const { category } = useContext(ProductContext);

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
            <h2 className="products_title">
              {category.name}: {category.description}
            </h2>
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
