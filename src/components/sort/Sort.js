import React from "react";
import "./sort.css"; // Import the CSS file for sort styles

export default function Sort({ onSortChange }) {
  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    onSortChange(selectedSortOption);
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
