import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Typography } from "@mui/material";
import { getTotalPrice } from "../../common/utils";
import { CartButtonProps } from "./CartButton.model";
import { CartButtonContainer } from "./CartButton.style";

const CartButton: React.FC<CartButtonProps> = ({ items, onClick }) => {
  return (
    <CartButtonContainer onClick={onClick} data-testid="cart-button">
      <Badge data-testid="cart-badge" badgeContent={items.length} color="error">
        <ShoppingCartIcon data-testid="cart-icon" color="action" />
      </Badge>
      <Typography variant="body1">
        R$ {getTotalPrice(items).toFixed(2)}
      </Typography>
    </CartButtonContainer>
  );
};

export default CartButton;
