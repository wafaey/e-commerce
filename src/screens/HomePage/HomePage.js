import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import FilterationSection from "../../components/FilterationSection/FilterationSection";
import GetProducts from "../../apis/index";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import "./HomePage.css";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [featureProduct, setFeatureProduct] = useState({});
  useEffect(() => {
    GetProducts()
      .then((res) => {
        let products = [];
        if (res.data && res.data.length > 0) {
          res.data.forEach((element) => {
            if (element.data.featured) {
              setFeatureProduct(element.data);
            } else {
              products.push(element.data);
            }
          });
        }
        setProducts(products);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="Home">
      {true ? <h1>adsasd</h1> : <h2>ads</h2>}
      <LazyLoadComponent>
        <Header cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FeaturedProduct
          featureProduct={featureProduct}
          setCartProducts={setCartProducts}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FilterationSection
          products={products}
          setCartProducts={setCartProducts}
          setProducts={setProducts}
        />
      </LazyLoadComponent>
    </div>
  );
}

export default HomePage;
