import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ItemButtonProps } from "./ItemButton.model";

const ItemButton: React.FC<ItemButtonProps> = ({
  handleUpdateItem,
  item,
  cartItem,
}) => {
  return (
    <>
      {!cartItem ? (
        <Button
          data-testid="add-item-button"
          variant="contained"
          sx={{
            width: "70%",
          }}
          onClick={() => handleUpdateItem(item, "INCREMENT")}
        >
          Adicionar Item
        </Button>
      ) : (
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ccc",
            borderRadius: "30px",
            width: "80%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: "20px",
              height: "40px",
              borderRadius: "30px 0px 0px 30px",
            }}
            onClick={() => handleUpdateItem(item, "INCREMENT")}
          >
            +
          </Button>
          <Typography variant="body2">{cartItem.qnt}</Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: "20px",
              height: "40px",
              borderRadius: "0px 30px 30px 0px",
            }}
            onClick={() => handleUpdateItem(item, "DECREMENT")}
          >
            -
          </Button>
        </Box>
      )}
    </>
  );
};

export default ItemButton;
