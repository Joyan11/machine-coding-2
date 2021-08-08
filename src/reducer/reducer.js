/** @format */

import { discount } from "../utils/discount";

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
      };
    case "UPDATE_CART_PRICE":
      const totalCost = state.cart.reduce((acc, item) => {
        const sum = item.price * item.quantity;
        return acc + sum;
      }, 0);
      const totalDis = state.cart.reduce((acc, item) => {
        const sum = item.quantity * discount(item.price, item.discount);
        return acc + sum;
      }, 0);
      return {
        ...state,
        totalPrice: totalCost.toFixed(2),
        totalDiscount: totalDis.toFixed(2),
      };
    default:
      return {
        state,
      };
  }
};
