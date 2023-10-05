import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemButton from "../ItemButton/ItemButton";
import { useAppContext } from "../../context/appContext";
import LoginDialog from "../LoginDialog/LoginDialog";

type ItemCardProps = {
  item: any;
};

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

  const handleUpdate = (item: any, action: "INCREMENT" | "DECREMENT") => {
    if (userData === null) {
      setOpenDialog(true);
    } else {
      updateItemToCart(item, action);
    }
  };

  return (
    <>
      <Box
        data-testid="itemcard-container"
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "250px",
          height: "320px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          "@media (max-width: 440px)": {
            width: "90%",
          },
        }}
      >
        <Box
          component="img"
          alt="item-image"
          src={item.data.image}
          width="200px"
          sx={{ borderRadius: "20px" }}
        />
        <Typography variant="body2">{item.data.name}</Typography>
        <Typography variant="body1">R$ {item.data.price.toFixed(2)}</Typography>
        <Divider sx={{ color: "red", width: "100%", margin: "5px" }} />
        <ItemButton
          handleUpdateItem={handleUpdate}
          item={item}
          cartItem={itemIndex !== null ? cart?.items[itemIndex] : null}
        />
      </Box>
      <LoginDialog open={openDialog} handleClose={handleCloseDialog} />
    </>
  );
};

export default ItemCard;
