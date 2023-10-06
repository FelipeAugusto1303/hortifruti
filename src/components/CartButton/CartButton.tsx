import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, Typography } from "@mui/material";
import { getTotalPrice } from "../../common/utils";
import { CartItem } from "../../common/model";
type CartButtonProps = {
  items: CartItem[];
  onClick?: () => void;
};

const CartButton: React.FC<CartButtonProps> = ({ items, onClick }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Badge data-testid="cart-badge" badgeContent={items.length} color="error">
        <ShoppingCartIcon data-testid="cart-icon" color="action" />
      </Badge>
      <Typography variant="body1">
        R$ {getTotalPrice(items).toFixed(2)}
      </Typography>
    </Box>
  );
};

export default CartButton;
