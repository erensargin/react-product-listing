import { createContext, useState } from "react";
import watch_data from "./data/watch_data";
import bag_data from "./data/bag_data";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(watch_data);

  // filter
  const [filteredProducts, setFilteredProducts] = useState(products);
  // sort
  const [sortOption, setSortOption] = useState("alpha-asc");

  // category
  const [category, setCategory] = useState({
    name: "Watches",
    description: "Watches & Accessories",
  });

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory === "Bags") {
      setProducts(bag_data);
      setCategory({
        name: "Bags",
        description: "Bags & Accessories",
      });
      return;
    } else if (selectedCategory === "Watches") {
      setProducts(watch_data);
      setCategory({
        name: "Watches",
        description: "Watches & Accessories",
      });
      return;
    }
  };

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
        handleCategoryChange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
