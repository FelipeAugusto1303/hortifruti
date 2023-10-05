import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StorePage from "./pages/StorePage/StorePage.tsx";
import { AppContextProvider } from "./context/appContext.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import CartPage from "./pages/CartPage/CartPage.tsx";

const router = createBrowserRouter([
  {
    path: "/hortifruti/",
    element: <StorePage />,
  },
  {
    path: "/hortifruti/login",
    element: <Login />,
  },
  {
    path: "/hortifruti/register",
    element: <Register />,
  },
  {
    path: "/hortifruti/cart",
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
