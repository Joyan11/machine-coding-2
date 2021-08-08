/** @format */

import { useMainContext } from "../../context/context";
import { discount } from "../../utils/discount";
import { GiCancel } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export const CartCard = ({ item }) => {
  const { dispatch } = useMainContext();

  const removeItems = (quantity) => {
    if (quantity > 1) {
      dispatch({ type: "DECREASE_QUANTITY", payload: item.id });
    }
  };

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
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
          }>
          {" "}
          Remove{" "}
        </button>
        <div
          style={{
            display: "flex",
            padding: "2rem",
            justifyContent: "space-around",
          }}>
          <AiOutlineMinus
            className="quantity"
            onClick={() => removeItems(item.quantity)}
          />
          <span>{item.quantity}</span>
          <AiOutlinePlus
            className="quantity"
            onClick={() =>
              dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
            }
          />
        </div>
      </div>
    </div>
  );
};
