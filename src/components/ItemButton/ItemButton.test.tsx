import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ItemButton from "./ItemButton";

describe("ItemButton", () => {
  test("Should renders", () => {
    const handleFunction = (item: any, action: "INCREMENT" | "DECREMENT") => {
      console.log(item, action);
    };
    const item = { id: "id-test", data: { name: "test", price: 20 } };
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
