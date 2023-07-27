import React from "react";
import Product from "../product/Product";
import { useContext } from "react";
import ProductContext from "../../ProductContext";

export default function Products() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
