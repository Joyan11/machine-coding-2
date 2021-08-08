/** @format */

import { useMainContext } from "../../context/context";

export const TotalCard = () => {
  const { totalPrice, totalDiscount } = useMainContext();
  return (
    <div
      className="card card--verticle card--m border "
      style={{ padding: "2rem" }}>
      <div className="card--body">
        {" "}
        <span className="card--title">Total Price</span>
        <p className="card--text">
          Total Price: <span>{totalPrice}</span>
        </p>
        <p className="card--text">
          Total Discount: <span>{totalDiscount}</span>
        </p>
        <p className="card--text">
          Final Price: <span>{(totalPrice - totalDiscount).toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};
