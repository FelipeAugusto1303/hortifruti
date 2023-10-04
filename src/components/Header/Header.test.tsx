import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Header from "./Header";

describe("Header", () => {
  test("Should renders", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("header-container")).toBeInTheDocument();
  });

  test("Should have correct styles", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("header-container")).toHaveStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "70px",
      paddingRight: "20px",
    });
  });

  test("Should have logo image", () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText("logo")).toBeInTheDocument();
  });

  test("Should logo have correct src attribute", () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText("logo")).toHaveAttribute("src", "./logo.png");
  });

  test("Should logo have correct height attribute", () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText("logo")).toHaveStyle({ height: "70px" });
  });

  test("Should buttons container have correct styles", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("buttons-container")).toHaveStyle({
      display: "flex",
      gap: "10px",
    });
  });
});
