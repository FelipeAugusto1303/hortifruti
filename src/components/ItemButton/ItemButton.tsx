import { Box, Button, Typography } from "@mui/material";
import React from "react";

type ItemButtonProps = {
  handleUpdateItem: (item: any, action: "INCREMENT" | "DECREMENT") => void;
  item: any;
  cartItem: any | null;
};

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
          sx={{
            backgroundColor: "#ea1d2c",
            color: "#fff",
            width: "70%",
            marginTop: "10px",
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
            marginTop: "10px",
            border: "1px solid #ccc",
            borderRadius: "30px",
            width: "80%",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#ea1d2c",
              color: "#fff",
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
            sx={{
              backgroundColor: "#ea1d2c",
              color: "#fff",
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
