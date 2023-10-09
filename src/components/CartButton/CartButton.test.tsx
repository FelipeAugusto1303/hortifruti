import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import CartButton from "./CartButton";

describe("CartButton", () => {
  test("Should renders", () => {
    const { getByTestId } = render(<CartButton items={[]} />);

    expect(getByTestId("cart-icon")).toBeInTheDocument();
  });

  test("Should not show badge in cart", () => {
    const { getByTestId } = render(<CartButton items={[]} />);

    expect(getByTestId("cart-badge")).not.toHaveTextContent("0");
  });

  test("Should show items length in badge", () => {
    const items = [
      { id: "test-id1", name: "test1", price: 20, qnt: 1 },
      { id: "test-id2", name: "test2", price: 20, qnt: 1 },
    ];
    const { getByTestId } = render(<CartButton items={items} />);

    expect(getByTestId("cart-badge")).toHaveTextContent("2");
  });

  test("Should navigate to shopping cart page", () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(
      <CartButton items={[]} onClick={handleClick} />
    );

    fireEvent.click(getByTestId("cart-badge"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
