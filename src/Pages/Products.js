/** @format */
import data from "../data/data.json";
import { ProductCard } from "../Components/Product/ProductCard";
import React from "react";
export const Products = () => {
  const renderedProducts = React.Children.toArray(
    data.productdata.map((item) => <ProductCard item={item} />)
  );
  return <div className="product-listing">{renderedProducts}</div>;
};
