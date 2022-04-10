import React from "react";
import { Button } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Product.css";

function Product({ product, setCartProducts }) {
  const handleAddToCart = (product) => {
    setCartProducts((previousProducts) => [...previousProducts, product]);
  };
  return (
    <div className="Prod-Container">
      <div className="Product-Container">
        <div
          className="Product-Tag"
          style={{ display: product.bestseller ? "flex" : "none" }}
        >
          Best Seller
        </div>
        <LazyLoadImage
          src={product?.image?.src}
          alt={product?.image?.alt}
          height={"440px"}
          className="Image-Item"
        ></LazyLoadImage>
      </div>
      <Button
        style={{ backgroundColor: "black", color: "white", width: "100%" }}
        onClick={handleAddToCart}
      >
        Add To Cart
      </Button>
      <span style={{ color: "#857e7e75" }}>{product.category}</span>
      <h3>{product.name}</h3>
      <span style={{ color: "#857e7e75" }}>${product.price}</span>
    </div>
  );
}

export default Product;
