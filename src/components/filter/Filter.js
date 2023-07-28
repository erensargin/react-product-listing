import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../ProductContext";
import "./filter.css"; // Create a separate CSS file for filter styles

export default function Filter() {
  const { products, setFilteredProducts } = useContext(ProductContext);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");

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

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setSelectedPrice(price);
  };

  useEffect(() => {
    // Filter products based on selected options
    const filteredProducts = products.filter((product) => {
      const colorFilter =
        selectedColors.length === 0 || selectedColors.includes(product.color);
      const priceFilter =
        selectedPrice === "" || product.price <= parseInt(selectedPrice);
      return colorFilter && priceFilter;
    });

    // Update the filtered products in the ProductContext
    setFilteredProducts(filteredProducts);
  }, [selectedColors, selectedPrice, products, setFilteredProducts]);

  return (
    <div className="filter">
      <h2>Filter</h2>
      <div className="color-filter">
        <h3>Color:</h3>
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
        <h3>Price:</h3>
        <label>
          <input
            type="radio"
            value=""
            checked={selectedPrice === ""}
            onChange={handlePriceChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="50"
            checked={selectedPrice === "50"}
            onChange={handlePriceChange}
          />
          $50 and below
        </label>
        <label>
          <input
            type="radio"
            value="100"
            checked={selectedPrice === "100"}
            onChange={handlePriceChange}
          />
          $100 and below
        </label>
        <label>
          <input
            type="radio"
            value="200"
            checked={selectedPrice === "200"}
            onChange={handlePriceChange}
          />
          $200 and below
        </label>
      </div>
    </div>
  );
}
