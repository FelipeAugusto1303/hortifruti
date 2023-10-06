import { Cart, Item, UserData } from "../common/model";

export interface AppContextType {
  signIn: (email: string | null) => void;
  signOut: () => void;
  userData: UserData[] | null;
  cart: Cart | null;
  updateItemToCart: (item: Item, action: "INCREMENT" | "DECREMENT") => void;
  clearCart: () => void;
}

export type AppContextProps = {
  children: React.ReactNode;
};
