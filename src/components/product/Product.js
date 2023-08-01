import React from "react";
import "./product.css";
import ProductContext from "../../ProductContext";
import { useContext, useState, Fragment } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Product({ product }) {
  const { productsCountInCart, setProductsCountInCart } =
    useContext(ProductContext);
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    setProductsCountInCart(productsCountInCart + 1);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <div className="product-tile">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.discountedPrice || product.price}</p>
      <p>Ratings: {product.ratings} stars</p>
      <button onClick={handleAddToCart}>Add to Cart</button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Item added to cart"
        action={action}
      />
    </div>
  );
}
