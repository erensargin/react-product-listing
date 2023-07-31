import React from "react";
import "./sort.css";
import ProductContext from "../../ProductContext";
import { useContext } from "react";

export default function Sort() {
  const { setSortOption } = useContext(ProductContext);

  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    setSortOption(selectedSortOption);
  };

  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="alpha-asc">Alphabetical A-Z</option>
        <option value="alpha-desc">Alphabetical Z-A</option>
        <option value="price-asc">Price Ascending</option>
        <option value="price-desc">Price Descending</option>
      </select>
    </div>
  );
}
