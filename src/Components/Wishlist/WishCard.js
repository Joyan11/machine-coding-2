/** @format */

import { useMainContext } from "../../context/context";
import { discount } from "../../utils/discount";
export const WishCard = ({ item }) => {
  const { dispatch } = useMainContext();

  return (
    <div className="card card--verticle card--m border shadow product-card">
      <figure className="card--image">
        <img src={item.image} alt={item.name} />{" "}
      </figure>
      <div className="card--body">
        {" "}
        <span className="card--title">{item.name}</span>
        <p className="card--text">
          {" "}
          Rs. {discount(item.price, item.discount)}{" "}
          <span className="card--subtext">{item.price}</span>{" "}
        </p>
        <button
          className="btn btn--round btn-primary card--button"
          onClick={() => dispatch({ type: "MOVE_TO_CART", payload: item })}>
          {" "}
          Move To Cart{" "}
        </button>
      </div>
    </div>
  );
};
