import { createContext, useState } from "react";
import watch_data from "./data/data";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(watch_data);

  // filter
  const [filteredProducts, setFilteredProducts] = useState(products);
  // sort
  const [sortOption, setSortOption] = useState("alpha-asc");

  // category
  const [category, setCategory] = useState({
    name: "Bags",
    description: "Bags & Accessories",
  });

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        sortOption,
        setSortOption,
        category,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
