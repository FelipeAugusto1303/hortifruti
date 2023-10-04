import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginButton from "./LoginButton";

describe("LoginButton", () => {
  test("Should renders", () => {
    const { getByTestId } = render(<LoginButton user={{}} />);

    expect(getByTestId("login-button-container")).toBeInTheDocument();
  });

  test("Should have styles", () => {
    const { getByTestId } = render(<LoginButton user={{}} />);

    expect(getByTestId("login-button-container")).toHaveStyle({
      display: "flex",
      alignItems: "center",
      gap: "5px",
    });
  });

  test("Should have correct text without user", () => {
    const { getByText } = render(<LoginButton user={{}} />);

    expect(getByText("Entrar")).toBeInTheDocument();
  });

  test("Should have correct text with user", () => {
    const { getByText } = render(<LoginButton user={{ name: "Felipe" }} />);

    expect(getByText("Olá, Felipe")).toBeInTheDocument();
  });

  test("Should have correct text color with user", () => {
    const { getByText } = render(<LoginButton user={{ name: "Felipe" }} />);

    expect(getByText("Olá, Felipe")).toHaveStyle({ color: "#0000008A" });
  });

  test("Should have correct ttext color without user", () => {
    const { getByText } = render(<LoginButton user={{}} />);

    expect(getByText("Entrar")).toHaveStyle({ color: "#0000008A" });
  });
});
