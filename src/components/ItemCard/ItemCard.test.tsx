import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ItemCard from "./ItemCard";

describe("ItemCard", () => {
  test("Should renders", () => {
    const { getByTestId } = render(<ItemCard />);

    expect(getByTestId("itemcard-container")).toBeInTheDocument();
  });

  test("Should correct styles", () => {
    const { getByTestId } = render(<ItemCard />);

    expect(getByTestId("itemcard-container")).toHaveStyle({
      width: "200px",
      height: "300px",
      borderRadius: "20px",
      border: "1px solid #ccc",
    });
  });

  test("Should have image", () => {
    const { getByAltText } = render(<ItemCard />);

    expect(getByAltText("item-image")).toBeInTheDocument();
  });

  test("Should image have correct styles", () => {
    const { getByAltText } = render(<ItemCard />);

    expect(getByAltText("item-image")).toHaveStyle({
      width: "200px",
      borderRadius: "20px",
    });
  });
});
