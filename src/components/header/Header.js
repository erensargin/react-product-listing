import React from "react";
import "./header.css";
import ProductContext from "../../ProductContext";
import { useContext } from "react";
import Button from "@mui/material/Button";
import mainLogo from "../../images/e-commerce-logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  const { handleCategoryChange, productsCountInCart } =
    useContext(ProductContext);

  return (
    <>
      <div className="header">
        <div className="logo">
          <img className="main_logo" src={mainLogo} alt="logo" />
        </div>
        <div className="category-container">
          <Button
            defaultValue={"Bags"}
            onClick={() => handleCategoryChange("Bags")}
          >
            Bags
          </Button>
          <Button
            defaultValue={"Watches"}
            onClick={() => handleCategoryChange("Watches")}
          >
            Watches
          </Button>
        </div>
        <div className="cart">
          <ShoppingCartIcon />
          <h6>{productsCountInCart}</h6>
        </div>
      </div>
    </>
  );
}
