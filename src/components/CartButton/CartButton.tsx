import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

type CartButtonProps = {
  items: any[];
  onClick?: () => void;
};

const CartButton: React.FC<CartButtonProps> = ({ items, onClick }) => {
  return (
    <Badge
      data-testid="cart-badge"
      badgeContent={items.length}
      color="error"
      onClick={onClick}
    >
      <ShoppingCartIcon data-testid="cart-icon" color="action" />
    </Badge>
  );
};

export default CartButton;
