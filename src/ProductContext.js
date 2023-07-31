import { createContext, useState } from "react";
import data from "./data/data";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(data);

  const [filteredProducts, setFilteredProducts] = useState(products);

  // sort
  const [sortOption, setSortOption] = useState("alpha-asc");

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        sortOption,
        setSortOption,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
