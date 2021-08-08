/** @format */

export const discount = (price, discount) => {
  console.log(discount);
  return price - Math.floor((price / 100) * discount);
};
