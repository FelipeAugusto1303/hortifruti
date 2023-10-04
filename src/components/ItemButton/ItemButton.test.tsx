import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ItemButton from "./ItemButton";

describe("ItemButton", () => {
  test("Should renders", () => {
    const { getByText } = render(<ItemButton />);

    expect(getByText("Adicionar Item")).toBeInTheDocument();
  });

  test("Should add item", () => {});
});
