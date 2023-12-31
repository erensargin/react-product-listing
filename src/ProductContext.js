import { createContext, useState } from "react";
import watch_data from "./data/watch_data";
import bag_data from "./data/bag_data";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(bag_data);

  // filter
  const [filteredProducts, setFilteredProducts] = useState(products);
  // sort
  const [sortOption, setSortOption] = useState("alpha-asc");

  // category
  const [category, setCategory] = useState({
    name: "Bags",
    description: "Bags & Accessories",
  });

  // product count
  const [productsCountInCart, setProductsCountInCart] = useState(0);

  // price range
  const [priceRange, setPriceRange] = useState([0, 400]);

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
        productsCountInCart,
        setProductsCountInCart,
        priceRange,
        setPriceRange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
