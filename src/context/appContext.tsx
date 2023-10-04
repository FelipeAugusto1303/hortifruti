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
}

type AppContextProps = {
  children: React.ReactNode;
};

const AppContext = createContext<AppContextType>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  signIn: () => {},
  signOut: () => {},
  userData: null,
});

const AppContextProvider: React.FC<AppContextProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userData, setUserData] = useState<any[] | null>(
    JSON.parse(localStorage.getItem("user"))
  );

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
      console.log(result);
      localStorage.clear();
      setUserData(null);
      location.reload();
    });
  };

  return (
    <AppContext.Provider
      value={{ count, increment, decrement, signIn, signOut, userData }}
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
