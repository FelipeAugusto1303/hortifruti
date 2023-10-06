import { CartItem } from "./model";

export const getTotalPrice = (items: CartItem[]): number => {
  var total = 0;
  items.forEach((item) => {
    total = total + item.price * item.qnt;
  });
  return total;
};
