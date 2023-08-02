import React from "react";
import "./product.css";
import ProductContext from "../../ProductContext";
import { useContext, useState, Fragment } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";

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
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <Rating name="read-only" value={product.stars} readOnly />
      <div className="price_and_button">
        {product.discountedPrice ? (
          <h4>
            <span className="discounted_price">{product.discountedPrice}$</span>
            <span className="original_price">{product.price}$</span>
          </h4>
        ) : (
          <h4>{product.price}$</h4>
        )}
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Item added to cart"
        action={action}
      />
    </div>
  );
}

// <h4>{product.discountedPrice || product.price}$</h4>
