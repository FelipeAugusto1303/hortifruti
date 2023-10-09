import { Button, Typography } from "@mui/material";
import React from "react";
import { ItemButtonProps } from "./ItemButton.model";
import { ItemButtonContainer } from "./ItemButton.style";

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
        <ItemButtonContainer>
          <Button
            data-testid="item-add"
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
          <Typography data-testid="item-qnt" variant="body2">
            {cartItem.qnt}
          </Typography>
          <Button
            data-testid="item-remove"
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
        </ItemButtonContainer>
      )}
    </>
  );
};

export default ItemButton;
