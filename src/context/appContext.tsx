import React, { createContext, useContext, useEffect, useState } from "react";
import { getUser, handleSignOut } from "../services/firebaseService";
import { onSnapshot } from "firebase/firestore";
import { Cart, CartItem, Item, UserData } from "../common/model";
import { AppContextProps, AppContextType } from "./appContext.model";

const AppContext = createContext<AppContextType>({
  signIn: () => {},
  signOut: () => {},
  userData: null,
  cart: null,
  updateItemToCart: () => {},
  clearCart: () => {},
});

const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const user = localStorage.getItem("user");

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData[] | null>(
    user !== null ? JSON.parse(user) : null
  );

  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    if (userEmail !== null) {
      const q = getUser(userEmail);
      onSnapshot(q, (querySnapshot) => {
        const result = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setUserData(result);
        localStorage.setItem("user", JSON.stringify(result));
      });
    }
  }, [userEmail]);

  useEffect(() => {
    if (userData !== null) {
      setCart({
        user: userData[0].data,
        items: [],
      });
    }
  }, [userData]);

  const signIn = (email: string | null) => {
    setUserEmail(email);
  };

  const signOut = () => {
    handleSignOut().then(() => {
      localStorage.clear();
      setUserData(null);
      setCart(null);
      location.reload();
    });
  };

  const clearCart = () => {
    if (userData !== null) {
      setCart({
        user: userData[0].data,
        items: [],
      });
    }
  };

  const updateItemsArray = (item: Item, itemArray: CartItem[]) => {
    const index = itemArray.findIndex((element) => element.id === item.id);
    itemArray[index].qnt = itemArray[index].qnt + 1;

    itemArray.splice(index, 1, itemArray[index]);

    return itemArray;
  };

  const decrementItemsArray = (index: number, itemArray: CartItem[]) => {
    itemArray[index].qnt = itemArray[index].qnt - 1;

    itemArray.splice(index, 1, itemArray[index]);

    return itemArray;
  };

  const removeItemArray = (index: number, itemArray: CartItem[]) => {
    itemArray.splice(index, 1);

    return itemArray;
  };

  const incrementItem = (item: Item) => {
    if (userData !== null && cart !== null) {
      if (cart.items.length === 0) {
        setCart({
          user: userData[0].data,
          items: [
            {
              id: item.id,
              name: item.data.name,
              price: item.data.price,
              qnt: 1,
            },
          ],
        });
      } else if (
        cart.items.findIndex((element) => element.id === item.id) === -1
      ) {
        setCart({
          user: userData[0].data,
          items: [
            ...cart.items,
            {
              id: item.id,
              name: item.data.name,
              price: item.data.price,
              qnt: 1,
            },
          ],
        });
      } else {
        setCart({
          user: userData[0].data,
          items: updateItemsArray(item, cart.items),
        });
      }
    }
  };

  const decrementItem = (item: Item) => {
    if (userData !== null && cart !== null) {
      const index = cart.items.findIndex((element) => element.id === item.id);
      if (index > -1 && cart.items[index].qnt > 1) {
        setCart({
          user: userData[0].data,
          items: decrementItemsArray(index, cart.items),
        });
      } else if (index > -1 && cart.items[index].qnt === 1) {
        setCart({
          user: userData[0].data,
          items: removeItemArray(index, cart.items),
        });
      }
    }
  };

  const updateItemToCart = (item: Item, action: "INCREMENT" | "DECREMENT") => {
    switch (action) {
      case "INCREMENT":
        incrementItem(item);
        break;
      case "DECREMENT":
        decrementItem(item);
        break;
    }
  };

  return (
    <AppContext.Provider
      value={{
        signIn,
        signOut,
        userData,
        cart,
        updateItemToCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};

export { AppContextProvider, useAppContext };
