import { CartItem, Item } from "../../common/model";

export type ItemButtonProps = {
  handleUpdateItem: (item: Item, action: "INCREMENT" | "DECREMENT") => void;
  item: Item;
  cartItem: CartItem | null | undefined;
};
