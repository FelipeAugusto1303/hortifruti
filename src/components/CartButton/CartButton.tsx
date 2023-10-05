import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, Typography } from "@mui/material";

type CartButtonProps = {
  items: any[];
  onClick?: () => void;
};

const CartButton: React.FC<CartButtonProps> = ({ items, onClick }) => {
  const getTotalPrice = (items: any[]) => {
    var total = 0;
    items.forEach((item) => {
      total = total + item.price * item.qnt;
    });
    return total;
  };
  return (
    <Box
      component="div"
      sx={{ display: "flex", alignItems: "center", gap: "10px" }}
    >
      <Badge
        data-testid="cart-badge"
        badgeContent={items.length}
        color="error"
        onClick={onClick}
      >
        <ShoppingCartIcon data-testid="cart-icon" color="action" />
      </Badge>
      <Typography variant="body1" sx={{ color: "#ea1d2c", fontWeight: "bold" }}>
        R$ {getTotalPrice(items).toFixed(2)}
      </Typography>
    </Box>
  );
};

export default CartButton;
