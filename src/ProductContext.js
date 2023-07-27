import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  return (
    <ProductContext.Provider
      value={{ products, setProducts, filter, setFilter }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
