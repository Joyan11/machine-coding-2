/** @format */

import React from "react";
import { useMainContext } from "../context/context";
import { CartCard } from "../Components/Cart/CartCard";
import { TotalCard } from "../Components/Cart/TotalCard";

export const CartPage = () => {
  const { cart } = useMainContext();

  const renderProducts = React.Children.toArray(
    cart.map((item) => <CartCard item={item} />)
  );
  return (
    <div>
      <div className="cart-products">{renderProducts}</div>
      <div className="total-card">{cart.length > 0 && <TotalCard />}</div>
      {cart.length === 0 && <p className="empty-message">Cart Is Empty</p>}
    </div>
  );
};
