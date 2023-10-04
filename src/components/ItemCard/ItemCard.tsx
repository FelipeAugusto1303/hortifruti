import { Box, Button, Divider } from "@mui/material";
import React from "react";
import ItemButton from "../ItemButton/ItemButton";

const ItemCard: React.FC = () => {
  return (
    <Box
      data-testid="itemcard-container"
      component="div"
      sx={{
        width: "200px",
        height: "300px",
        borderRadius: "20px",
        border: "1px solid #ccc",
      }}
    >
      <Box
        component="img"
        alt="item-image"
        src="https://www.hortifrutinovohorizonte.com.br/image/cache/catalog/manga-tommy-kg-800x800.jpg"
        width="200px"
        sx={{ borderRadius: "20px" }}
      />
      <Divider />
      <ItemButton />
    </Box>
  );
};

export default ItemCard;
