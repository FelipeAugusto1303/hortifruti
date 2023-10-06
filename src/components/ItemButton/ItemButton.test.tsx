import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ItemButton from "./ItemButton";

describe("ItemButton", () => {
  test("Should renders", () => {
    const handleFunction = (item: any, action: "INCREMENT" | "DECREMENT") => {};
    const item = null;
    const cartItem = null;
    const { getByText } = render(
      <ItemButton
        handleUpdateItem={handleFunction}
        item={item}
        cartItem={cartItem}
      />
    );

    expect(getByText("Adicionar Item")).toBeInTheDocument();
  });
});
