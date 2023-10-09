import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import LoginDialog from "./LoginDialog";

describe("Login Dialog", () => {
  test("Should renders", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LoginDialog open={true} handleClose={vi.fn()} />
      </BrowserRouter>
    );
    expect(getByTestId("dialog-title")).toBeInTheDocument();
  });

  test("Should have description", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LoginDialog open={true} handleClose={vi.fn()} />
      </BrowserRouter>
    );
    expect(getByTestId("dialog-description")).toBeInTheDocument();
  });

  test("Should cancel button works", () => {
    const cancel = vi.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <LoginDialog open={true} handleClose={cancel} />
      </BrowserRouter>
    );

    fireEvent.click(getByTestId("dialog-cancel"));

    expect(cancel).toHaveBeenCalledTimes(1);
  });
});
