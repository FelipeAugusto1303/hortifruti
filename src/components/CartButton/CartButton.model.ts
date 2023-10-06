import { CartItem } from "../../common/model";

export type CartButtonProps = {
  items: CartItem[];
  onClick?: () => void;
};
