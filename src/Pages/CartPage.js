/** @format */

import React from "react";
import { useMainContext } from "../context/context";
import { CartCard } from "../Components/Cart/CartCard";
import { TotalCard } from "../Components/Cart/TotalCard";
import { Link } from "react-router-dom";
import { Wishlist } from "../Components/Wishlist/Wishlist";

export const CartPage = () => {
  const { cart, wishlist } = useMainContext();

  const renderProducts = React.Children.toArray(
    cart.map((item) => <CartCard item={item} />)
  );
  return (
    <div>
      <div className="cart-products">{renderProducts}</div>
      <div className="total-card">{cart.length > 0 && <TotalCard />}</div>
      {cart.length === 0 && (
        <>
          <p className="empty-message">Cart Is Empty</p>
        </>
      )}
      {wishlist.length > 0 && (
        <div>
          <h1 className="empty-message">Save for later</h1>
          <Wishlist />
        </div>
      )}
    </div>
  );
};
