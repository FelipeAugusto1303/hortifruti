import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getUser,
  handleSignIn,
  handleSignOut,
} from "../services/firebaseService";
import { onSnapshot } from "firebase/firestore";

interface AppContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  userData: any[] | null;
  cart: CartProps | null;
  updateItemToCart: (item: any, action: "INCREMENT" | "DECREMENT") => void;
}

type AppContextProps = {
  children: React.ReactNode;
};

type CartProps = {
  user: { name: string; email: string };
  items: { id: string; name: string; price: number; qnt: number }[];
};

const AppContext = createContext<AppContextType>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  signIn: () => {},
  signOut: () => {},
  userData: null,
  cart: null,
  updateItemToCart: () => {},
});

const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userData, setUserData] = useState<any[] | null>(
    JSON.parse(localStorage.getItem("user"))
  );

  const [cart, setCart] = useState<CartProps | null>(null);

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

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const signIn = (email: string, password: string) => {
    handleSignIn(email, password)
      .then((response) => {
        setUserEmail(response.user.email);
      })
      .catch((err) => console.log(err));
  };

  const signOut = () => {
    handleSignOut().then((result) => {
      localStorage.clear();
      setUserData(null);
      location.reload();
    });
  };

  const updateItemsArray = (item: any, itemArray: any[]) => {
    const index = itemArray.findIndex((element) => element.id === item.id);
    itemArray[index].qnt = itemArray[index].qnt + 1;

    itemArray.splice(index, 1, itemArray[index]);

    return itemArray;
  };

  const decrementItemsArray = (index: number, itemArray: any[]) => {
    itemArray[index].qnt = itemArray[index].qnt - 1;

    itemArray.splice(index, 1, itemArray[index]);

    return itemArray;
  };

  const removeItemArray = (index: number, itemArray: any[]) => {
    itemArray.splice(index, 1);

    return itemArray;
  };

  const incrementItem = (item: any) => {
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
        //atualizar a quantidade de produtos no carrinho, podendo tbm remover items
        setCart({
          user: userData[0].data,
          items: updateItemsArray(item, cart.items),
        });
      }
    }
  };

  const decrementItem = (item: any) => {
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

  const updateItemToCart = (item: any, action: "INCREMENT" | "DECREMENT") => {
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
        count,
        increment,
        decrement,
        signIn,
        signOut,
        userData,
        cart,
        updateItemToCart,
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
