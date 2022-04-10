import React from "react";
import { Button } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./FeaturedProduct.css";

function FeaturedProduct({ featureProduct, setCartProducts }) {
  const handleAddToCart = (featureProduct) => {
    setCartProducts((previousProducts) => [
      ...previousProducts,
      featureProduct,
    ]);
  };
  return (
    <div className="Feature">
      <div className="Feature-Header">
        <h2>{featureProduct.name}</h2>
        <div className="Cart-Button">
          <Button
            style={{ backgroundColor: "black", color: "white" }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </div>
      </div>
      <div className="Container">
        <div className="Tag">Photo of the day</div>
        <LazyLoadImage
          src={featureProduct?.image?.src}
          alt={featureProduct?.image?.alt}
          width={"100%"}
          height={"600px"}
        ></LazyLoadImage>
      </div>
      <div className="Cart-Button-After">
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            height: "50px",
            width: "100%",
          }}
        >
          Add To Cart
        </Button>
      </div>
      <div className="Feature-Body">
        <div className="left">
          <h2>About the {featureProduct.name}</h2>
          <h2 style={{ color: "#857e7e75" }}>{featureProduct.category}</h2>
          <p>{featureProduct?.details?.discription}</p>
        </div>
        <div className="right">
          <h2>People also buy</h2>
          <div className="Recommendations">
            <>
              {featureProduct?.details?.recommendations?.map((item, idx) => {
                return (
                  <LazyLoadImage
                    key={`${idx}`}
                    src={item.src}
                    alt={item.alt}
                    width={"100px"}
                    height={"120px"}
                    className="Recommendation-Image"
                  ></LazyLoadImage>
                );
              })}
            </>
          </div>
          <h2>Details</h2>
          <p style={{ color: "#857e7e75" }}>
            Size: {featureProduct?.details?.dimensions?.width} x{" "}
            {featureProduct?.details?.dimensions?.height} pixel
          </p>
          <p style={{ color: "#857e7e75" }}>
            Size: {featureProduct?.details?.size / 1000} mb
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
