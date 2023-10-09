import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import LoginButton from "./LoginButton";

describe("LoginButton", () => {
  test("Should renders", () => {
    const { getByTestId } = render(
      <LoginButton
        user={{}}
        onClick={() => console.log("click")}
        signout={() => console.log("signout")}
      />
    );

    expect(getByTestId("login-button-container")).toBeInTheDocument();
  });

  test("Should have styles", () => {
    const { getByTestId } = render(
      <LoginButton
        user={{}}
        onClick={() => console.log("click")}
        signout={() => console.log("signout")}
      />
    );

    expect(getByTestId("login-button-container")).toHaveStyle({
      display: "flex",
      alignItems: "center",
      gap: "5px",
    });
  });

  test("Should have correct text without user", () => {
    const { getByText } = render(
      <LoginButton
        user={{}}
        onClick={() => console.log("click")}
        signout={() => console.log("signout")}
      />
    );

    expect(getByText("Entrar")).toBeInTheDocument();
  });

  test("Should have correct text with user", () => {
    const { getByText } = render(
      <LoginButton
        user={{ name: "Felipe" }}
        onClick={() => console.log("click")}
        signout={() => console.log("signout")}
      />
    );

    expect(getByText("Olá, Felipe")).toBeInTheDocument();
  });

  test("Should have correct text color with user", () => {
    const { getByText } = render(
      <LoginButton
        user={{ name: "Felipe" }}
        onClick={() => console.log("click")}
        signout={() => console.log("signout")}
      />
    );

    expect(getByText("Olá, Felipe")).toHaveStyle({ color: "#0000008A" });
  });

  test("Should have correct text color without user", () => {
    const { getByText } = render(
      <LoginButton
        user={{}}
        onClick={() => console.log("click")}
        signout={() => console.log("signout")}
      />
    );

    expect(getByText("Entrar")).toHaveStyle({ color: "#0000008A" });
  });
});
