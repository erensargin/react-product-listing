import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../ProductContext";
import "./filter.css";
import Slider from "@mui/material/Slider";

export default function Filter() {
  const { products, setFilteredProducts, priceRange, setPriceRange } =
    useContext(ProductContext);
  const [selectedColors, setSelectedColors] = useState([]);

  const availableColors = [
    ...new Set(products.map((product) => product.color)),
  ];

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((c) => c !== color)
        : [...prevSelectedColors, color]
    );
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  useEffect(() => {
    // Filter products based on selected options
    const filteredProducts = products.filter((product) => {
      const colorFilter =
        selectedColors.length === 0 || selectedColors.includes(product.color);
      const priceFilter = product.discountedPrice
        ? product.discountedPrice >= priceRange[0] &&
          product.discountedPrice <= priceRange[1]
        : product.price >= priceRange[0] && product.price <= priceRange[1];
      return colorFilter && priceFilter;
    });

    // Update the filtered products in the ProductContext
    setFilteredProducts(filteredProducts);
  }, [selectedColors, products, priceRange, setFilteredProducts]);

  return (
    <div className="filter">
      <h2>Filter</h2>
      <div className="color-filter">
        <h3>Color</h3>
        {availableColors.map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              value={color}
              checked={selectedColors.includes(color)}
              onChange={handleColorChange}
            />
            {color}
          </label>
        ))}
      </div>
      <div className="price-filter">
        <h3>Price Range</h3>
        <h5 className="price-range-show">
          ${priceRange[0]} - ${priceRange[1]}
        </h5>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="off"
          max={400}
          min={0}
        />
      </div>
    </div>
  );
}
