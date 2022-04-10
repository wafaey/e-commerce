import React, { useState, useEffect } from "react";
import Pagination from "@material-ui/lab/Pagination";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import Product from "./Product/Product";
import Filteration from "./Filteration/Filteration";
import TuneIcon from "@material-ui/icons/Tune";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import "./FilterationSection.css";
import { Button } from "@material-ui/core";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function FilterationSection({ products, setProducts, setCartProducts }) {
  const [categories, setCategories] = useState({
    People: false,
    Premium: false,
    Pets: false,
    Food: false,
    Landmarks: false,
    Cities: false,
    Nature: false,
  });
  const [priceRange, setPriceRange] = useState({
    "Lower than $20": false,
    "$20 - $100": false,
    "$100 - $200": false,
    "More than $200": false,
  });
  const [filterCategoryTypes, setFilterCategoryTypes] = useState([]);
  const [filterPriceTypes, setFilterPriceTypes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPageProducts, setCurrentPageProducts] = useState([]);
  const [sortType, setSortType] = useState("Price");
  const [ascending, setAscending] = useState(true);
  const [filterFlag, setFilterFlag] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const onChangePage = (event, value) => {
    setPageNumber(value);
    setCurrentPageProducts(
      filteredProducts.slice((value - 1) * 6, (value - 1) * 6 + 6)
    );
  };
  const handleSort = (sort, alpha) => {
    if (alpha) {
      if (sort === "Price") {
        let filtered = [...filteredProducts];
        filtered.sort(function (a, b) {
          return b.price - a.price;
        });
        setFilteredProducts(filtered);
      } else {
        let filtered = [...filteredProducts];
        filtered.sort(function (a, b) {
          let y = a.name.toLowerCase();
          let x = b.name.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        setFilteredProducts(filtered);
      }
    } else {
      if (sort === "Price") {
        let filtered = [...filteredProducts];
        filtered.sort(function (a, b) {
          return a.price - b.price;
        });
        setFilteredProducts(filtered);
      } else {
        let filtered = [...filteredProducts];
        filtered.sort(function (a, b) {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        setFilteredProducts(filtered);
      }
    }
  };
  const handleFiltering = (categories, prices) => {
    let allFilters = [...categories, ...prices];
    let filtered = [];
    if (allFilters.length === 0) {
      setFilteredProducts(products);
    } else {
      products.forEach((item) => {
        categories.forEach((element) => {
          if (item.category === element) {
            if (prices[0]) {
              switch (true) {
                case "Lower than $20" === prices[0] && item.price < 20:
                  filtered.push(item);
                  break;
                case "$20 - $100" === prices[0] &&
                  item.price > 20 &&
                  item.price < 100:
                  filtered.push(item);
                  break;
                case "$100 - $200" === prices[0] &&
                  item.price > 100 &&
                  item.price < 200:
                  filtered.push(item);
                  break;
                case "More than $200" === prices[0] && item.price > 200:
                  filtered.push(item);
                  break;
              }
            } else {
              filtered.push(item);
            }
          }
        });
      });
      setFilteredProducts(filtered);
    }
  };
  const handleCheckBox = (event) => {
    setCategories({ ...categories, [event.target.name]: event.target.checked });
    let currentFilters = [...filterCategoryTypes];
    if (event.target.checked) {
      currentFilters.push(event.target.name);
      setFilterCategoryTypes(currentFilters);
    } else {
      let x = currentFilters.indexOf(event.target.name);
      currentFilters.splice(x, 1);
      setFilterCategoryTypes(currentFilters);
    }
    handleFiltering(currentFilters, filterPriceTypes);
  };
  const handlePriceCheckBox = (event) => {
    let copy = priceRange;
    for (let prop in copy) {
      copy[prop] = false;
    }
    setPriceRange({ ...copy, [event.target.name]: event.target.checked });
    let currentFilters = [];
    if (event.target.checked) {
      currentFilters.push(event.target.name);
      setFilterPriceTypes(currentFilters);
    } else {
      setFilterPriceTypes(currentFilters);
    }
    handleFiltering(filterCategoryTypes, currentFilters);
  };
  const clear = () => {
    setFilterCategoryTypes([]);
    setCategories({
      People: false,
      Premium: false,
      Pets: false,
      Food: false,
      Landmarks: false,
      Cities: false,
      Nature: false,
    });
    setFilterPriceTypes([]);
    setPriceRange({
      "Lower than $20": false,
      "$20 - $100": false,
      "$100 - $200": false,
      "More than $200": false,
    });
    setFilteredProducts(products);
    setFilterFlag(false);
  };
  useEffect(() => {
    handleSort(sortType, ascending);
  }, [sortType, ascending]);
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  useEffect(() => {
    setCurrentPageProducts(filteredProducts.slice(0, 6));
    setPageNumber(1);
  }, [filteredProducts]);
  return (
    <div className="Filteration">
      <div className="Filteration-Header">
        <span>
          Photography /{" "}
          <span style={{ color: "#857e7e75" }}>Premium Photos</span>
        </span>

        <div className="Tune-Item">
          <TuneIcon
            style={{ cursor: "pointer" }}
            onClick={() => setFilterFlag(!filterFlag)}
          />
        </div>
      </div>
      <div className="Filteration-Body">
        <div className="Filteration-Category">
          <LazyLoadComponent>
            <Filteration
              handleCheckBox={handleCheckBox}
              handlePriceCheckBox={handlePriceCheckBox}
              categories={categories}
              priceRange={priceRange}
            />
          </LazyLoadComponent>
        </div>
        <div className="Filteration-Products">
          {currentPageProducts?.map((item, idx) => {
            return (
              <LazyLoadComponent>
                <>
                  <Product setCartProducts={setCartProducts} product={item} />
                </>
              </LazyLoadComponent>
            );
          })}
        </div>
      </div>
      <div className="Filteration-Footer">
        <Pagination
          count={Math.ceil(filteredProducts.length / 6)}
          page={pageNumber}
          onChange={onChangePage}
        />
      </div>
      <SwipeableDrawer
        anchor={"bottom"}
        open={filterFlag}
        onClose={() => setFilterFlag(false)}
        onOpen={() => setFilterFlag(true)}
      >
        <LazyLoadComponent>
          <Filteration
            handleCheckBox={handleCheckBox}
            handlePriceCheckBox={handlePriceCheckBox}
            categories={categories}
            priceRange={priceRange}
          />
        </LazyLoadComponent>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button onClick={clear}>Clear</Button>
          <Button onClick={() => setFilterFlag(false)}>Save</Button>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default MemoizedMovie = React.memo(FilterationSection);
