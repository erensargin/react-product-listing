import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://picsum.photos/200/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      category: "category 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      category: "category 2",
    },
  ]);
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
