/** @format */
import data from "../../data/data.json";
import { ProductCard } from "./ProductCard";
export const Products = () => {
  const renderedProducts = data.productdata.map((item) => (
    <ProductCard item={item} />
  ));
  return <div className="product-listing">{renderedProducts}</div>;
};
