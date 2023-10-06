import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import ItemCard from "./ItemCard";
import { AppContextProvider } from "../../context/appContext";
import { BrowserRouter } from "react-router-dom";

describe("ItemCard", () => {
  test("Should renders", () => {
    const item = {
      id: "1g23hg1hsbh",
      data: {
        image: "teste.png",
        name: "teste",
        price: 20,
      },
    };
    const { getByTestId } = render(
      <AppContextProvider>
        <BrowserRouter>
          <ItemCard item={item} />
        </BrowserRouter>
      </AppContextProvider>
    );

    expect(getByTestId("itemcard-container")).toBeInTheDocument();
  });

  test("Should correct styles", () => {
    const item = {
      id: "1g23hg1hsbh",
      data: {
        image: "teste.png",
        name: "teste",
        price: 20,
      },
    };
    const { getByTestId } = render(
      <AppContextProvider>
        <BrowserRouter>
          <ItemCard item={item} />
        </BrowserRouter>
      </AppContextProvider>
    );

    expect(getByTestId("itemcard-container")).toHaveStyle(
      "display: flex;flex-direction:column;align-items:center;width:250px;height:320px;border-radius:20px;border:1px solid #ccc;"
    );
  });

  test("Should have image", () => {
    const item = {
      id: "1g23hg1hsbh",
      data: {
        image: "teste.png",
        name: "teste",
        price: 20,
      },
    };
    const { getByAltText } = render(
      <AppContextProvider>
        <BrowserRouter>
          <ItemCard item={item} />
        </BrowserRouter>
      </AppContextProvider>
    );

    expect(getByAltText("item-image")).toBeInTheDocument();
  });

  test("Should image have correct styles", () => {
    const item = {
      id: "1g23hg1hsbh",
      data: {
        image: "teste.png",
        name: "teste",
        price: 20,
      },
    };
    const { getByAltText } = render(
      <AppContextProvider>
        <BrowserRouter>
          <ItemCard item={item} />
        </BrowserRouter>
      </AppContextProvider>
    );

    expect(getByAltText("item-image")).toHaveStyle({
      borderRadius: "20px",
      width: "200px",
    });
  });
});
