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
      color: "red",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://picsum.photos/200/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      category: "category 2",
      color: "blue",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://picsum.photos/200/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      category: "category 3",
      color: "green",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image: "https://picsum.photos/200/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      category: "category 4",
      color: "yellow",
    },
  ]);
  const [filter, setFilter] = useState("");

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filter,
        setFilter,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
