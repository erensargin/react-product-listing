import React from "react";
import "./header.css";
import ProductContext from "../../ProductContext";
import { useContext } from "react";
import Button from "@mui/material/Button";

export default function Header() {
  const { handleCategoryChange } = useContext(ProductContext);

  return (
    <>
      <div className="header">
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
      </div>
    </>
  );
}
