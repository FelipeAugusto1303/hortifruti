import { DocumentData } from "firebase/firestore";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qnt: number;
};

export type Item = {
  id: string;
  data: DocumentData;
};

export type User = {
  name: string;
  email: string;
};

export type Cart = {
  user: DocumentData;
  items: CartItem[];
};

export type UserData = {
  id: string;
  data: DocumentData;
};
