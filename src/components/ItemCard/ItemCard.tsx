import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemButton from "../ItemButton/ItemButton";
import { useAppContext } from "../../context/appContext";
import LoginDialog from "../LoginDialog/LoginDialog";
import { Item } from "../../common/model";
import { ItemCardProps } from "./ItemCard.model";
import { ItemCardContainer } from "./ItemCard.style";

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { cart, updateItemToCart, userData } = useAppContext();
  const [itemIndex, setItemIndex] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleCloseDialog = () => setOpenDialog(false);

  useEffect(() => {
    if (cart !== null) {
      setItemIndex(cart.items.findIndex((element) => element.id === item.id));
    }
  }, [cart]);

  const handleUpdate = (item: Item, action: "INCREMENT" | "DECREMENT") => {
    if (userData === null) {
      setOpenDialog(true);
    } else {
      updateItemToCart(item, action);
    }
  };

  return (
    <>
      <ItemCardContainer>
        <Box
          component="img"
          alt="item-image"
          src={item.data.image}
          width="200px"
          sx={{ borderRadius: "20px" }}
        />
        <Typography variant="body2">{item.data.name}</Typography>
        <Typography variant="body1">R$ {item.data.price.toFixed(2)}</Typography>
        <Divider sx={{ width: "100%", margin: "20px" }} />
        <ItemButton
          handleUpdateItem={handleUpdate}
          item={item}
          cartItem={itemIndex !== null ? cart?.items[itemIndex] : null}
        />
      </ItemCardContainer>

      <LoginDialog open={openDialog} handleClose={handleCloseDialog} />
    </>
  );
};

export default ItemCard;
