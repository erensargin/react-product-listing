import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import "./home.css";
import Filter from "../components/filter/Filter";

export default function Home() {
  return (
    <div className="home">
      {
        // header
        <Header />
      }

      <div className="body">
        <Filter />
        <Products />
      </div>

      {
        // footer
        <Footer />
      }
    </div>
  );
}
