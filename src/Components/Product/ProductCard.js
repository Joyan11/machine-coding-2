/** @format */

import { useMainContext } from "../../context/context";
import { discount } from "../../utils/discount";
import { Link } from "react-router-dom";
export const ProductCard = ({ item }) => {
  const { cart, dispatch } = useMainContext();

  const itemExists = (id) => {
    if (cart.some((item) => item.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="card card--verticle card--m border product-card">
      <figure className="card--image">
        {" "}
        <img src={item.image} alt="" />{" "}
      </figure>
      <div className="card--body">
        {" "}
        <span className="card--title">{item.name}</span>
        <p className="card--text">
          {" "}
          Rs. {discount(item.price, item.discount)}{" "}
          <span className="card--subtext">{item.price}</span>{" "}
        </p>
        {!itemExists(item.id) ? (
          <button
            className="btn btn--round btn-primary card--button"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}>
            {" "}
            Add to Cart{" "}
          </button>
        ) : (
          <Link
            to="/cart"
            className="btn btn--round btn-primary card--button go-to-cart">
            {" "}
            Go To Cart{" "}
          </Link>
        )}
      </div>
    </div>
  );
};
