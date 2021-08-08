/** @format */

import React from "react";
import { useMainContext } from "../../context/context";
import { WishCard } from "./WishCard";

export const Wishlist = () => {
  const { wishlist } = useMainContext();
  const renderWish = React.Children.toArray(
    wishlist.map((item) => <WishCard item={item} />)
  );
  return <div className="cart-products">{renderWish}</div>;
};
