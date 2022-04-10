import React from "react";
import FilterationItem from "./FilterationItem/FilterationItem";
import { LazyLoadComponent } from "react-lazy-load-image-component";
function Filteration({
  categories,
  priceRange,
  handleCheckBox,
  handlePriceCheckBox,
}) {
  return (
    <>
      <h3>Category</h3>
      <LazyLoadComponent>
        <FilterationItem
          name={"People"}
          checked={categories.People}
          handleChange={handleCheckBox}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FilterationItem
          name={"Premium"}
          checked={categories.Premium}
          handleChange={handleCheckBox}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FilterationItem
          name={"Pets"}
          checked={categories.Pets}
          handleChange={handleCheckBox}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FilterationItem
          name={"Food"}
          checked={categories.Food}
          handleChange={handleCheckBox}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FilterationItem
          name={"Landmarks"}
          checked={categories.Landmarks}
          handleChange={handleCheckBox}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FilterationItem
          name={"Cities"}
          checked={categories.Cities}
          handleChange={handleCheckBox}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FilterationItem
          name={"Nature"}
          checked={categories.Nature}
          handleChange={handleCheckBox}
        />
      </LazyLoadComponent>
      <div style={{ borderBottom: "1px solid #857e7e75", width: "65%" }} />
      <h3>Price range</h3>
      <LazyLoadComponent>
        <FilterationItem
          name={"Lower than $20"}
          checked={priceRange["Lower than $20"]}
          handleChange={handlePriceCheckBox}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FilterationItem
          name={"$20 - $100"}
          checked={priceRange["$20 - $100"]}
          handleChange={handlePriceCheckBox}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FilterationItem
          name={"$100 - $200"}
          checked={priceRange["$100 - $200"]}
          handleChange={handlePriceCheckBox}
        />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <FilterationItem
          name={"More than $200"}
          checked={priceRange["More than $200"]}
          handleChange={handlePriceCheckBox}
        />
      </LazyLoadComponent>
    </>
  );
}

export default Filteration;
