/** @format */

import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
const mainContext = createContext();

const initialState = {
  cart: [],
  totalPrice: 0,
  totalDiscount: 0,
};

export const MainContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "UPDATE_CART_PRICE" });
  }, [state.cart]);

  return (
    <mainContext.Provider value={{ ...state, dispatch }}>
      {children}
    </mainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(mainContext);
};
